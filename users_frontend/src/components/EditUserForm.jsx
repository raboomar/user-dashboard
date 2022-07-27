import React from "react";
import { Button, Col, Drawer, Form, Input, Row, Select, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { addNewUser } from "../client/client";
import { success, error } from "./notification";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
const { Option } = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const EditUserForm = ({
  showDrawer,
  setShowDrawer,
  fetchData,
  currentUser,
  setCurrentUser,
}) => {
  const [usersEmail, setUserEmail] = useState("hiiii");
  const onCLose = () => {
    setShowDrawer(false);
    setCurrentUser({});
  };

  useEffect(() => {
    setUserEmail(currentUser.email);
  }, []);

  console.log(currentUser);
  const [submitting, setSubmitting] = useState(false);
  const onFinish = (values) => {
    setSubmitting(true);
    addNewUser(values)
      .then(() => {
        onCLose();
        success("User added!", `${values.name} has been added`);
        fetchData();
      })
      .catch((err) =>
        error(`${err.response.data.message}`, `${err.response.data.message}`)
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    alert(JSON.stringify(errorInfo, null, 2));
  };

  return (
    <Drawer
      title="Edit User"
      width={720}
      onClose={onCLose}
      visible={showDrawer}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={onCLose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
        </div>
      }
    >
      <Form
        layout="vertical"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter name" }]}
              initialValue={currentUser.name}
            >
              <Input type="text" placeholder="Please enter name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Please enter email" }]}
              initialValue={usersEmail}
            >
              <Input placeholder="Please enter email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="gender"
              label="gender"
              rules={[{ required: true, message: "Please select a gender" }]}
              initialValue={currentUser.gender}
            >
              <Select placeholder="Please select a gender">
                <Option value="MALE">MALE</Option>
                <Option value="FEMALE">FEMALE</Option>
                <Option value="OTHER">OTHER</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>{submitting && <Spin indicator={antIcon} />}</Row>
      </Form>
    </Drawer>
  );
};

export default EditUserForm;
