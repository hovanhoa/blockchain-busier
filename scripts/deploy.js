const { ethers } = require("hardhat");

async function main() {
    const ERC20Token = await ethers.getContractFactory("ERC20Token");
    const ERC20Contract = await ERC20Token.deploy();
    const ERC20Address = await ERC20Contract.getAddress();
    console.log("ERC20 Address     : ", ERC20Address);

    const Increment = await ethers.getContractFactory("Increment");
    const IncrementContract = await Increment.deploy();
    console.log("Increment Address : ", await IncrementContract.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
