require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ],
    overrides: {
      "contracts/Lock.sol": {
        version: "0.8.19",
        settings: {}
      }
    }
  }
}