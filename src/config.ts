import { HardhatPluginError } from "hardhat/plugins";
import { ConfigExtender } from "hardhat/types";
import { isAbsolute } from "path";
import { pluginName } from "./constants";
import { MigrateConfig, PluginName } from "./types/migrations";

const defaultConfig: MigrateConfig = {
  from: -1,
  to: -1,
  only: -1,
  skip: -1,
  confirmations: 0,
  verify: false,
  attempts: 0,
  pathToMigrations: "./deploy",
  skipVerificationErrors: ["already verified"],
  force: false,
  pluginNames: PluginName.ETHERS,
};

export const migrateConfigExtender: ConfigExtender = (resolvedConfig, config) => {
  resolvedConfig.migrate = mergeConfigs(config.migrate, defaultConfig);
};

export const mergeConfigs = (
  config: Partial<MigrateConfig> | undefined,
  defaultConfig: MigrateConfig
): MigrateConfig => {
  if (config === undefined) {
    return defaultConfig;
  }

  if (!isRelativePath(config.pathToMigrations)) {
    throw new HardhatPluginError(pluginName, "config.migrate.pathToMigrations must be a relative path");
  }

  const { cloneDeep } = require("lodash");
  const customConfig = cloneDeep(config);

  return { ...defaultConfig, ...customConfig };
};

const isRelativePath = (path?: string): boolean => path === undefined || !isAbsolute(path);
