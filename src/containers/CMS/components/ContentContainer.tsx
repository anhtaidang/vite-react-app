import React from "react";
import { Breadcrumb, Col, Row } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";

interface Props {
  colorBgContainer: string;
}

const MIN_HEIGHT = 190;
const ContentContainer = ({ colorBgContainer }: Props) => {
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
            Search List (Application)
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

export default ContentContainer;
