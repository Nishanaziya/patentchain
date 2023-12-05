// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AccessControl {
    mapping(address => bool) public patentHolders;
    mapping(address => bool) public patentOfficers;

    modifier onlyPatentHolder() {
        require(patentHolders[msg.sender], "Not a patent holder");
        _;
    }

    modifier onlyPatentOfficer() {
        require(patentOfficers[msg.sender], "Not a patent officer");
        _;
    }
}
