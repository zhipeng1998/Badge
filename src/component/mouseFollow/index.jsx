import { useEffect, useState } from "react";
import "./index.less";

const MouseFollow = () => {
  const [client, setClient] = useState([0, 0]);
  useEffect(() => {
    document.onmousemove = (e) => {
      setClient([e.clientX, e.clientY]);
    };
  }, []);

  return (
    <div className="l-cursor js-cursor is-hide">
      <div
        className="l-cursor__deco js-cursor-bg"
        style={{
          transform: "translate(" + client[0] + "px," + client[1] + "px)",
        }}
      ></div>
      <div
        className="l-cursor__point js-cursor-point"
        style={{
          transform: "translate(" + client[0] + "px," + client[1] + "px)",
        }}
      ></div>
    </div>
  );
};

export default MouseFollow;
