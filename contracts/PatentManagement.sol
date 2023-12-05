// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./AccessControl.sol";
import "./PatentStorage.sol";

contract PatentManagement is AccessControl, PatentStorage {
    event PatentStored(
        bytes32 patentId,
        string title,
        string description,
        string ipfsHash
    );

    function addPatentHolder(address account) external onlyPatentOfficer {
        patentHolders[account] = true;
    }

    function addPatentOfficer(address account) external onlyPatentOfficer {
        patentOfficers[account] = true;
    }

    function createPatent(
        string memory title,
        string memory description,
        string memory ipfsHash
    ) external onlyPatentHolder {
        bytes32 patentId = keccak256(
            abi.encodePacked(title, description, ipfsHash, msg.sender)
        );
        storePatent(patentId, title, description, ipfsHash);
        emit PatentStored(patentId, title, description, ipfsHash);
    }
}
