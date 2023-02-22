import React from "react";
import { Col, Row, Tabs, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import Palette from "~/containers/CMS/pages/PageBuilder/components/Palette";
import Canvas from "~/containers/CMS/pages/PageBuilder/components/Canvas";
import { EnumElementType } from "~/containers/CMS/pages/PageBuilder/types";
import { AppleOutlined } from "@ant-design/icons";
import Preview from "~/containers/CMS/pages/PageBuilder/components/Preview";
import JsonReview from "~/containers/CMS/pages/PageBuilder/components/JsonReview";

const MIN_HEIGHT = 190;
const paletteElements = [
  {
    // <-- palette elements to be shown
    // id: "f1", // make sure ID is unique
    id: null,
    name: "Input Field",
    type: EnumElementType.TEXTBOX,
  },
  {
    id: null,
    name: "Grid [1 Row - 2 Col]",
    type: EnumElementType.LAYOUT_GRID_1_2,
  },
  {
    id: null,
    name: "Section",
    type: EnumElementType.LAYOUT_SECTION,
  },
];

interface Props {
  colorBgContainer: string;
}

const PageConfigurator = ({ colorBgContainer }: Props) => {
  const ConfigComponent = React.useMemo(
    () => (
      <Row>
        <Col span={24}>
          <Content
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Row>
              <Col span={24}>
                <Palette elements={paletteElements} />
              </Col>
            </Row>
          </Content>
        </Col>
        <Col span={24}>
          <Content
            style={{
              padding: 0,
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
    ),
    [colorBgContainer]
  );

  const tabItems = React.useMemo(
    () => [
      {
        icon: AppleOutlined,
        label: "Page Config",
        component: ConfigComponent,
      },
      {
        icon: AppleOutlined,
        label: "Preview",
        component: <Preview />,
      },
      {
        icon: AppleOutlined,
        label: "JSON",
        component: <JsonReview />,
      },
    ],
    [ConfigComponent]
  );

  return (
    <>
      <Row>
        <Col span={24}>
          <Tabs
            defaultActiveKey="1"
            items={tabItems.map((item, i) => {
              const id = String(i + 1);

              return {
                label: (
                  <span>
                    <item.icon />
                    {item.label}
                  </span>
                ),
                key: id,
                children: item.component,
              };
            })}
          />
        </Col>
      </Row>
    </>
  );
};

export default PageConfigurator;
