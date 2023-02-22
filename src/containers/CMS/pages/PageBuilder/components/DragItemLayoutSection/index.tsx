import React, { useState } from "react";
import { Col, Row, Space, Button } from "antd";
import { PicLeftOutlined } from "@ant-design/icons";
import { ElementDragLayoutType } from "~/containers/CMS/pages/PageBuilder/types";
import DraggableElement from "~/containers/CMS/pages/PageBuilder/components/DraggableElement";
import Dropzone from "../Dropzone";

interface Props extends ElementDragLayoutType {}

const COL_SECTION = 24;

type ColLayoutType = { label: string; col: number };

const EnumColSection: Record<string, number> = {
  COL_1: 24,
  COL_2: 12,
  COL_3: 8,
  COL_4: 6,
  COL_6: 4,
};

const colLayouts = Object.keys(EnumColSection).map((key) => {
  const colNum = COL_SECTION / EnumColSection[key];
  return { label: `${colNum} Col`, col: colNum } as ColLayoutType;
});

const DragItemLayoutSection = React.memo((props: Props) => {
  const [colState, setColState] = React.useState<ColLayoutType>(colLayouts[0]);
  const [text] = useState<string>("Section");

  const {
    showBasicContent,
    showPreview = false,
    id: idProp,
    dropZoneProp,
    name,
    childNode,
    initialElements = [],
  } = props;

  const filterInitialElements = React.useCallback(
    (dID: string) => {
      return initialElements.filter((e) => e.dropzoneID === dID) || [];
    },
    [initialElements]
  );

  const onColChange = (index: number) => () => {
    setColState(colLayouts[index]);
  };

  const colActionsLayout = React.useMemo(() => {
    return (
      <Button.Group size="small">
        {colLayouts.map((m, index) => (
          <Button
            key={`${m.label}`}
            icon={<PicLeftOutlined />}
            type={colState.col === m.col ? "primary" : "default"}
            onClick={onColChange(index)}
          >
            {m.label}
          </Button>
        ))}
      </Button.Group>
    );
  }, [colState]);

  const dropZonesCells = React.useCallback(() => {
    console.log("    console.log('')\n", colState.col);
    return Array.from(Array(colState.col)).map((col, index) => {
      const key = `${idProp}|${index + 1}`;
      return (
        <>
          {showPreview ? (
            childNode && childNode[key]?.map((e) => e)
          ) : (
            <Col key={key} span={COL_SECTION / colState.col}>
              <Dropzone
                {...dropZoneProp}
                id={key}
                parentID={idProp}
                initialElements={filterInitialElements(key)}
              />
            </Col>
          )}
        </>
      );
    });
  }, [idProp, showPreview, childNode, dropZoneProp, colState]);

  if (showPreview) {
    // content to be shown in preview mode - end result
    return <Row gutter={12}>{dropZonesCells()}</Row>;
  }

  return (
    <DraggableElement {...props} id={idProp}>
      {showBasicContent ? (
        <span>{name}</span>
      ) : (
        <>
          <span className="text-id">
            {text} <small>- {idProp}</small>
          </span>
          <Row>
            <Col span={24}>{colActionsLayout}</Col>
            <Space />
            <Col span={24}>
              <Row gutter={12}>{dropZonesCells()}</Row>
            </Col>
          </Row>
        </>
      )}
    </DraggableElement>
  );
});

export default DragItemLayoutSection;
