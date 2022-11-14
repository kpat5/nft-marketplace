require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
/** @type import('hardhat/config').HardhatUserConfig */
const projectId = "GLh1eMWcEbaOr-CnyyHf3jRjEKsqeCee";
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {},
  },
  solidity: "0.8.17",
};
