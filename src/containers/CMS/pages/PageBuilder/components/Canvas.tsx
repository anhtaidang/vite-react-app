import React from "react";
import { v4 as uuidv4 } from "uuid";
import Dropzone from "./Dropzone";

// functional component which extends Dropzone but with some fixed properties - id and parentID
// both props set to `root` - required since application state holds `root` as parent node
// default initDone set to true
interface Props {}

const Canvas = (props: Props) => {
  const handleOnDrop = (
    data: any,
    cb: any,
    { dropIndex, currentElements }: any
  ) => {
    //In order to mock user input I'm using `window.prompt`
    // in actual scenario we can add some async call to fetch data
    // const name = window.prompt("Enter name of field");
    // const id = window.prompt("Enter id of field");

    const result = cb({
      ...data,
      // name: name || data.name,
      id: uuidv4() || data.id,
    });
  };

  return (
    <div className="main-canvas">
      <Dropzone
        onDrop={handleOnDrop}
        {...props}
        parentID="root"
        id="root"
        initDone
      />
    </div>
  );
};

export default Canvas;
