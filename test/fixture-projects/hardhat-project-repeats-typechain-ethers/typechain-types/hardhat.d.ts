/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithConstructorArguments__factory>;
    getContractFactory(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithExternalLibrary__factory>;
    getContractFactory(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithPayableConstructor__factory>;
    getContractFactory(
      name: "Library1",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library1__factory>;
    getContractFactory(
      name: "Library2",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library2__factory>;
    getContractFactory(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithConstructorArguments__factory>;
    getContractFactory(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithExternalLibrary__factory>;
    getContractFactory(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithPayableConstructor__factory>;
    getContractFactory(
      name: "Library1",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library1__factory>;
    getContractFactory(
      name: "Library2",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library2__factory>;
    getContractFactory(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithConstructorArguments__factory>;
    getContractFactory(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithExternalLibrary__factory>;
    getContractFactory(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithPayableConstructor__factory>;
    getContractFactory(
      name: "Library1",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library1__factory>;
    getContractFactory(
      name: "Library2",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library2__factory>;
    getContractFactory(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithConstructorArguments__factory>;
    getContractFactory(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithExternalLibrary__factory>;
    getContractFactory(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ContractWithPayableConstructor__factory>;
    getContractFactory(
      name: "Library1",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library1__factory>;
    getContractFactory(
      name: "Library2",
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Library2__factory>;

    getContractAt(
      name: "ContractWithConstructorArguments",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    getContractAt(
      name: "ContractWithExternalLibrary",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    getContractAt(
      name: "ContractWithPayableConstructor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    getContractAt(
      name: "Library1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library1>;
    getContractAt(
      name: "Library2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library2>;
    getContractAt(
      name: "ContractWithConstructorArguments",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    getContractAt(
      name: "ContractWithExternalLibrary",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    getContractAt(
      name: "ContractWithPayableConstructor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    getContractAt(
      name: "Library1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library1>;
    getContractAt(
      name: "Library2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library2>;
    getContractAt(
      name: "ContractWithConstructorArguments",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    getContractAt(
      name: "ContractWithExternalLibrary",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    getContractAt(
      name: "ContractWithPayableConstructor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    getContractAt(
      name: "Library1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library1>;
    getContractAt(
      name: "Library2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library2>;
    getContractAt(
      name: "ContractWithConstructorArguments",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    getContractAt(
      name: "ContractWithExternalLibrary",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    getContractAt(
      name: "ContractWithPayableConstructor",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    getContractAt(
      name: "Library1",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library1>;
    getContractAt(
      name: "Library2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<Contracts.Library2>;

    deployContract(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;

    deployContract(
      name: "ContractWithConstructorArguments",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;
    deployContract(
      name: "ContractWithConstructorArguments",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithConstructorArguments>;
    deployContract(
      name: "ContractWithExternalLibrary",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithExternalLibrary>;
    deployContract(
      name: "ContractWithPayableConstructor",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.ContractWithPayableConstructor>;
    deployContract(
      name: "Library1",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library1>;
    deployContract(
      name: "Library2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<Contracts.Library2>;

    // default types
    getContractFactory(name: string, signerOrOptions?: ethers.Signer | FactoryOptions): Promise<ethers.ContractFactory>;
    getContractFactory(abi: any[], bytecode: ethers.BytesLike, signer?: ethers.Signer): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
    deployContract(name: string, signerOrOptions?: ethers.Signer | DeployContractOptions): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions,
    ): Promise<ethers.Contract>;
  }
}