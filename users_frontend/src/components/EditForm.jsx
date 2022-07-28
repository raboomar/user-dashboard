import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editUser, getUser } from "../client/client";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { LoadingOutlined, HomeOutlined } from "@ant-design/icons";
import { success, error } from "./notification";
const { Option } = Select;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const EditForm = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [fetching, setFetching] = useState(true);
  const fetchCurrentUser = () => {
    getUser(id)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .finally(() => setFetching(false));
  };

  let initialValue = {
    name: currentUser.name,
    email: currentUser.email,
    gender: currentUser.gender,
  };
  const onFinish = (values) => {
    setSubmitting(true);
    editUser(values, id)
      .then(() => {
        success("User updated", `${values.name} has been updated`);
      })
      .catch((err) =>
        error(`${err.response.data.message}`, `${err.response.data.message}`)
      )
      .finally(() => setSubmitting(false));
  };

  const onFinishFailed = (errorInfo) => {
    alert(JSON.stringify(errorInfo, null, 2));
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      {fetching ? (
        <div>loading....</div>
      ) : (
        <Form
          layout="vertical"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          hideRequiredMark
          initialValues={initialValue}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter name" }]}
              >
                <Input type="text" placeholder="Please enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter email" }]}
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
            <Col span={22}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
                <Button
                  onClick={() => navigate("/")}
                  type="primary"
                  block
                  icon={<HomeOutlined />}
                >
                  Home
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Row>{submitting && <Spin indicator={antIcon} />}</Row>
        </Form>
      )}
    </>
  );
};

export default EditForm;
