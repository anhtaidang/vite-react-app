import React from "react";
import {
  ElementSchemaType,
  EnumElementType,
} from "~/containers/CMS/pages/PageBuilder/types";
import DraggableTextbox from "~/containers/CMS/pages/PageBuilder/components/DraggableTextbox";
import DragItemLayoutGrid from "~/containers/CMS/pages/PageBuilder/components/DragItemLayoutGrid";
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
  return (
    <div className="palette">
      {isReady &&
        elements.map((item) =>
          renderElement({ ...item, key: item.id, showBasicContent: true })
        )}
    </div>
  );
};

export default Palette;