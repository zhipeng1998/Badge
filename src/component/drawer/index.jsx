import "./index.less";
import { Drawer, Tooltip, Modal } from "antd";
import closebtn from "@/assets/img/closedButton.png";
import loreLogo from "@/assets/img/loreLogo.png";
import { useEffect, useState } from "react";
import { css } from "@emotion/css";

const MyDrawer = (props) => {
  useEffect(() => {
    console.log(props, "props");
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
              <img src={closebtn} width={50} alt="" />
            </div>
          </div>

          <div className="content">
            {/* <div className="title">{props.title}</div> */}
            <div className="logo">
              <Tooltip title="点击查看获奖人员">
                <img
                  src={props.logo}
                  width={"100%"}
                  onClick={() => {
                    console.log("first");
                    const { user, title } = JSON.parse(
                      localStorage.getItem("badge")
                    )?.find((item) => item.name === props.title);
                    console.log(user, "user");
                    Modal.success({
                      title:  <div style={{ color: "blueviolet", fontSize: "large" }}>{title}</div>,
                      content: user.map((item) => <div style={{ color: "blueviolet", fontSize: "medium" }}>{item}</div>),
                      okText: "关闭",
                      footer: null,
                      maskClosable: true,
                      className: css`
                        .ant-modal-content {
                          background: currentColor;
                        }
                      `,
                    });
                  }}
                  alt="展示获奖人员"
                />
              </Tooltip>
            </div>
            <div className="intro">{props.intro}</div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
