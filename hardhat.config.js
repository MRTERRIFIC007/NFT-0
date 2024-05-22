
require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/contracts");
require('dotenv').config();

const config = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    // for mainnet
    'base-mainnet': {
      url: "https://mainnet.base.org",
      accounts: [process.env.WALLET_KEY || ''],
      gasPrice: 1000000000,
    },
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY || ''],
      gasPrice: 1000000000,
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY || ''],
      gasPrice: 1000000000,
    },
  },
  defaultNetwork: "hardhat",
  paths: {
    sources: "./contracts",
  },
};

module.exports = config;