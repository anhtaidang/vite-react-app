import React from "react";
import { Breadcrumb, Col, Row, Tabs, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import PageConfigurator from "~/containers/CMS/pages/PageBuilder/components/PageConfigurator";
import "./style.scss";

const MIN_HEIGHT = 190;

const PageBuilder = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Row gutter={12} className="full-content on-top">
        <Col span={24}>
          <Content
            style={{
              padding: 24,
              minHeight: MIN_HEIGHT,
              background: colorBgContainer,
            }}
          >
            <Breadcrumb style={{ marginBottom: 8 }}>
              <Breadcrumb.Item href="">
                <HomeOutlined />
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
            Search List (Application) Page
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
            <PageConfigurator colorBgContainer={colorBgContainer} />
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default PageBuilder;
