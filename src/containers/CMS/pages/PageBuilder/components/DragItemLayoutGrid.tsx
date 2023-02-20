import React, { useState } from "react";
import { Col, Row } from "antd";
import { ElementDragLayoutType } from "~/containers/CMS/pages/PageBuilder/types";
import DraggableElement from "~/containers/CMS/pages/PageBuilder/components/DraggableElement";
import Dropzone from "./Dropzone/index";

interface Props extends ElementDragLayoutType {}

const COL_NUM = 2;

const DragItemLayoutGrid = React.memo((props: Props) => {
  const [text] = useState<string>("Grid");
  const [colNum] = useState<number>(COL_NUM);

  const {
    showBasicContent,
    showPreview = false,
    id: idProp,
    dropZoneProp,
    name,
    childNode,
    initialElements = [],
    ...rest
  } = props;

  const filterInitialElements = React.useCallback(
    (dID: string) => {
      return initialElements.filter((e) => e.dropzoneID === dID) || [];
    },
    [initialElements]
  );

  const dropZonesCells = React.useCallback(() => {
    return Array.from(Array(colNum)).map((col, index) => {
      const key = `${idProp}|${index + 1}`;
      return (
        <Col key={key} span={12}>
          {showPreview ? (
            childNode && childNode[key]?.map((e) => e)
          ) : (
            <Dropzone
              {...dropZoneProp}
              id={key}
              parentID={idProp}
              initialElements={filterInitialElements(key)}
            />
          )}
        </Col>
      );
    });
  }, [idProp, showPreview, childNode, dropZoneProp, colNum]);

  if (showPreview) {
    // content to be shown in preview mode - end result
    return <Row gutter={12}>{dropZonesCells()}</Row>;
  }

  return (
    <DraggableElement {...rest} id={idProp}>
      {showBasicContent ? (
        <span>{name}</span>
      ) : (
        <>
          <span className="text-id">
            {text} <small>- {idProp}</small>
          </span>
          <Row gutter={12}>{dropZonesCells()}</Row>
        </>
      )}
    </DraggableElement>
  );
});

export default DragItemLayoutGrid;
