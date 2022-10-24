import { ethers } from "hardhat";

async function main() {
  const challengeAddress = "0xcD7AB80Da7C893f86fA8deDDf862b74D94f4478E";
  const Attack = await ethers.getContractFactory("Attack");
  const attack = await Attack.deploy(challengeAddress);
  await attack.deployed();
  console.log("attack = ", attack.address);

  const challenge = await ethers.getContractAt("Challenge", challengeAddress);

  await (await attack.attack()).wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
