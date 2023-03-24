import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import LoginForm from "./loginForm/index.tsx";
import connectWallet from "@/assets/img/connectWallet.png";
import signIn from "@/assets/img/signIn.png";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@/component/web3/index.js";
import request from "@/utils/axios";

import cookie from "js-cookie";
import { shortenAddress } from "@/utils/shortenAddress";
const LoginModal: React.FC = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  useEffect(() => {
    if (!!cookie.get("token")) {
      connectWalletOnPageLoad();
    }
  }, []);


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



  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          height: 356,
          alignItems: "center",
        }}
      >
        <p style={{ cursor: "pointer" }}>
          <img src={connectWallet} onClick={connect} alt="" />
        </p>

        <p style={{ cursor: "pointer" }}>
          <img
            src={signIn}
            onClick={() => {
              setLoginFormOpen(true);
            }}
            alt=""
          />
        </p>
      </div>

      {loginFormOpen == true && (
        <Modal
          title=""
          className={"commonModal"}
          footer={null}
          width={500}
          open={loginFormOpen}
          onCancel={() => {
            setLoginFormOpen(false);
          }}
        >
          <div className={`ModalPanel`}>
            <div className={`ModalPanelTitle`}>Welcome!</div>
            <div className={`ModalPanelBody`}>
              <LoginForm
                closeWin={() => {
                  setLoginFormOpen(false);
                }}
              ></LoginForm>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LoginModal;
