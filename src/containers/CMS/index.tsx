import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, theme } from "antd";
import "./styles.scss";

const { Header, Sider, Content } = Layout;
const MIN_HEIGHT = 200;

const CMSContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      id="MAIN_LAYOUT"
      style={{
        overflow: "auto",
        width: "100%",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <span
            style={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: "100%",
              color: "white",
              fontWeight: 600,
            }}
          >
            VieON
          </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Row gutter={12}>
          <Col span={12}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
          <Col span={12}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={8}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
          <Col span={8}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
          <Col span={8}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col span={12}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
          <Col span={12}>
            <Content
              style={{
                padding: 24,
                minHeight: MIN_HEIGHT,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
};

export default CMSContainer;
