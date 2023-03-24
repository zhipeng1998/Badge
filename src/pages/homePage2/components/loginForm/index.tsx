import React, { useContext, useRef } from "react";
import "./index.less";
import { Button, Form, Modal } from "antd";
import { ProForm, ProFormText, ProFormTextArea } from "@ant-design/pro-form";
import { message } from "antd";
import request from "@/utils/axios";
import cookie from "js-cookie";
import ReactContext from "@/utils/Context.js";

const LoginForm: React.FC = (props) => {
  const { user, setUser } = useContext(ReactContext);

  const formRef = useRef();
  const getUserInfo = async () => {
    let res = await request.post("/user/info");
    console.log(res);
    if (res && res.data) {
      setUser(res.data);
    }
  };
  return (
    <div className="LoginForm">
      <ProForm
        ref={formRef}
        onFinish={async (values) => {
          let initial = {
            email: "",
            password: "",
          };
          values = Object.assign(initial, values);
          values.email = values.email.toLowerCase();
          console.log(values, "values");
          let res = await request.postFormData("/user/login", values);
          console.log(res);
          cookie.set("token", res.data, { expires: 1 });
          getUserInfo();
          props.closeWin();

          // if (res && res.data) {
          // }
        }}
        submitter={{
          searchConfig: {
            submitText: "Sign in",
          },
          resetButtonProps: {
            style: {
              display: "none",
            },
          },
          submitButtonProps: {},
        }}
        autoFocusFirstInput
      >
        <ProFormText
          name="email"
          rules={[
            {
              required: true,
              message: "Please input",
            },
            {
              pattern:
                /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,

              message: "error email address",
            },
          ]}
          label=""
          placeholder="*email address"
        />

        <ProFormText.Password
          name="password"
          rules={[
            {
              required: true,
              message: "Please input",
            },
          ]}
          label=""
          placeholder="*password"
        />

        <div className="signUp">
          <span
            onClick={() => {
              props.goRegister();
            }}
          >
            Wanna sign up?
          </span>

          <span
            onClick={() => {
              props.goForgotPassWord();
            }}
          >
            Forgot password
          </span>
        </div>
      </ProForm>
    </div>
  );
};

export default LoginForm;
