const { ethers } = require("hardhat");
require('dotenv').config()

async function main() {
    const [owner] = await ethers.getSigners();

    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const ERC20Contract = await ERC20Token.deploy();
    const ERC20Address = await ERC20Contract.getAddress();
    console.log("ERC20 Address                   : ", ERC20Address);
    await new Promise(r => setTimeout(r, 20000));
    
    while (true) {
      const Increment = await ethers.getContractFactory("Increment");
      const IncrementContract = await Increment.deploy();
      console.log("Deploy Increment Address        : ", await IncrementContract.getAddress());
      await new Promise(r => setTimeout(r, 20000));

      var count = 0
      while (count < 10) {
        await IncrementContract.increment();
        console.log("Contract call!");
        count++;
        await new Promise(r => setTimeout(r, 20000));

        await ERC20Contract.transfer(process.env.OTHER_ADDRESS, 10**9)
        console.log("Token Transfer!");
        await new Promise(r => setTimeout(r, 20000));

        await owner.sendTransaction({
          to: process.env.OTHER_ADDRESS,
          value: 10**9,
        });
        console.log("Transaction!");
        await new Promise(r => setTimeout(r, 20000));
      }
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
