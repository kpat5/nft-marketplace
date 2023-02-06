require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
let projectId =
  "https://polygon-mumbai.g.alchemy.com/v2/GLh1eMWcEbaOr-CnyyHf3jRjEKsqeCee";
// const privateKey = fs.readFileSync(".secret").toString();
// projectId = projectId.toString();
const { API_URL, PRIVATE_KEY } = process.env;
console.log(typeof API_URL);
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: "0.8.17",
};
