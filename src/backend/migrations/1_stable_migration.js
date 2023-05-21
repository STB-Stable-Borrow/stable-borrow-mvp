const STC = artifacts.require("STC");
const STB = artifacts.require("STB");

const STCNAME = "STABLECOIN";
const STCSYMBOL = "STC";
const INITIALCOLRATIO = 60000000000000000000n;
const REGPERCENTAGE = 50000000000000000n;
const INTEREST = 500000000000000000n;
const INTERESTDURATION = 31556926;
const MAXVAULT = 10;

module.exports = async function (deployer) {
  await deployer.deploy(STC, STCNAME, STCSYMBOL).then(async (res1) => {
    await deployer.deploy(
      STB,
      res1.address,
      INITIALCOLRATIO,
      REGPERCENTAGE,
      INTEREST,
      INTERESTDURATION,
      MAXVAULT
    );
  });
};
