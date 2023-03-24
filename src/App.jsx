import { Routes, Route, Link } from "react-router-dom";
import Index from "./pages/home/index.jsx";
import HomePage2 from "./pages/homePage2/index.jsx";
import WlApplication from "./pages/wlApplication/index.jsx";
import JSEncrypt from "jsencrypt";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import ReactContext from "@/utils/Context.js";
import request from "@/utils/axios";
import { publicKey } from "@/public.js";

import { useEffect } from "react";
import { useState } from "react";
import cookie from "js-cookie";
import React from "react";
function App() {
  const style = {
    height: "100vh",
    width: "100%",
    display: "flex",
    backgroundColor: " #000000",
    overflow: "hidden",
  };

  const [user, setUser] = useState({});
  const [providerInfo, setProviderInfo] = useState({});

  useEffect(() => {
    console.log(providerInfo.selectedAddress, "providerInfoWeb3ReactProvider");
    if (providerInfo.selectedAddress) {
      storeToken(providerInfo.selectedAddress);
    }
    let time = setInterval(() => {
      if (providerInfo.selectedAddress && cookie?.get("token")) {
        getUserInfo();
        clearInterval(time);
      }
    }, 200);
  }, [providerInfo]);

  const getUserInfo = async () => {
    let res = await request.post("/user/info");
    if (res && res.data) {
      setUser(res.data);
    }
  };

  const storeToken = async (account) => {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);

    let data = {
      wallet: encrypt.encrypt(account),
    };

    let res = await request.postFormData("/user/wallet_login", data);
    if (res && res.data) {
      cookie.set("token", res.data, { expires: 1 });
    }
  };

  return (
    <Web3ReactProvider
      getLibrary={(provider) => {
        setProviderInfo(provider);
        new Web3(provider);
      }}
    >
      <ReactContext.Provider value={{ user, setUser }}>
        <div style={style}>
          <Routes>
            {/* <Route path="/home" element={<HomePage2 />}></Route> */}
            <Route path="/home" element={<Index />}></Route>
            <Route index element={<Index />} />
            <Route path="/wl-application" element={<WlApplication />}></Route>
          </Routes>
        </div>
      </ReactContext.Provider>
    </Web3ReactProvider>
  );
}

export default App;
