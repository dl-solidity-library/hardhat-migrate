/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ContractWithConstructorArgumentsContract } from "./ContractWithConstructorArguments";
import { ContractWithPayableConstructorContract } from "./ContractWithPayableConstructor";
import { LibraryContract } from "./Library";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "ContractWithConstructorArguments"): ContractWithConstructorArgumentsContract;
      require(name: "ContractWithPayableConstructor"): ContractWithPayableConstructorContract;
      require(name: "Library"): LibraryContract;
    }
  }
}

export {
  ContractWithConstructorArgumentsContract,
  ContractWithConstructorArgumentsInstance,
} from "./ContractWithConstructorArguments";
export {
  ContractWithPayableConstructorContract,
  ContractWithPayableConstructorInstance,
} from "./ContractWithPayableConstructor";
export { LibraryContract, LibraryInstance } from "./Library";