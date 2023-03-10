import React, { useEffect } from "react";
import "./index.less";

// import * as THREE from 'three';

import { init, changePic } from "./js/script";

// import {
//   Scene,
//   WebGLRenderer,
//   PerspectiveCamera,
//   BoxGeometry,
//   MeshBasicMaterial,
//   Mesh
// } from 'three';

const CarouselWithRole = ({ changeBg }) => {
  useEffect(() => {
    // script;
    if (changeBg) {
      init("manEyeClose.png");
    } else {
      init("manEyes.png");
    }
  }, []);
  return (
    <>
      <div id="three-container"></div>
      <div
        id="changePic"
        onClick={() => {
          console.log("first");
        }}
      ></div>
      {/* <button id="changePic">切换图片</button> */}
    </>
  );
};
export default CarouselWithRole;
