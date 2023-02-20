import React from "react";
import ReactJson from "react-json-view";
import { ElementStateType } from "~/containers/CMS/pages/PageBuilder/types";
import StateCore from "~/containers/CMS/pages/PageBuilder/core/StateCore";

interface Props {}
const JsonReview = () => {
  const [currentState, setCurrentState] = React.useState<ElementStateType[]>();

  React.useEffect(() => {
    const newSate = StateCore.getState() as any;
    if (newSate.length > 0) {
      setCurrentState(newSate[0].fields);
    }
  }, []);

  const onStateChange = (newState: ElementStateType[]) => {
    if (newState && newState?.length) {
      setCurrentState(newState?.length > 0 ? newState[0].fields : undefined);
    }
  };

  React.useEffect(() => {
    StateCore.addEventListener("change", onStateChange);
    return () => {
      StateCore.removeEventListener("change", onStateChange);
    };
  }, []);

  return <ReactJson src={currentState ?? {}} collapsed theme="solarized" />;
};
export default JsonReview;
