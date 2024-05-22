// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint256 private currentTokenId;

    constructor() ERC721("NFT Name", "NET") {
        currentTokenId = 0;
    }

    function mint(address recipient) public returns (uint256) {
        uint256 tokenId = currentTokenId;
        _safeMint(recipient, tokenId);
        currentTokenId++;
        return tokenId;
    }
}
