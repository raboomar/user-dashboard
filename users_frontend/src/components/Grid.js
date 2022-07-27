import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import EditForm from "./EditForm";
import { Breadcrumb, Layout } from "antd";
import UsersList from "./UsersList";
const { Header, Content, Footer } = Layout;

const Grid = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Routes>
              <Route path="/" element={<UsersList />} />
              <Route path="/edit/:id" element={<EditForm />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}> By Rami Aboomar 2022</Footer>
      </Layout>
    </Layout>
  );
};

export default Grid;
