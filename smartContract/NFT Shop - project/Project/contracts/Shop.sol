// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20MintableBurnable is IERC20 {
    function mint(address, uint256) external;

    function burnFrom(address, uint256) external;
}

interface IERC721MintableBurnable is IERC721 {
    function safeMint(address, uint256) external;

    function burn(uint256) external;
}

//Ownable means only owner can deploy a certain function 
contract Shop is Ownable {
    uint256 public purchaseRatio;
    //mintPrice = How many of token do we need per NFT
    uint256 public mintPrice;
    uint256 public ownerPool;
    //uint256 public publicPool; dont need a public pool
    IERC20MintableBurnable public paymentToken;
    IERC721MintableBurnable public collection;

   //Setting our variables at deployment time
    constructor(
        uint256 _purchaseRatio,
        uint256 _mintPrice,
        address _paymentToken, //direct to usdc address
        address _collection
    ) {
        purchaseRatio = _purchaseRatio;
        mintPrice = _mintPrice;
        paymentToken = IERC20MintableBurnable(_paymentToken);
        collection = IERC721MintableBurnable(_collection);
    }

    //payable allows us to call this function with money values to be paid.
    //Need to assign minter role to contract. Done in Typescript
    function purchaseTokens() public payable {
        //reminder: the mint function was cast by IERC20MintableBurnable above
        paymentToken.mint(msg.sender, msg.value / purchaseRatio);
    }

    function purchaseNft(uint256 tokenId) public {
        paymentToken.transferFrom(msg.sender, address(this), mintPrice);
        //ownerShare is calculated here first
        //not directly in the next line of code because Solidty doesnt
        //know decimals without being defined as 
        uint256 ownerShare = mintPrice;
        ownerPool += ownerShare;
        //publicPool += mintPrice - ownerShare;
        collection.safeMint(msg.sender, tokenId);
    }


    // onlyOwner = can deploy
    function ownerWithdraw(uint256 amount) public onlyOwner {
        require(amount <= ownerPool);
        ownerPool -= amount;
        paymentToken.transfer(msg.sender, amount);
    }
}


//To do
//Change the NFT from being minted by a custom ERC20 token to standard ETH/USDC


    // function returnTokens(uint256 amount) public {
    //     paymentToken.burnFrom(msg.sender, amount);
    //     payable(msg.sender).transfer(amount * purchaseRatio);
    // }


    // function returnNft(uint256 tokenId) public {
    //     collection.burn(tokenId);
    //     uint256 returnValue = mintPrice / 2;
    //     paymentToken.transfer(msg.sender, returnValue);
    //     publicPool -= returnValue;
    // }