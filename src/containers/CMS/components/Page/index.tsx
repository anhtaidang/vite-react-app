import React from "react";
import "./styles.scss";

interface Props {
  value?: string;
}

const Page: React.FC<Props> = ({ value }) => {
  return <div className="pageContainer">Page {value}</div>;
};

export default Page;
