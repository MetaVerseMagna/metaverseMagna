//SPDX-License-Identifier: Unlicense
pragma solidity 0.7.0;

import "hardhat/console.sol";
import "./libraries/SafeMath.sol";
import "./libraries/ReentrancyGuard.sol";
import "./libraries/Ownable.sol";
import "./libraries/ERC721.sol";
import "./libraries/ECDSA.sol";

contract MetaverseMagna is ERC721('Metaverse Magna Badge', 'MVM BADGE'), Ownable {
    using ECDSA for bytes32;
    using SafeMath for uint256;

    mapping(address => uint256) public addressToBadge;

    function updateURI(string memory newURI) public onlyOwner {
        _setBaseURI(newURI);
    }

    function mint() external {
        uint256 supply = totalSupply() + 1;
        require(
            addressToBadge[msg.sender] == 0,
            'Receiver already has a badge'
        );
        addressToBadge[msg.sender] = supply;
        _mint(msg.sender, supply);
    }

    function mintFor(address _owner) external onlyOwner {
        uint256 supply = totalSupply() + 1;
        require(addressToBadge[_owner] == 0, 'Receiver already has a badge');
        addressToBadge[_owner] = supply;
        _mint(_owner, supply);
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        revert();
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override {
        revert();
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public override {
        revert();
    }
}

