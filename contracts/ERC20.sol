// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract ERC20Token is ERC20, ERC20Burnable {
    constructor() ERC20("Ether", "ETH") {
        _mint(msg.sender, 10**9 * 10**18 );
    }
}
