import React from "react";
import ReactJson from "react-json-view";
import { ElementStateType } from "~/containers/CMS/pages/PageBuilder/types";
import StateCore from "~/containers/CMS/pages/PageBuilder/core/StateCore";

interface Props {}
const JsonReview = () => {
  const [currentState, setCurrentState] = React.useState<ElementStateType[]>();

  React.useEffect(() => {
    const newState = StateCore.getStorableState();
    if (newState && newState.length > 0) {
      setCurrentState(newState);
    }
  }, []);

  const onStateChange = () => {
    const newState = StateCore.getStorableState();
    if (newState && newState?.length > 0) {
      setCurrentState(newState);
    }
  };

  React.useEffect(() => {
    StateCore.addEventListener("change", onStateChange);
    return () => {
      StateCore.removeEventListener("change", onStateChange);
    };
  }, []);

  return <ReactJson src={currentState ?? {}} collapsed={2} theme="solarized" />;
};
export default JsonReview;
