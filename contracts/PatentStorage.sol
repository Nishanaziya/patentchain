// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract PatentStorage {
    struct Patent {
        string title;
        string description;
        string ipfsHash;
        // Add more fields as needed
    }

    mapping(bytes32 => Patent) public patents;

    function storePatent(
        bytes32 patentId,
        string memory title,
        string memory description,
        string memory ipfsHash
    ) internal {
        patents[patentId] = Patent(title, description, ipfsHash);
    }
}
