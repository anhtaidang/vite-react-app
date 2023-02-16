import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DraggableElement from "../components/DraggableElement";

interface Props {
  id: string;
  name: string;
  showBasicContent?: boolean;
  showPreview?: boolean;
}

const DraggableTextbox = (props: Props) => {
  const [text, setText] = useState<string>("Text Field");

  const { showBasicContent, showPreview, name, id: idProp } = props;
  //

  if (showPreview) {
    // preview version - content to be shown in preview mode - end result, no need of `Draggable`
    return <span>{text}</span>;
  }

  const id = React.useMemo(() => {
    return idProp ?? uuidv4();
  }, []);

  // `showBasicContent` is default prop passed by `Palette` component
  // palette version - content to be shown in palette list
  return (
    <>
      <DraggableElement {...props} id={id}>
        <span>
          {text} {!showBasicContent && <small>- {id}</small>}
        </span>
      </DraggableElement>
    </>
  );
};

export default DraggableTextbox;
