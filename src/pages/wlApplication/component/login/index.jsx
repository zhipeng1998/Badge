import { Button } from "antd";
import { useState } from "react";
import "./index.less";
import request from "@/utils/axios";
import CollectionCreateForm from "./modalForm";

const Login = () => {
  const [open, setOpen] = useState(false);
  const onCreate = async (values) => {
    console.log("Received values of form: ", values);
    // let res = await request.postFormData("/user/login", values);
    // if (res) {
    //   setOpen(false);
    // }
  };

  const Login = async () => {};
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default Login;
