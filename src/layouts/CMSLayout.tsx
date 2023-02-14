import React, { useState } from "react";
import { Layout, theme } from "antd";
import SiderMenu from "~/containers/CMS/components/SiderMenu";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const CMSLayout = React.memo(
  ({ children }: { children?: JSX.Element | JSX.Element[] }) => {
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
          <Layout className="site-layout-container">{children}</Layout>
        </Layout>
      </Layout>
    );
  }
);

const withCMSLayout = <T extends object>(
  WrappedComponent: React.ComponentType<T> | React.FC<T>
) => {
  const ComponentRender = (props: T) => {
    return (
      <CMSLayout>
        <WrappedComponent {...props} />
      </CMSLayout>
    );
  };
  return ComponentRender;
};

export default withCMSLayout;
