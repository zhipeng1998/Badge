import React, { useEffect, useState, useContext, useRef } from "react";
import BulletScreen, { StyledBullet } from "rc-bullets";
import request from "@/utils/axios";
import ReactContext from "@/utils/Context.js";
import Emoji from "../../../../component/emoji";
import "./index.less";
import { getCursorPosition } from "@/utils/common";
import { Input, Switch, Tooltip } from "antd";

const RcBullet = ({ login }) => {
  const { user, setUser } = useContext(ReactContext);
  const [screen, setScreen] = useState(null);
  const [checked, setChecked] = useState(true);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState("");
  const areaRel = useRef("");
  const cursorRef = useRef({
    start: text.length,
    end: text.length,
  });

  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen(".screen", { duration: 20 });
    setScreen(s);
  }, []);
  useEffect(() => {
    if (screen) {
      setInterval(() => {
        // getBarrage();
      }, 15000);
    }
  }, [screen]);

  const handleRecordCursorPosition = () => {
    const position = getCursorPosition(areaRel.current); //获取光标位置
    console.log(areaRel.current, position);
    cursorRef.current = position;
  };
  const handleBlur = () => {
    console.log("first");
    handleRecordCursorPosition();
  };

  const handleChangeRuleText = (e) => {
    setText(e.target.value);
    handleRecordCursorPosition();
  };

  // 发送弹幕
  const handleSend = () => {
    if (text && login) {
      sendBarrage(text);
    }
  };
  const sendBarrage = async (text) => {
    let data = {
      nickname: user.nickname,
      head_img: user.head_img,
      content: text,
    };

    let res = await request.postFormData("/barrage/send_barrage", data);
    if (res) {
      screen.push(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <img
            src={user.head_img}
            alt="无头像"
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <span>{text}</span>
        </div>
      );
      setText("");
    }
  };

  const getBarrage = async () => {
    let res = await request.get("/barrage/barrage_list");
    if (res) {
      res.data.data.forEach((item) => {
        screen.push(
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <img
              src={item.head_img}
              alt="无头像"
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <span>{item.content}</span>
          </div>
        );
        // screen.push({
        //   msg: item.content,
        //   head: item.head_img,
        //   color: "#eee",
        //   size: "small",
        //   backgroundColor: "transparent",
        //   border: "none",
        // });
      });
    }
  };

  const handleSetRuleText = (txt = "") => {
    const insertStart = cursorRef.current.start;
    const insertEnd = cursorRef.current.end + txt.length;
    const newText = text.slice(0, insertStart) + txt + text.slice(insertStart);
    console.log(text, cursorRef, newText);
    setText(newText);
  };

  const onChange = (checked) => {
    setChecked(checked);
    if (checked) {
      screen.show();
    } else {
      screen.clear();
      screen.hide();
    }
  };
  return (
    <div className="send">
      <div
        className={`emojiIcon ${showEmojiPicker ? "showEmojiPicker" : ""}`}
        onClick={() => {
          setShowEmojiPicker(!showEmojiPicker);
        }}
      ></div>
      {showEmojiPicker && login && (
        <div className="posi">
          <Emoji onSelect={(param) => handleSetRuleText(param.native)} />
        </div>
      )}
      <div className="textArea">
        {/* {!login ? (
          <Tooltip
            placement="topLeft"
            title="You need to be a co-creator first. Please sign up!"
            color="#EA5516"
            overlayInnerStyle={{
              width: 440,
              fontSize: 18,
              fontWeight: "bold",
              borderRadius: 10,
              padding: "0 10px",
            }}
          >
            <Input
              ref={areaRel}
              className="textAreaComp"
              onBlur={handleBlur}
              contentEditable="true"
              onChange={handleChangeRuleText}
              value={text}
              maxLength={220}
            />
          </Tooltip>
        ) : ( */}
          <Input
            ref={areaRel}
            className="textAreaComp"
            onBlur={handleBlur}
            contentEditable="true"
            onChange={handleChangeRuleText}
            value={text}
            maxLength={220}
          />
        {/* )} */}
      </div>

      {/* <input value={bullet} onChange={handleChange} /> */}
      <div className="sendBtn" onClick={handleSend}>
        send
      </div>

      <div className="showC">
        <Switch defaultChecked onChange={onChange} />
        {checked ? "Show" : "Mute"} Bullet Comment
      </div>
    </div>
  );
};
export default RcBullet;
