export enum EnumElementType {
  TEXTBOX = "TEXTBOX",
  LAYOUT_GRID_1_2 = "LAYOUT_GRID_1_2",
}

export interface ElementSchemaType {
  id: string;
  name: string;
  type: EnumElementType;
}
