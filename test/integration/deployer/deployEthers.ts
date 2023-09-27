import { expect } from "chai";

import { useEnvironment } from "../../helpers";

import { Deployer } from "../../../src/deployer/Deployer";

import { Contract, ContractFactory } from "ethers";
import { TransactionStorage } from "../../../src/tools/storage/TransactionStorage";

describe("deployer", () => {
  describe("deploy()", () => {
    useEnvironment("minimal-ethers");

    let ContractWithConstructor: ContractFactory<any[], Contract>;
    let ContractWithPayableConstructor: ContractFactory<any[], Contract>;
    let deployer: Deployer;

    beforeEach("setup", async function () {
      deployer = new Deployer(this.hre);

      TransactionStorage.getInstance().init(this.hre);
      TransactionStorage.getInstance().clear();

      ContractWithConstructor = await this.hre.ethers.getContractFactory("ContractWithConstructorArguments");
      ContractWithPayableConstructor = await this.hre.ethers.getContractFactory("ContractWithPayableConstructor");
    });

    // it("should deploy contract with constructor arguments", async function () {
    //   const contract = await deployer.deploy(ContractWithConstructor, ["test"], {});

    //   const name = await contract.name();

    //   expect(name).to.equal("test");
    // });

    // it("should deploy contract with ethers", async function () {
    //   const value = BigInt(1);

    //   const contract = await deployer.deploy(ContractWithPayableConstructor, [], { value: value });

    //   expect(await this.hre.ethers.provider.getBalance(contract.getAddress())).to.equal(value);
    // });

    it("should revert if artifact is not a contract", async function () {
      await expect(deployer.deploy({} as any, [], {})).to.be.rejected;
    });
  });
});
