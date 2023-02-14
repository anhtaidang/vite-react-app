import React from "react";
import withDefaultLayout from "~/layouts/DefaultLayout";
import "./styles.scss";

interface Props {
  value: string;
}

const Index = withDefaultLayout(({ value }: Props) => {
  return <div className="pageContainer">Page {value}</div>;
});

export default Index;
