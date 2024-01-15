// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Increment
 * @dev Increment & retrieve value in a variable
 */
contract Increment {

    uint256 number;

    /**
     * @dev Increase value of 'number'
     */
    function increment() public {
        number++;
    }

    /**
     * @dev Return value
     * @return value of 'number'
     */
    function retrieve() public view returns (uint256){
        return number;
    }
}