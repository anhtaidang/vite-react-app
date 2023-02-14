import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import SiderMenu from "./components/SiderMenu";
import ContentContainer from "./components/ContentContainer";
import "./styles.scss";

const { Header } = Layout;

const CMSContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

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
      <SiderMenu collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
            }
          )}
        </Header>
        <Layout className="site-layout-container">
          <ContentContainer colorBgContainer={colorBgContainer} />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CMSContainer;
