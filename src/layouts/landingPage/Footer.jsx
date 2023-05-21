import React, { useState } from "react";
import twitter from "../../assets/landing/twitter.svg";
import telegram from "../../assets/landing/telegram.svg";
import discord from "../../assets/landing/discord.svg";
import chat from "../../assets/landing/chat.svg";
import phone from "../../assets/landing/phone.svg";

function Footer() {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    document.getElementById("+1 (202) 555 0156");
    setCopied(true);
  }
  return (
    <div className="flex justify-between items-center text-xs">
      <div className="flex gap-[21px]">
        <div className="flex gap-[13px]">
          <img src={twitter} alt="twitter" />
          <img src={telegram} alt="telegram" />
          <img src={discord} alt="discord" />
        </div>
        <p className="text-[#FFFFFF]">
          Copyright © Stable Borrow 2023 | All Rights Reserved
        </p>
      </div>
      <div className="flex text-[#FFFFFF] items-center gap-[30px]">
        <div className="flex gap-[9px] items-center">
          <img src={phone} alt="phone" />
          <p className="cursor-pointer" onClick={copyToClipboard}>
            +1 (202) 555 0156
          </p>
        </div>
        <div className="flex gap-[9px] items-center">
          <img src={chat} alt="chat" />
          <p>info@stableborrow.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
