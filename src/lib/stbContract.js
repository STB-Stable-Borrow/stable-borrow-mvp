import STB from "../backend/build/contracts/STB.json";
import { useBorrow } from "../contexts/borrowContext/borrowContext";
import { Big } from "big.js";

//initializes and return stb contract properties
const stbContractInit = (web3) => {
  const networkKey = Object.keys(STB.networks)[0];
  return new web3.eth.Contract(STB.abi, STB.networks[networkKey].address);
};

//gets collaritization ratio from STB contract
const getColRatio = async (stb) => {
  const colRt = await stb.methods
    .minimumColRatio()
    .call()
    .then((res) => {
      const colRatio = new Big(res || 0);
      const formattedColRatio = colRatio.div("10e17").toFixed(4);
      return formattedColRatio;
    })
    .catch((err) => {
      if (err.message.includes("Response has no error or result for request")) {
        window.alert(
          "You are offline due to internet connection. check your connection and try again"
        );
      } else {
        console.log("Error while getting collatarilization ratio :", err);
        window.alert(
          "Error while getting collatarilization ratio. Try again later"
        );
      }
    });
  return colRt;
};

//gets regulator fee from STB contract
const getRegFee = async (stb, amount) => {
  const regFee = await stb.methods
    .getRegulatorFee(amount)
    .call()
    .then((res) => {
      const regFee = new Big(res || 0);
      const formattedRegFee = regFee.div("10e17").toFixed(4);
      return formattedRegFee;
    })
    .catch((err) => {
      if (err.message.includes("Response has no error or result for request")) {
        window.alert(
          "You are offline due to internet connection. check your connection and try again"
        );
      } else {
        console.log("Error while getting reg fee :", err);
        window.alert("Error while getting reg fee. Try again later");
      }
    });
  return regFee;
};

//calls createVault function on STB contract
const createVault = async (stb, userAccount, amount) => {
  const res = await stb.methods
    .createVault(amount)
    .send({ from: userAccount, value: amount })
    .then((res) => {
      if (res) {
        return true;
      } else {
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
          console.log("Error while creating vault :", err);
          window.alert("Error while creating vault. Try again later");
        }
        return false;
      }
    });
  return res;
};

export { stbContractInit, getRegFee, getColRatio, createVault };
