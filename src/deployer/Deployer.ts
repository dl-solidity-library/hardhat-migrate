import { isAddress, Signer } from "ethers";

import { HardhatRuntimeEnvironment } from "hardhat/types";

import { catchError, getChainId, getSignerHelper, isDeployedContractAddress } from "../utils";

import { MigrateError } from "../errors";

import { Adapter } from "./adapters/Adapter";
import { TruffleAdapter } from "./adapters/TruffleAdapter";
import { BytecodeAdapter } from "./adapters/BytecodeAdapter";
import { EthersContractAdapter } from "./adapters/EthersContractAdapter";
import { EthersFactoryAdapter } from "./adapters/EthersFactoryAdapter";

import { OverridesAndLibs } from "../types/deployer";
import { Instance, TypedArgs } from "../types/adapter";
import { KeyTransactionFields, MigrationMetadata } from "../types/tools";
import { isContractFactory, isEthersContract, isBytecodeFactory, isTruffleFactory } from "../types/type-checks";

import { Stats } from "../tools/Stats";
import { reporter } from "../tools/reporters/Reporter";
import { transactionRunner } from "../tools/runners/TransactionRunner";
import { TransactionProcessor } from "../tools/storage/TransactionProcessor";

@catchError
export class Deployer {
  constructor(private _hre: HardhatRuntimeEnvironment) {}

  public async deploy<T, A = T, I = any>(
    contract: Instance<A, I> | (T extends Truffle.Contract<I> ? T : never),
    argsOrParameters: OverridesAndLibs | TypedArgs<A> = [] as TypedArgs<A>,
    parameters: OverridesAndLibs = {},
  ): Promise<I> {
    if (!Array.isArray(argsOrParameters)) {
      parameters = argsOrParameters;
      argsOrParameters = [] as TypedArgs<A>;
    }

    const adapter = this._resolveAdapter(contract);

    const minimalContract = await adapter.fromInstance(contract, parameters);
    const contractAddress = await minimalContract.deploy(argsOrParameters as TypedArgs<A>, parameters);

    return adapter.toInstance(contract, contractAddress, parameters);
  }

  public async deployed<T, A = T, I = any>(
    contract: Instance<A, I> | (T extends Truffle.Contract<I> ? T : never),
    contractIdentifier?: string,
  ): Promise<I> {
    const adapter = this._resolveAdapter(contract);
    const defaultContractName = adapter.getContractName(contract, {});

    let contractAddress;

    if (contractIdentifier === undefined) {
      contractAddress = await TransactionProcessor.tryRestoreContractAddressByName(defaultContractName);

      return adapter.toInstance(contract, contractAddress, {});
    }

    if (isAddress(contractIdentifier)) {
      if (!(await isDeployedContractAddress(contractIdentifier))) {
        throw new MigrateError(`Contract with address '${contractIdentifier}' is not deployed`);
      }

      return adapter.toInstance(contract, contractIdentifier, {});
    }

    contractAddress = await TransactionProcessor.tryRestoreContractAddressByName(contractIdentifier);

    return adapter.toInstance(contract, contractAddress, {});
  }

  public async sendNative(to: string, value: bigint): Promise<void> {
    const signer = await getSignerHelper();

    const tx = await this._buildSendTransaction(to, value);

    const methodString = "sendNative";

    if (this._hre.config.migrate.continue) {
      try {
        TransactionProcessor.tryRestoreSavedTransaction(tx);

        reporter!.notifyTransactionRecovery(methodString);

        return;
      } catch {
        reporter!.notifyTransactionSendingInsteadOfRecovery(methodString);
      }
    }

    const txResponse = await signer.sendTransaction(tx);

    const [receipt] = await Promise.all([
      txResponse.wait(this._hre.config.migrate.wait),
      transactionRunner!.reportTransactionResponse(txResponse, methodString),
    ]);

    const saveMetadata: MigrationMetadata = {
      migrationNumber: Stats.currentMigration,
      methodName: methodString,
    };

    TransactionProcessor.saveTransaction(tx, receipt!, saveMetadata);
  }

  public async getSigner(from?: string): Promise<Signer> {
    return getSignerHelper(from);
  }

  public async getChainId(): Promise<bigint> {
    return getChainId();
  }

  private _resolveAdapter<A, I>(contract: Instance<A, I>): Adapter {
    if (isEthersContract(contract)) {
      return new EthersContractAdapter(this._hre.config.migrate);
    }

    if (isTruffleFactory(contract)) {
      return new TruffleAdapter(this._hre);
    }

    if (isBytecodeFactory(contract)) {
      return new BytecodeAdapter(this._hre.config.migrate);
    }

    if (isContractFactory(contract)) {
      return new EthersFactoryAdapter(this._hre.config.migrate);
    }

    throw new MigrateError("Unknown Contract Factory Type");
  }

  private async _buildSendTransaction(to: string, value: bigint): Promise<KeyTransactionFields> {
    return {
      to,
      value,
      chainId: await getChainId(),
      data: "0x",
      from: (await getSignerHelper()).address,
    };
  }
}
