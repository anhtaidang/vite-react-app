import React, { ReactElement, useRef } from "react";
import DragCore from "../core/DragCore";

interface Props {
  id: string;
  name?: string;
  initDone?: boolean;
  index?: number;
  allowHorizontal?: boolean;
  fields?: any[];
  draggable?: boolean;
  spaceAvailable?: boolean;
  updateState?: VoidFunction;
  dropzoneID?: string;
  parentID?: string;
  payload?: object;
  elementProps?: object;
  type?: string;
  children: React.ReactElement | ReactElement[];
  removeElement?: VoidFunction;
  checkAndRemoveElement?: VoidFunction;
}
const DraggableElement = React.memo((props: Props) => {
  const {
    id,
    type,
    name,
    fields = [],
    payload,
    parentID,
    dropzoneID,
    removeElement,
    checkAndRemoveElement = () => true,
    initDone,
    updateState = () => {},
    spaceAvailable,
    allowHorizontal,
    index = 0,
    draggable = true,
    elementProps,
    children,
  } = props;

  const dragElemRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (initDone) {
      updateState();
    }
  }, [initDone]);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const data = {
      id,
      type,
      name,
      payload,
      parentID,
      dropzoneID,
      fields,
    } as Props;

    if (fields) {
      data.fields = fields;
    }

    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("data", JSON.stringify(data)); // required, we cann't pass JS object

    // if element is already present in some canvas
    // then set draggedElement, so that this will help to remove the element from previous canvas
    if (dropzoneID) {
      DragCore.setDraggedElement({
        elementID: id,
        dropzoneID,
        removeElement,
        checkAndRemoveElement,
      });
    }
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (dragElemRef.current) {
      dragElemRef.current.classList.remove("before", "after");
    }

    // done dragging, reset dragged element
    DragCore.setDraggedElement(null);
  };

  /**
   * function to set drop position.
   * first fine mid of element upon which user is dragging over and
   * based on that decide whether user trying to drop an element above or below
   */
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    const elemCord = dragElemRef?.current?.getBoundingClientRect();
    if (!elemCord || !dragElemRef.current || !spaceAvailable) {
      return false;
    }

    if (allowHorizontal) {
      const dragElemX = e.clientX;
      if (dragElemX >= elemCord.x && dragElemX <= elemCord.x + elemCord.width) {
        const midX = elemCord.x + elemCord.width / 2;
        if (dragElemX < midX) {
          dragElemRef.current.classList.remove("after");
          dragElemRef.current.classList.add("before");
          DragCore.setDropPostion(index);
        } else {
          dragElemRef.current.classList.remove("before");
          dragElemRef.current.classList.add("after");
          DragCore.setDropPostion(index + 1);
        }
      }
    } else {
      const dragElemY = e.clientY;
      if (
        dragElemY >= elemCord.y &&
        dragElemY <= elemCord.y + elemCord.height
      ) {
        const midY = elemCord.y + elemCord.height / 2;
        if (dragElemY < midY) {
          dragElemRef.current.classList.remove("after");
          dragElemRef.current.classList.add("before");
          DragCore.setDropPostion(index);
        } else {
          dragElemRef.current.classList.remove("before");
          dragElemRef.current.classList.add("after");
          DragCore.setDropPostion(index + 1);
        }
      }
    }

    return true;
  };

  const handleDragLeave = () => {
    // remove before/after class from dragged element
    if (dragElemRef.current) {
      dragElemRef.current.classList.remove("before", "after");
    }
  };

  const events = React.useMemo(() => {
    const e = {} as React.HTMLAttributes<HTMLDivElement>;
    if (dropzoneID) {
      e.onDragOver = handleDragOver;
      e.onDragLeave = handleDragLeave;
    }
    return e;
  }, [dropzoneID]);

  return (
    <div
      className={`drag-item ${allowHorizontal ? "inline" : ""}`}
      ref={dragElemRef}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable={draggable}
      {...elementProps}
      {...events}
    >
      {children}
    </div>
  );
});

export default DraggableElement;
