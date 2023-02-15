import "./index.less";
import { Drawer } from "antd";
import closebtn from "@/assets/img/closedButton.png";
import loreLogo from "@/assets/img/loreLogo.png";
import { useEffect, useState } from "react";

const MyDrawer = (props) => {

  useEffect(() => {
   
  }, [props]);

  return (
    <div className="MyDrawer">
      <Drawer
        width={"50%"}
        placement={props.placement}
        closable={false}
        open={props.open}
        onClose={props.onClose}
        getContainer={false}
      >
        <div className="main">
          <div className="fixedBox">
            <div
              className="img"
              onClick={() => {
                props.onClose();
              }}
            >
              <img src={closebtn} width={50} />
            </div>
          </div>

          <div className="content">
            <div className="title">{props.title}</div>
            <div className="logo">
              <img
                src={props.logo}
                width={props.title == "manifesto" ? "80%" : "100%"}
              />
            </div>
            <div className="intro">{props.intro}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
