// interact.js
const { ethers } = require("hardhat");

async function main() {
  const AccessControl = await ethers.getContractFactory("AccessControl");
  const PatentStorage = await ethers.getContractFactory("PatentStorage");
  const PatentManagement = await ethers.getContractFactory("PatentManagement");

  // Deploy contracts
  const accessControl = await AccessControl.deploy();
  const patentStorage = await PatentStorage.deploy();
  const patentManagement = await PatentManagement.deploy();

  // Get deployed contract instances
  const accessControlAddress = accessControl.address;
  const patentStorageAddress = patentStorage.address;
  const patentManagementAddress = patentManagement.address;

  console.log("AccessControl deployed to:", accessControlAddress);
  console.log("PatentStorage deployed to:", patentStorageAddress);
  console.log("PatentManagement deployed to:", patentManagementAddress);

  // ... (perform more interactions as needed)
}

main();
