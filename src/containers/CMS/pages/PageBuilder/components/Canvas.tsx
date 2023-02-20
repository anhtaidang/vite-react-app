import React from "react";
import StateCore from "~/containers/CMS/pages/PageBuilder/core/StateCore";
import { ElementStateType } from "~/containers/CMS/pages/PageBuilder/types";
import Dropzone from "./Dropzone";

// functional component which extends Dropzone but with some fixed properties - id and parentID
// both props set to `root` - required since application state holds `root` as parent node
// default initDone set to true
interface Props {}

const Canvas = (props: Props) => {
  const [currentStates, setCurrentStates] = React.useState<ElementStateType[]>(
    []
  );

  React.useEffect(() => {
    const str = localStorage.getItem("initialElements");
    if (str) {
      const initElements = JSON.parse(str);
      if (initElements) {
        setCurrentStates([...initElements]);
      }
    }
  }, []);

  React.useEffect(() => {
    const stateChange = (newState: ElementStateType[]) => {
      const treeStates = StateCore.getStorableState();
      if (treeStates?.length > 0) {
        localStorage.setItem("initialElements", JSON.stringify(treeStates));
        setCurrentStates([...treeStates]);
      }
    };
    StateCore.addEventListener("change", stateChange);
    return () => {
      StateCore.removeEventListener("change", stateChange);
    };
  }, []);

  // re-hydrate canvas state
  // initialElements = JSON.parse(localStorage.getItem("initialElements"));
  // const handleOnDrop = (
  //   data: any,
  //   cb: any,
  //   { dropIndex, currentElements }: any
  // ) => {
  //   //In order to mock user input I'm using `window.prompt`
  //   // in actual scenario we can add some async call to fetch data
  //   // const name = window.prompt("Enter name of field");
  //   // const id = window.prompt("Enter id of field");
  //
  //   const result = cb({
  //     ...data,
  //     // name: name || data.name,
  //     id: uuidv4() || data.id,
  //   });
  // };

  return (
    <div className="main-canvas">
      <Dropzone
        // onDrop={handleOnDrop}
        {...props}
        parentID="root"
        id="root"
        initDone
        initialElements={currentStates}
      />
    </div>
  );
};

export default Canvas;
