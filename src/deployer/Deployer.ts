import { Signer } from "ethers";

import { HardhatRuntimeEnvironment } from "hardhat/types";

import { catchError, getChainId, getSignerHelper, isDeployedContractAddress } from "../utils";

import { MigrateError } from "../errors";

import { Adapter } from "./adapters/Adapter";
import { PureAdapter } from "./adapters/PureAdapter";
import { EthersAdapter } from "./adapters/EthersAdapter";
import { TruffleAdapter } from "./adapters/TruffleAdapter";
import { PureEthersAdapter } from "./adapters/PureEthersAdapter";

import { OverridesAndLibs } from "../types/deployer";
import { KeyTransactionFields } from "../types/tools";
import { Instance, TypedArgs } from "../types/adapter";
import { isContractFactory, isEthersFactory, isPureFactory, isTruffleFactory } from "../types/type-checks";

import { Reporter } from "../tools/reporters/Reporter";
import { TransactionProcessor } from "../tools/storage/TransactionProcessor";

@catchError
export class Deployer {
  constructor(private _hre: HardhatRuntimeEnvironment) {}

  public async deploy<T, A = T, I = any>(
    contract: Instance<A, I> | (T extends Truffle.Contract<I> ? T : never),
    args: TypedArgs<A> = [] as TypedArgs<A>,
    parameters: OverridesAndLibs = {},
  ): Promise<I> {
    const adapter = this._resolveAdapter(contract);

    const minimalContract = await adapter.fromInstance(contract);

    const contractAddress = await minimalContract.deploy(args, parameters);

    return adapter.toInstance(contract, contractAddress, parameters);
  }

  public setAsDeployed<T, A = T, I = any>(
    contract: Instance<A, I> | (T extends Truffle.Contract<I> ? T : never),
    address: string,
  ): void {
    const adapter = this._resolveAdapter(contract);

    const contractName = adapter.getContractName(contract);

    TransactionProcessor.saveDeploymentTransactionWithContractName(contractName, address);
  }

  public async deployed<T, A = T, I = any>(
    contract: Instance<A, I> | (T extends Truffle.Contract<I> ? T : never),
    contractAddress?: string,
  ): Promise<I> {
    const adapter = this._resolveAdapter(contract);

    if (contractAddress) {
      if (!(await isDeployedContractAddress(contractAddress))) {
        throw new MigrateError(`Contract with address '${contractAddress}' is not deployed`);
      }
    } else {
      const contractName = adapter.getContractName(contract);
      contractAddress = await TransactionProcessor.tryRestoreContractAddressByName(contractName);
    }

    return adapter.toInstance(contract, contractAddress, {});
  }

  public async sendNative(to: string, value: bigint): Promise<void> {
    const signer = await getSignerHelper();

    const tx = await this._buildSendTransaction(to, value);

    const methodString = "sendNative";

    if (this._hre.config.migrate.continue) {
      try {
        TransactionProcessor.tryRestoreSavedTransaction(tx);

        Reporter.notifyTransactionRecovery(methodString);

        return;
      } catch {
        Reporter.notifyTransactionSendingInsteadOfRecovery(methodString);
      }
    }

    const txResponse = await signer.sendTransaction(tx);

    await Promise.all([
      txResponse.wait(this._hre.config.migrate.wait),
      Reporter.reportTransaction(txResponse, methodString),
    ]);

    TransactionProcessor.saveTransaction(tx);
  }

  public async getSigner(from?: string): Promise<Signer> {
    return getSignerHelper(from);
  }

  public async getChainId(): Promise<bigint> {
    return getChainId();
  }

  private _resolveAdapter<A, I>(contract: Instance<A, I>): Adapter {
    if (isEthersFactory(contract)) {
      return new EthersAdapter(this._hre.config.migrate);
    }

    if (isTruffleFactory(contract)) {
      return new TruffleAdapter(this._hre);
    }

    if (isPureFactory(contract)) {
      return new PureAdapter(this._hre.config.migrate);
    }

    if (isContractFactory(contract)) {
      return new PureEthersAdapter(this._hre.config.migrate);
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
