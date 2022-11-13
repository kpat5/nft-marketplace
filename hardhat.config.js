require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  networks:{
    hardhat:{
      chainId:1337
    },
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/"
    },
    mainnet:{}
  }
  solidity: "0.8.17",
};
