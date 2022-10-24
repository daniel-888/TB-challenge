import { ethers } from "hardhat";

async function main() {
  const challengeAddress = "0xeADFC0Ad8F33f0cd9b8b3bFF60D9C2785a307E8E";
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
