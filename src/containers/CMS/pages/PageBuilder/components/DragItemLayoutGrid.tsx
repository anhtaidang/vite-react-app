import React, { useState } from "react";
import { Col, Row } from "antd";
import {
  DropZoneType,
  ElementDragBaseType,
} from "~/containers/CMS/pages/PageBuilder/types";
import DraggableElement from "~/containers/CMS/pages/PageBuilder/components/DraggableElement";
import { v4 as uuidv4 } from "uuid";
import Dropzone from "./Dropzone/index";

interface Props extends ElementDragBaseType {
  dropZoneProp: DropZoneType;
}

const COL_NUM = 2;

const DragItemLayoutGrid = React.memo((props: Props) => {
  const [text] = useState<string>("Grid");

  const {
    showBasicContent,
    showPreview,
    id: idProp,
    dropZoneProp,
    name,
    ...rest
  } = props;
  const id = React.useMemo(() => {
    return idProp ?? uuidv4();
  }, []);

  const dropZonesCells = React.useCallback(() => {
    return Array.from(Array(COL_NUM)).map((col, index) => {
      const key = `${id}|${index + 1}`;
      return (
        <Col key={key} span={12}>
          <Dropzone {...dropZoneProp} id={`dropZone-${key}`} />
        </Col>
      );
    });
  }, [id]);

  return (
    <DraggableElement {...props} id={id}>
      {showBasicContent ? (
        <span>{name}</span>
      ) : (
        <>
          <span>
            {text} <small>- {id}</small>
          </span>
          <Row gutter={12}>{dropZonesCells()}</Row>
        </>
      )}
    </DraggableElement>
  );
});

export default DragItemLayoutGrid;
