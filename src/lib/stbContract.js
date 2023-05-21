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
      // setColRatio(colRatio);
      const formattedColRatio = colRatio.div("10e17").toFixed(4);
      // setColRt(formattedColRatio);
      console.log("res: ", formattedColRatio);
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

//gets regulator frr from STB contract
//gets collaritization ratio from STB contract
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

export { stbContractInit, getRegFee, getColRatio };
