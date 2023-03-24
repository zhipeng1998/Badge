import React, { useContext, useState, useEffect } from "react";
import "./index.less";
import m7 from "@/assets/img/7.png";
import m6 from "@/assets/img/6.png";
import m5 from "@/assets/img/5.png";
import m4 from "@/assets/img/4.png";
import m3 from "@/assets/img/3.png";
import m2 from "@/assets/img/2.png";
import kudusHome from "@/assets/img/kudusHome.png";
import LoginModal from "./components/loginModal.tsx";
import { useWeb3React } from "@web3-react/core";
import { shortenAddress } from "@/utils/shortenAddress";
import RcBullet from "./components/rcBullets";
import ReactContext from "@/utils/Context.js";
import { HomeOutlined } from "@ant-design/icons";
import { ScaleBox } from "../../component/scaleBox";
import $ from "jquery";

const HomePage2 = () => {
  const [activeDiv, setActiveDiv] = useState(undefined);
  const [userState, setUserState] = useState(false);
  const [open, setOpen] = useState(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const { user, setUser } = useContext(ReactContext);
  const connect = () => {
    setOpen(true);
  };
  console.log(account, "account");

  useEffect(() => {
    onmouse(7);
    onmouse(3);
  }, []);

  const onmouse = (e) => {
    $(".m" + e)[0].onmouseenter = function () {
      setActiveDiv(e);
    };
    $(".m" + e)[0].onmouseleave = function () {
      setActiveDiv(undefined);
    };
  };
  const activeSomeOne = (e) => {
    if (activeDiv === e) {
      return {
        opacity: 1,
        transform: "scale(1.01)",
      };
    } else if (activeDiv === undefined) {
      return {
        opacity: 1,
      };
    } else {
      return { opacity: 0.5 };
    }
  };

  return (
    <ScaleBox>
      <div className="homePage2">
        <div className="screen">
          <div className="userInfo">
            {!account && !user.nickname ? (
              <div className="top">
                <LoginModal open={open} onClose={() => setOpen(false)} />
              </div>
            ) : user.nickname ? (
              <div className="top">
                <div className="allinfo">
                  <div className="info">
                    <div className="in">
                      <img
                        src={user.head_img}
                        alt="刷新"
                        style={{ width: 50, height: 50, borderRadius: 20 }}
                      />
                      <span>{user.nickname}</span>
                    </div>

                    <img
                      src={kudusHome}
                      alt="刷新"
                      style={{ width: 25, height: 25 }}
                      onClick={() => {
                        window.open("https://www.kudostous.com/home/profile");
                      }}
                    />

                    {/* <HomeOutlined
                    style={{ fontSize: 25, color: "#fff" }}
                  
                  /> */}
                  </div>
                  <div className="slogon">{user.motto}</div>
                </div>

                <div className="ach">
                  <div className="arhtitle">Achievements</div>
                  <div className="num">0 Points</div>
                  <div className="num">0 Badges</div>
                </div>
              </div>
            ) : (
              <div className="top">
                {account ? (
                  <div className="connectIn" onClick={connect}>
                    Connected as {shortenAddress(account)}
                  </div>
                ) : (
                  <div className="connectIn" onClick={connect}>
                    Connected
                  </div>
                )}

                <div className="descript">
                  <p>welcome to klass town!</p>
                  <p>You are not a co-creator yet. If you want to create</p>
                  <p>content onto klass.town,plesase sign up a </p>
                  <p>Kudostous.com account.</p>
                </div>
                <div
                  className="signUp"
                  onClick={() => {
                    window.open("https://www.kudostous.com/");
                  }}
                >
                  Sign up
                </div>
              </div>
            )}
            <div className="power">
              <i>Powered by Kudos To Us</i>
            </div>
          </div>
          {activeDiv && <div className="mask"></div>}

          <div className="bg">
            <div
              className="module"
              style={
                activeDiv === undefined
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0.5 }
              }
            >
              <img src={m2} alt="刷新重新加载" />
            </div>

            <div className="module" style={activeSomeOne(3)}>
              <img src={m3} alt="刷新重新加载" />
            </div>

            <div
              className="module"
              style={
                activeDiv === 4 || activeDiv === undefined
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0.5 }
              }
            >
              <img src={m4} alt="刷新重新加载" />
            </div>

            <div
              className="module"
              style={
                activeDiv === 5 || activeDiv === undefined
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0.5 }
              }
            >
              <img src={m5} alt="刷新重新加载" />
            </div>
            <div
              className="module"
              style={
                activeDiv === 6 || activeDiv === undefined
                  ? {
                      opacity: 1,
                    }
                  : { opacity: 0.5 }
              }
            >
              <img src={m6} alt="刷新重新加载" />
            </div>
            <div className="module" style={activeSomeOne(7)}>
              <img src={m7} alt="刷新重新加载" />
            </div>
            <div className="m3"></div>
            <div className="m4"></div>
            <div className="m5"></div>
            <div className="m6"></div>
            <div className="m7"></div>
          </div>
        </div>
        <RcBullet login={!!user.nickname} />
      </div>
    </ScaleBox>
  );
};
export default HomePage2;
