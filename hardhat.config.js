require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  solidity: {
    compilers: [
      {
        version: "0.7.0",
      },
    ],
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      blockGasLimit: 9999999999999,
      allowUnlimitedContractSize: true,
      accounts: [`${TESTNET_PRIVATE_KEY}`],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [`${PRIVATE_KEY}`],
    },
    hardhat: {
      // forking: {
      //   url: `https://bsc-dataseed.binance.org/`,
      //   // blockNumber: 6674768,
      // },
      blockGasLimit: 12000000,
      allowUnlimitedContractSize: true
    },
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  }
};
