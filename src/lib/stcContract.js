import STC from "../backend/build/contracts/STC.json";

//initializes and return stc contract properties
const stcContractInit = (web3) => {
  const networkKey = Object.keys(STC.networks)[0];
  return new web3.eth.Contract(STC.abi, STC.networks[networkKey].address);
};

const maxU256 =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;
//calls approve function on STC contract
const approveAccount = async (stc, userAccount) => {
  const stcAddress = stc._address;
  const approveRes = await stc.methods
    .approve(stcAddress, maxU256)
    .send({ from: userAccount })
    .then((res) => {
      if (res) {
        return true;
      } else {
        window.alert("Unexpected Error occured. Try again later");
        return false;
      }
    })
    .catch((err) => {
      if (
        err.message.includes(
          `Given address "xdc0000000000000000000000000000000000000000" is not a valid Ethereum address`
        ) ||
        err.message.includes(`Failed to check for transaction receipt`)
      ) {
        return true;
      } else {
        if (
          err.message.includes("Response has no error or result for request")
        ) {
          window.alert(
            "You are offline due to internet connection. check your connection and try again"
          );
        } else {
          console.log("Error while approving STB :", err);
          window.alert("Error while approving STB. Try again later");
        }
        return false;
      }
    });
  return approveRes;
};

export { stcContractInit, approveAccount };
