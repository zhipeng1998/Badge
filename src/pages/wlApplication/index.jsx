import FillIn from "./component/fillIn";
import SideBarApp from "./component/sideBar";
import "./index.less";
import $ from "jquery";
import { publicKey } from "@/public.js";

import { useEffect, useState } from "react";

import StaggeredGlow from "./component/staggeredGlow";
import FillCards from "./component/fillCards";
import { message } from "antd";

import { useWeb3React } from "@web3-react/core";
import { injected } from "@/component/web3/index.js";
import request from "@/utils/axios";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import JSEncrypt from "jsencrypt";
import Login from "./component/login";

const welcome =
  "Hi mate! Welcome to KlassTown! Please connect your Ethereum Wallet, Twitter account, Discord account,and complete our Retweet task to unlock this exclusive Whitelist Appliction!";

const thanks =
  "Thanks, Klassmate. Your attendance has been noted. Stay tuned in our Twitter and Discord.";

const Index = () => {
  let navigate = useNavigate();
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const [taskCompleted, setTaskCompleted] = useState(false);
  const [cardCompleted, setCardCompleted] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [filled, setFilled] = useState([]);

  useEffect(() => {
    if (!!cookie.get("token")) {
      connectWalletOnPageLoad();
    }
  }, []);

  useEffect(() => {
    if (account) {
      console.log(connector);
      storeToken();
    }
  }, [account]);
  useEffect(() => {
    active
      ? clickForFillIn("Connect wallet")
      : clickForFillOut("Connect wallet");

    // if (account) {
    //   console.log("storeToken");
    //   storeToken();
    // }
  }, [active]);

  const connectWalletOnPageLoad = async () => {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  };

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      cookie.remove("token");
    } catch (ex) {
      console.log(ex);
    }
  }
  async function login() {
    try {
      console.log("login");
    } catch (err) {
      console.log(err);
    }
  }

  const storeToken = async () => {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);

    let res = await request.postFormData("/user/login", {
      wallet: encrypt.encrypt(account),
    });
    if (res) {
      cookie.set("token", res.data, { expires: 1 });
    }
  };

  const clickForFillIn = (text) => {
    let arr = JSON.parse(JSON.stringify(filled));
    arr.push(text);
    setFilled(arr);
  };
  const clickForFillOut = (text) => {
    let arr = JSON.parse(JSON.stringify(filled));
    let index = arr.indexOf(text);
    arr.splice(index, 1);
    setFilled(arr);
  };
  return (
    <div className="wlApplication">
      {contextHolder}
      {/* {active ? (
        <span style={{ color: "#fff" }}>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span style={{ color: "#fff" }}>Not connected</span>
      )} */}
      <div className="top">
        <div className="left">
          <div
            className="wallet"
            // onClick={() => {
            //   connentMetaMask();
            // }}
            onClick={connect}
          >
            <FillIn
              text={"Connect wallet"}
              isOk={filled.includes("Connect wallet")}
            />
          </div>
          <div className="discard" onClick={disconnect}>
            <FillIn text="Connect Discord" />
          </div>
          <div className="twitter" onClick={login}>
            <FillIn text="Connect Twitter" />
          </div>
          <div className="task" onClick={() => setTaskCompleted(true)}>
            <FillIn text="Retweet task" />
          </div>
          <Login />
        </div>
        <div className="center">
          {taskCompleted ? (
            <FillCards
              FillInComplete={() => {
                setCardCompleted(true);
                setTaskCompleted(false);
                setTimeout(() => {
                  $(".wlApplication").attr("class", "wlApplication scale");
                }, 6000);
                setTimeout(() => {
                  navigate("/home");
                  // setTaskCompleted(true);
                }, 10000);
              }}
            />
          ) : cardCompleted ? (
            <StaggeredGlow key="thanks" str={thanks} color="#b7ff50" />
          ) : (
            <StaggeredGlow key="welcome" str={welcome} />
          )}
        </div>
        <div className="right"></div>
      </div>
      <div className="bottom">
        <SideBarApp />
      </div>
    </div>
  );
};
export default Index;
