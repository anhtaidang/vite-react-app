import React from "react";

export enum EnumElementType {
  ROOT = "ROOT",
  TEXTBOX = "TEXTBOX",
  LAYOUT_GRID_1_2 = "LAYOUT_GRID_1_2",
  LAYOUT_SECTION = "LAYOUT_SECTION",
}

export interface ElementStateType {
  id: string;
  type: EnumElementType;
  name: string;
  payload: Record<string, any>;
  dropzoneID: string | null;
  parentID: string | null;
  fields: ElementStateType[];
}

export interface ElementStateCoreType {
  id: string;
  type: EnumElementType;
  name: string;
  payload: Record<string, any>;
  dropzoneID: string | null;
  parentID: string | null;
  fields: ElementStateCoreType[];
  updateState?: (cb: VoidFunction, dispatchElementRemove: boolean) => void;
  removeElement?: (
    elementID: string,
    cb: VoidFunction,
    dispatchElementRemove?: boolean
  ) => void;
  updateElement?: (newData: ElementStateType, cb: VoidFunction) => void;
  flushDroppedElements?: (cb: VoidFunction) => void;
  checkAndRemoveElement?: VoidFunction;
}

export interface ElementDragBaseType extends Partial<ElementStateCoreType> {
  id: string;
  name: string;
  showBasicContent?: boolean;
  showPreview?: boolean;
  showId?: boolean;
  initialElements?: ElementStateType[];
}
export interface ElementDragLayoutType extends ElementDragBaseType {
  initialElements: ElementStateType[];
  childNode: Record<string, React.ReactNode[]>;
  dropZoneProp: DropZoneType;
}

export interface ElementSchemaType {
  id: string | null;
  name: string;
  type: EnumElementType;
}

export interface DropZoneType {
  parentID: string;
  capacity?: number;
  onDrop?: (dataInput: any, cb: (updateData: any) => any, dataRes: any) => void;
  onElementMove?: (element: any) => boolean;
  allowHorizontal?: boolean;
  initialElements?: any[];
  placeholder?: string | JSX.Element;
}
