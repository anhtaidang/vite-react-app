import React from "react";
import { ElementStateType } from "~/containers/CMS/pages/PageBuilder/types";
import StateCore from "~/containers/CMS/pages/PageBuilder/core/StateCore";
import DragCore from "~/containers/CMS/pages/PageBuilder/core/DragCore";

interface Props {
  children?: (element: any) => JSX.Element;
}
interface Props {}

const Preview = ({ children }: Props) => {
  const [root, setRoot] = React.useState<ElementStateType | null>();

  React.useEffect(() => {
    const newState = StateCore.getState() as any[];
    setRoot(newState?.length > 0 ? { ...newState[0] } : null);
  }, []);

  const registeredPaletteElements = DragCore.getRegisteredPaletteElements();

  React.useEffect(() => {
    // keep track of state tree changes
    const onStateChange = (newState: any) => {
      setRoot(newState?.length > 0 ? { ...newState[0] } : null);
    };

    StateCore.addEventListener("change", onStateChange);
    return () => {
      StateCore.removeEventListener("change", onStateChange);
    };
  }, []);

  const renderElementInPreviewMode = (element: ElementStateType) => {
    const childrenState = {} as any;
    const elementData = registeredPaletteElements.find(
      (e: ElementStateType) => e.type === element.type
    );

    const newElement = { ...element };

    // element has sub fields, render those fields first
    // and then come back to current field
    if (Array.isArray(newElement.fields) && newElement.fields.length > 0) {
      newElement.fields.forEach((field: ElementStateType) => {
        if (field && field.dropzoneID) {
          childrenState[field.dropzoneID] =
            childrenState[field.dropzoneID] || [];
          childrenState[field.dropzoneID] = childrenState[
            field.dropzoneID
          ].concat(renderElementInPreviewMode(field));
        }
      });
    }

    // render corresponding component and pass necessary props
    // showPreview is mandatory

    return (
      <elementData.component
        {...element}
        id={element.id}
        key={element.id}
        childNode={childrenState}
        showPreview
        showBasicContent={false}
      />
    );
  };

  // if you want more flexiblity
  if (typeof children === "function") {
    return children({
      children: root?.fields.map(renderElementInPreviewMode),
    });
  }

  return (
    <div className="preview-container">
      <div>Preview</div>
      {root && root?.fields?.map(renderElementInPreviewMode)}
    </div>
  );
};

export default Preview;
