import "./index.less";
import wallet from "@/assets/img/wallet.png";
import walletOk from "@/assets/img/walletOk.png";
import discord from "@/assets/img/discord.png";
import discordOk from "@/assets/img/discordOk.png";
import twitter from "@/assets/img/twitter.png";
import twitterOk from "@/assets/img/twitterOk.png";
import task from "@/assets/img/task.png";
import taskOk from "@/assets/img/taskOk.png";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress } from "@/utils/shortenAddress";

import { useEffect, useState } from "react";
const FillIn = ({ text, isOk }) => {
  useEffect(() => {
    syncImg(text);
  }, [text]);

  const { account } = useWeb3React();
  const syncText = (e) => {
    switch (e) {
      case "Connect wallet":
        return (
          <span>
            Connect as <p style={{ margin: 0 }}>{shortenAddress(account)}</p>
          </span>
        );
      case "Connect Discord":
        return "Connect as";
      case "Connect Twitter":
        return "Connect as";
      case "Retweet task":
        return task;
      default:
        break;
    }
  };
  const syncImg = (e) => {
    switch (e) {
      case "Connect wallet":
        return wallet;
      case "Connect Discord":
        return discord;
      case "Connect Twitter":
        return twitter;
      case "Retweet task":
        return task;
      default:
        break;
    }
  };

  const syncImgOk = (e) => {
    switch (e) {
      case "Connect wallet":
        return walletOk;
      case "Connect Discord":
        return discordOk;
      case "Connect Twitter":
        return twitterOk;
      case "Retweet task":
        return taskOk;

      default:
        break;
    }
  };

  return (
    <div className="fillIn">
      <img src={isOk ? syncImgOk(text) : syncImg(text)} alt="" />
      <div className="text" style={isOk ? { color: "#b7ff50" } : {}}>
        {isOk ? syncText(text) : text}
      </div>
    </div>
  );
};

export default FillIn;
