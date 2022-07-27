import React from "react";
import { Modal, Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useEffect } from "react";
const { Option } = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const EditModal = ({
  visible,
  setVisible,
  currentUser,
  setCurrentUser,
  state,
}) => {
  const [form] = Form.useForm();
  //   let initValues = {
  //     name: state.name,
  //     email: currentUser.email,
  //   };
  const [email, setEmail] = useState(currentUser.email);
  const [submitting, setSubmitting] = useState(false);
  console.log(currentUser.id);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    setEmail(currentUser.email);
  }, []);
  return (
    <Modal
      title="Modal 1000px width"
      centered
      visible={visible}
      //   onOk={() => setVisible(false)}
      onCancel={() => {
        form.resetFields();
        setVisible(false);
      }}
      width={1000}
    >
      <label htmlFor="name">Name: </label>
      <input type="text" required defaultValue={email} />
    </Modal>
  );
};

export default EditModal;
