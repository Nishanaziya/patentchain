// 2_deploy_contracts.js
const AccessControl = artifacts.require("AccessControl");
const PatentStorage = artifacts.require("PatentStorage");
const PatentManagement = artifacts.require("PatentManagement");

module.exports = async function (deployer) {
  await deployer.deploy(AccessControl);
  await deployer.deploy(PatentStorage);
  await deployer.deploy(PatentManagement);

  // Get deployed contract instances
  const accessControl = await AccessControl.deployed();
  const patentStorage = await PatentStorage.deployed();
  const patentManagement = await PatentManagement.deployed();

  // Set contract addresses in PatentManagement contract
  await patentManagement.setAccessControl(accessControl.address);
  await patentManagement.setPatentStorage(patentStorage.address);
};
