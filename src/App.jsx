import { Routes, Route, Link } from "react-router-dom";
import Index from "./pages/home/index.jsx";
import WlApplication from "./pages/wlApplication/index.jsx";

import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [beforeUnloadTime, setBeforeUnloadTime] = useState(undefined);
  const style = {
    height: "100vh",
    width: "100%",
    display: "flex",
    backgroundColor: " #000000",
    overflow: "hidden",
  };
  function beforeunload(e) {
    // debugger;
    console.log("beforeunload");
    // Cookies.remove("token");
    setBeforeUnloadTime(new Date().getTime());
  }
  function onunload(e) {
    // setGapTime(new Date().getTime() - beforeUnloadTime);
    console.log("onunload");

    if (new Date().getTime() - beforeUnloadTime <= 5) {
      // debugger;
      console.log("onunload");
      Cookies.remove("token");
    }

    // Cookies.remove("token");
  }

  useEffect(() => {
    // console.log(useNavigate);
    // window.addEventListener("beforeunload", beforeunload);
    window.addEventListener("beforeunload", beforeunload);
    window.addEventListener("unload", onunload);
  });
  return (
    <Web3ReactProvider getLibrary={(provider) => new Web3(provider)}>
      <div style={style}>
        <Routes>
          <Route path="/home" element={<Index />}></Route>
          <Route index element={<Index />} />
          <Route path="/wl-application" element={<WlApplication />}></Route>
        </Routes>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
