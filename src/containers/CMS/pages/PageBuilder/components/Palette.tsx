import React from "react";
import { Button, Col, Row } from "antd";
import {
  ElementSchemaType,
  EnumElementType,
} from "~/containers/CMS/pages/PageBuilder/types";
import DraggableTextbox from "~/containers/CMS/pages/PageBuilder/components/DraggableTextbox";
import DragItemLayoutGrid from "~/containers/CMS/pages/PageBuilder/components/DragItemLayoutGrid";
import StateCore from "~/containers/CMS/pages/PageBuilder/core/StateCore";
import DragCore from "../core/DragCore";

interface Props {
  elements: ElementSchemaType[];
}

const Palette = ({ elements }: Props) => {
  const [isReady, setIsReady] = React.useState<boolean>(false);
  React.useEffect(() => {
    DragCore.registerPaletteElements([
      {
        type: EnumElementType.TEXTBOX, // import from const.js
        component: DraggableTextbox, // import from DraggableTextbox.js
      },
      {
        type: EnumElementType.LAYOUT_GRID_1_2, // import from const.js
        component: DragItemLayoutGrid, // import from DragItemLayoutGrid.js
      },
    ]);
    setIsReady(true);
  }, []);

  const renderElement = (
    newProps: ElementSchemaType & {
      key: string | null;
      showBasicContent: boolean;
    }
  ) => {
    const element = DragCore.getRegisteredPaletteElements().find(
      (e: any) => e.type === newProps.type
    );
    return element ? (
      <element.component {...newProps} showBasicContent />
    ) : null;
  };

  const clearStorage = () => {
    StateCore.clearState();
  };

  return (
    <Row>
      <Col span={24} style={{ marginBottom: 10 }}>
        <Button danger type="primary" onClick={clearStorage}>
          Clear Storage
        </Button>
      </Col>
      {isReady && (
        <Col span={24}>
          <div className="palette">
            {elements.map((item, index) =>
              renderElement({
                ...item,
                key: `palette-${index}`,
                showBasicContent: true,
              })
            )}
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Palette;
