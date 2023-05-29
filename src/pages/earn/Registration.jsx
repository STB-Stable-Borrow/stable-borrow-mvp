import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/borrow/logo.svg";
import back from "../../assets/borrow/back.svg";
import next from "../../assets/borrow/next.svg";
import addAvatar from "../../assets/earn/addAvatar.svg";
import CreateAvatar from "./CreateAvatar";
import editAvatar from "../../assets/earn/editAvatar.svg";
import { Web3ModalContext } from "../../contexts/web3ModalContext";
import {
  isRegistered,
  totalTokenCount,
  createAccount,
} from "../../lib/sbtContract";
import { saveTokenDetails } from "../../lib/filebaseIpfs";
import {
  GatewayStatus,
  IdentityButton,
  useGateway,
} from "@civic/ethereum-gateway-react";
import { CivicPassProvider } from "../../contexts/civicpassContext";

function Registration() {
  const { web3, sbt, account, signer, address, connected, chainId } =
    useContext(Web3ModalContext);
  const { gatewayStatus } = useGateway();
  const [createAvatar, setCreateAvatar] = useState(false);
  const [showRegistration, setShowRegistration] = useState(true);
  const [loading, setLoading] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);

  const [username, setUsername] = useState(null);
  const [about, setAbout] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const registerBtn = document.getElementById("register-btn");
  const captchaBtn = document.getElementsByClassName("sc-gTRrQi czsvEU");

  // verify connection status and chainId
  const verifyConnection = () => {
    const acceptIds = [50, 51];
    if (!connected && !chainId) {
      window.alert("You have to connect your wallet to proceed");
      navigate("/");
    }
    if (connected && !acceptIds.includes(chainId)) {
      window.alert(
        "You connected to wrong chain, disconnect and connect to Apothem or Xinfin."
      );
      navigate("/");
    }
  };

  const handleCreateAvatar = () => {
    setCreateAvatar(true);
    setShowRegistration(false);
  };

  const handleCreateAvatarBackButtonClick = () => {
    setCreateAvatar(false);
    setShowRegistration(true);
  };

  //handles register button colour behaviour
  const handleRegisterButtonColour = () => {
    if (registerBtn && captchaBtn) {
      if (
        captchaBtn[0].children[1].textContent == "Active" &&
        avatarImage &&
        username &&
        about
      ) {
        registerBtn.style.backgroundColor = "#009FBD";
      } else {
        registerBtn.style.backgroundColor = "#585858";
      }
    }
  };

  handleRegisterButtonColour();

  //handles profile creation
  const handleMintProfile = async () => {
    if (
      registerBtn &&
      registerBtn.style.backgroundColor === "rgb(0, 159, 189)"
    ) {
      registerBtn.style.backgroundColor = "rgb(88, 88, 88)";
      await isRegistered(sbt, account).then(async (res) => {
        if (!res) {
          await totalTokenCount(sbt).then(async (res1) => {
            const tokenId = res1 + 1;
            saveTokenDetails(tokenId, username, about, avatarImage, account).on(
              "httpHeaders",
              async (statusCode, headers) => {
                const tokenUrl = `https://ipfs.filebase.io/ipfs/${headers["x-amz-meta-cid"]}`;
                await createAccount(sbt, tokenUrl, account).then((res2) => {
                  if (res2) {
                    navigate("/dashboard");
                  } else {
                    registerBtn.style.backgroundColor = "rgb(0, 159, 189)";
                  }
                });
              }
            );
          });
        } else {
          window.alert(
            "You are a registered user, you will be redirected to your dashbaord."
          );
          navigate("/dashboard");
        }
      });
    }
  };

  //gets 2d image of 3d avatar
  const getAvatarImage = (avatarUrl) => {
    const params = {
      model: `${avatarUrl}`,
      scene: "fullbody-portrait-v1-transparent",
      armature: "ArmatureTargetMale",
      blendShapes: {},
    };
    const http = new XMLHttpRequest();
    http.open("POST", "https://render.readyplayer.me/render");
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(params));
    http.onload = function () {
      const avataerImg = JSON.parse(http.responseText).renders[0];
      if (avataerImg !== "") {
        console.log("png: ", avataerImg);
        setAvatarImage(avataerImg);
        setAvatar(null);
      } else {
        window.alert("Error while getting created avatar. Try again later");
      }
    };
  };

  //get image when avatar is ready
  useEffect(() => {
    if (avatar) {
      (async () => {
        getAvatarImage(avatar);
      })();
    }
  }, [avatar]);

  //handle loading behaviour
  useEffect(() => {
    if (avatarImage) {
      (async () => {
        setLoading(false);
      })();
    }
  }, [avatar]);

  return (
    <CivicPassProvider _wallet={signer}>
      <div className="w-screen h-screen bg-[#292C31] ">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            className=" pt-[6vh] pl-[6.2vw] mb-[2.87vh] h-[9.57vh] "
          />
        </Link>
        {showRegistration && (
          <div className="bg-[#202225]  text-white rounded-[15px] h-[80vh] mx-[253px] px-[1.51vh] py-[1.39vh] ">
            <div className="text-center mb-[2.3vh]">
              <h1 className="mb-[10px] text-[#009FBD] font-black text-xl ">
                Registration
              </h1>
              <p className="px-[70px] text-xs"></p>
            </div>
            <div className="bg-[#292C31] w-full gap-[3vh]  rounded-[15px] flex flex-col justify-between  p-[10px] mb-[2vh] ">
              <div className="bg-[#202225] py-[1vh] px-[3vw] rounded-[15px] flex flex-col items-center justify-center ">
                <h1 className="text-[#009FBD] font-semibold text-sm mb-[2.4vh]  ">
                  Step 1 - Verify you are human
                </h1>
                <IdentityButton />
              </div>
              <div className="gap-[25px] flex items-center justify-between h-[35.03vh]  ">
                <div className="w-[30.81vw] h-full flex flex-col items-center rounded-[15px] bg-[#202225] pt-[1.6vh] ">
                  <h1 className="text-center text-[0.875rem] font-semibold text-[#009FBD] mb-[2.4vh] ">
                    Step 2 - Create your avatar
                  </h1>
                  <div className="w-[10.81vw] h-[10.81vw] rounded-full border border-dashed border-[#585858] flex justify-center items-center flex-col relative  ">
                    {loading && (
                      <div>
                        <h1 className="text-xs">Loading...</h1>
                      </div>
                    )}
                    <img
                      src={avatarImage || addAvatar}
                      alt=""
                      className={
                        avatarImage
                          ? "w-full h-full object-cover rounded-full"
                          : "w-[2.6vw] h-[2.6vw]"
                      }
                    />
                    {avatarImage ? (
                      ""
                    ) : (
                      <p
                        onClick={handleCreateAvatar}
                        className="text-xs text-center text-[#B0B0B0] hover:cursor-pointer hover:underline "
                      >
                        Click to choose <br /> an Avatar
                      </p>
                    )}
                  </div>
                  {avatarImage && (
                    <button className="flex justify-center items-center text-xs mt-2 gap-1 relative">
                      <img src={editAvatar} alt="" className="w-[20px]" />
                      <p
                        onClick={handleCreateAvatar}
                        className="text-[#B0B0B0] hover:underline "
                      >
                        Edit Avatar
                      </p>
                    </button>
                  )}
                </div>
                <div className="w-full h-full rounded-[15px] bg-[#202225] pt-[1.6vh] pb-[2vh] px-[30px] ">
                  <h1 className=" text-sm font-semibold text-[#009FBD] mb-[1.4vh] ">
                    Step 3 - Fill the following Information
                  </h1>
                  <form action="" className="text-[#292C31] text-sm ">
                    <input
                      type="text"
                      className=" w-full h-[5.4vh] rounded-lg bg-[#B0B0B0] pl-[21px] placeholder:text-[#292C31] mb-[10px]"
                      placeholder="Enter Your Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="About"
                      className=" w-full h-[15.7vh] pt-[15px]  rounded-lg bg-[#B0B0B0] pl-[21px] placeholder:text-[#292C31] mb-[10px]"
                      value={about}
                      onChange={(e) => setAbout(e.target.value)}
                    ></textarea>
                  </form>
                </div>
              </div>

              <div className="flex items-center justify-center gap-[110px] mt-[1.19vh] mb-[1.5vh] ">
                <button
                  onClick={() => {
                    navigate("/info");
                  }}
                  className="border border-[#009FBD] w-[164px] h-[6.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 "
                >
                  <img src={back} alt="" />
                  Back
                </button>
                <button
                  id="register-btn"
                  onLoad={verifyConnection}
                  className="bg-[#585858] w-[164px] h-[6.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 "
                  onClick={handleMintProfile}
                >
                  Register
                  <img src={next} alt="" />
                </button>
              </div>
            </div>
          </div>
        )}
        {
          //   Create Avatar
          createAvatar && (
            <CreateAvatar
              onBackButtonClick={handleCreateAvatarBackButtonClick}
              _setAvatartImage={setAvatarImage}
              _setLoading={setLoading}
              _setAvatar={setAvatar}
              _avatar={avatar}
              _adr={address}
            />
          )
        }
      </div>
    </CivicPassProvider>
  );
}

export default Registration;
