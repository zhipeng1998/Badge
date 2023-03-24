import React, { useState, useEffect } from "react";
import "./index.less";
import $ from "jquery";

export const ScaleBox = ({ innerHeight, innerWidth, children }) => {
  const [scale, setScale] = useState(0);
  const [width, setWidth] = useState(1920);
  const [height, setHeight] = useState(1080);

  useEffect(() => {
    setScales();
    window.addEventListener("resize", debounce(setScales));
  }, []);

  const getScale = () => {
    const wh = window.innerHeight / height;
    const ww = window.innerWidth / width;
    return ww < wh ? ww : wh;
  };
  const setScales = () => {
    setScale(getScale());
    if ($("#ScaleBox")) {
      $("#ScaleBox")[0].style.setProperty("--scale", getScale());
    }
  };
  const debounce = (fn, delay) => {
    const delays = delay || 500;
    let timer;
    return function () {
      const th = this;
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        timer = null;
        fn.apply(th, args);
      }, delays);
    };
  };

  return (
    <div
      className="ScaleBox"
      id="ScaleBox"
      style={{
        width: width + "px",
        height: height + "px",
      }}
    >
      {children}
    </div>
  );
};
