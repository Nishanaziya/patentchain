
// scripts/deploy.js
const { ethers } = require('hardhat');

async function main() {
  const PatentManagement = await ethers.getContractFactory('PatentManagement');
  console.log('PatentManagement contract factory created');
  
  const patentManagement = await PatentManagement.deploy();
  console.log('PatentManagement contract deployed');

  // Use this line to wait for the contract deployment to be mined
  const deploymentReceipt = await patentManagement.deployed();

  console.log('PatentManagement contract deployed to:', deploymentReceipt.address);
}

main();
