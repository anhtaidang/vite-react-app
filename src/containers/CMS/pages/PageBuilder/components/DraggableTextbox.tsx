import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ElementDragBaseType } from "~/containers/CMS/pages/PageBuilder/types";
import DraggableElement from "../components/DraggableElement";

interface Props extends ElementDragBaseType {}

const DraggableTextbox = React.memo((props: Props) => {
  const [text, setText] = useState<string>("Text Field");

  const { showBasicContent, showPreview, name, id: idProp } = props;

  if (showPreview) {
    // preview version - content to be shown in preview mode - end result, no need of `Draggable`
    return <span>{text}</span>;
  }

  const id = React.useMemo(() => {
    return idProp ?? uuidv4();
  }, [idProp]);

  // `showBasicContent` is default prop passed by `Palette` component
  // palette version - content to be shown in palette list
  return (
    <>
      <DraggableElement {...props} id={idProp}>
        <span>
          {showBasicContent ? (
            name
          ) : (
            <>
              {text} <small>- {id}</small>
            </>
          )}
        </span>
      </DraggableElement>
    </>
  );
});

export default DraggableTextbox;
