import React from "react";
import { Breadcrumb, Col, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Canvas from "~/containers/CMS/pages/PageBuilder/components/Canvas";
import Palette from "~/containers/CMS/pages/PageBuilder/components/Palette";
import { EnumElementType } from "~/containers/CMS/pages/PageBuilder/types";
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
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col span={24}>
                <Palette
                  elements={[
                    {
                      // <-- palette elements to be shown
                      // id: "f1", // make sure ID is unique
                      id: null,
                      name: "Input Field",
                      type: EnumElementType.TEXTBOX,
                    },
                    {
                      // <-- palette elements to be shown
                      // id: "g1", // make sure ID is unique
                      id: null,
                      name: "Grid [1 Row - 2 Col]",
                      type: EnumElementType.LAYOUT_GRID_1_2,
                    },
                  ]}
                />
              </Col>
            </Row>
          </Content>
        </Col>
        <Col span={24}>
          <Content
            style={{
              padding: 24,
              minHeight: MIN_HEIGHT,
              background: colorBgContainer,
            }}
          >
            <Row gutter={12}>
              <Col span={24}>
                <Canvas />
              </Col>
            </Row>
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default PageBuilder;
