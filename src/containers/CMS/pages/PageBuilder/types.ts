export enum EnumElementType {
  TEXTBOX = "TEXTBOX",
  LAYOUT_GRID_1_2 = "LAYOUT_GRID_1_2",
}

export interface ElementDragBaseType {
  id: string;
  name: string;
  showBasicContent?: boolean;
  showPreview?: boolean;
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
