import React from "react";
import { Breadcrumb, Col, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

interface Props {
  value?: string;
}

const MIN_HEIGHT = 190;
const Page: React.FC<Props> = ({ value }) => {
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
            Search List (Application) Page {value}
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
    </>
  );
};

export default Page;
