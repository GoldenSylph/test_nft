const hre = require("hardhat");

async function main() {
  const testNFTFactory = await hre.ethers.getContractFactory("TestNFT");
  const testNFTInstance = await testNFTFactory.deploy();
  await testNFTInstance.deployed();
  console.log("Test NFT deployed to:", testNFTInstance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
