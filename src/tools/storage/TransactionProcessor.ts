import { ContractDeployTransaction, ContractTransactionResponse, isAddress } from "ethers";

import { TransactionStorage } from "./MigrateStorage";

import { MigrateError } from "../../errors";

import {
  catchError,
  createKeyDeploymentFieldsHash,
  createKeyTxFieldsHash,
  isDeployedContractAddress,
} from "../../utils";

import { KeyTransactionFields } from "../../types/tools";
import { validateKeyDeploymentFields, validateKeyTxFields } from "../../types/type-checks";

@catchError
export class TransactionProcessor {
  private static _deployedContracts: Map<string, boolean> = new Map();

  @catchError
  @validateKeyDeploymentFields
  public static saveDeploymentTransaction(args: ContractDeployTransaction, contractName: string, address: string) {
    this._saveContract(args, address);
    this._saveContractByName(contractName, address);
  }

  public static saveDeploymentTransactionWithContractName(contractName: string, address: string) {
    this._saveContractByName(contractName, address);
  }

  /**
   * @param tx - Transaction to save. Acts as a key and value at the same time.
   */
  public static saveTransaction(tx: KeyTransactionFields) {
    this._saveTransaction(
      {
        data: tx.data,
        from: tx.from,
        chainId: tx.chainId,
        to: tx.to,
        value: tx.value,
      },
      tx,
    );
  }

  @catchError
  @validateKeyDeploymentFields
  public static async tryRestoreContractAddressByKeyFields(key: ContractDeployTransaction): Promise<string> {
    const contractAddress = this._tryGetDataFromStorage(
      createKeyDeploymentFieldsHash({
        data: key.data,
        from: key.from!,
        chainId: key.chainId!,
        value: key.value!,
      }),
    );

    if (!isAddress(contractAddress) || !(await isDeployedContractAddress(contractAddress))) {
      throw new MigrateError(`Contract address is not valid`);
    }

    return contractAddress;
  }

  @catchError
  public static async tryRestoreContractAddressByName(contractName: string): Promise<string> {
    const contractAddress = this._tryGetDataFromStorage(contractName);

    if (!isAddress(contractAddress) || !(await isDeployedContractAddress(contractAddress))) {
      throw new MigrateError(`Contract address is not valid`);
    }

    return contractAddress;
  }

  @catchError
  @validateKeyTxFields
  public static tryRestoreSavedTransaction(key: KeyTransactionFields): ContractTransactionResponse {
    if (this._deployedContracts.has(key.to)) {
      throw new MigrateError(`Contract is deployed in the current migration`);
    }

    return this._tryGetDataFromStorage(
      createKeyTxFieldsHash({
        data: key.data,
        from: key.from,
        chainId: key.chainId,
        to: key.to,
        value: key.value,
      }),
    );
  }

  @catchError
  @validateKeyTxFields
  private static _saveTransaction(args: KeyTransactionFields, transaction: KeyTransactionFields) {
    TransactionStorage.set(
      createKeyTxFieldsHash({
        data: args.data,
        from: args.from,
        chainId: args.chainId,
        to: args.to,
        value: args.value,
      }),
      transaction,
      true,
    );
  }

  @catchError
  @validateKeyDeploymentFields
  private static _saveContract(args: ContractDeployTransaction, contractAddress: string) {
    this._deployedContracts.set(contractAddress, true);

    TransactionStorage.set(
      createKeyDeploymentFieldsHash({
        data: args.data,
        from: args.from!,
        chainId: args.chainId!,
        value: args.value!,
      }),
      contractAddress,
      true,
    );
  }

  private static _saveContractByName(contractName: string, address: string) {
    TransactionStorage.set(contractName, address, true);
  }

  private static _tryGetDataFromStorage(key: string): any {
    const value = TransactionStorage.get(key);

    if (!value) {
      throw new MigrateError(`Requested data not found in storage`);
    }

    return value;
  }
}
