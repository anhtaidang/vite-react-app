import React, { useState } from "react";
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

  return (
    <>
      <DraggableElement {...props} id={idProp}>
        <span>
          {showBasicContent ? (
            name
          ) : (
            <>
              {text} <small>- {idProp}</small>
            </>
          )}
        </span>
      </DraggableElement>
    </>
  );
});

export default DraggableTextbox;
