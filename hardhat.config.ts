import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    // hardhat: {
    //   forking: {
    //     url: process.env.ETHEREUM_NODE || "",
    //     blockNumber: 14840940,
    //   },
    //   chainId: chainIds.hardhat,
    // },
    goerli: {
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 2000000,
  },
  gasReporter: {
    currency: "EUR",
    gasPrice: 21,
  },
};

export default config;
