import { existsSync, readFileSync, writeFileSync } from "fs";

import { lazyObject } from "hardhat/plugins";

import { MigrateError } from "../../errors";

import { catchError, resolvePathToFile, toJSON } from "../../utils";

import { StorageNamespaces } from "../../types/tools";

@catchError
export class MigrateStorage {
  private static readonly _fileName = ".storage.json";

  private static _state: Record<string, any> = lazyObject(() => MigrateStorage._readFullStateFromFile());

  constructor(private _namespace: StorageNamespaces = StorageNamespaces.Storage) {
    if (!MigrateStorage._state[this._namespace]) {
      MigrateStorage._state[this._namespace] = {};
    }
  }

  public get(key: string): any {
    return MigrateStorage._state[this._namespace][key];
  }

  public getAll(): Record<string, any> {
    return MigrateStorage._state[this._namespace];
  }

  public set(key: string, value: any, force = false): void {
    if (!force && this.has(key)) {
      throw new MigrateError(`Key already exists`);
    }

    MigrateStorage._state[this._namespace][key] = value;

    MigrateStorage._saveStateToFile();
  }

  public delete(key: string, force = false): void {
    if (!force && !this.has(key)) {
      throw new MigrateError(`Key not found`);
    }

    delete MigrateStorage._state[this._namespace][key];

    MigrateStorage._saveStateToFile();
  }

  public has(key: string): boolean {
    return MigrateStorage._state[this._namespace][key] !== undefined;
  }

  public clear(): void {
    MigrateStorage._state[this._namespace] = {};

    MigrateStorage._saveStateToFile();
  }

  private static _stateExistsInFile(): boolean {
    return existsSync(this._filePath());
  }

  private static _saveStateToFile() {
    writeFileSync(this._filePath(), toJSON(MigrateStorage._state), {
      flag: "w",
      encoding: "utf8",
    });
  }

  private static _readFullStateFromFile(): Record<string, Record<string, any>> {
    if (!MigrateStorage._stateExistsInFile()) {
      return {};
    }

    const fileContent = readFileSync(this._filePath(), {
      encoding: "utf8",
    });

    return JSON.parse(fileContent);
  }

  private static _filePath(): string {
    return resolvePathToFile("artifacts/build-info", MigrateStorage._fileName);
  }
}

export const DefaultStorage = lazyObject(() => new MigrateStorage(StorageNamespaces.Storage));
export const TransactionStorage = lazyObject(() => new MigrateStorage(StorageNamespaces.Transactions));
export const ArtifactStorage = lazyObject(() => new MigrateStorage(StorageNamespaces.Artifacts));
export const VerificationStorage = lazyObject(() => new MigrateStorage(StorageNamespaces.Verification));