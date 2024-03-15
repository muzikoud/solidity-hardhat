const hardhat = require("hardhat");
 
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
 
  const lockedAmount = hardhat.ethers.utils.parseEther("1");
 
  const Lock = await hardhat.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
 
  await lock.deployed();
 
  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
}
 
// 我们推荐这种模式，以便能够在任何地方使用 async/await
// 并妥善处理错误。
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
