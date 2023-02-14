import React from "react";
import withDefaultLayout from "../layouts/DefaultLayout";

interface Props {
  value: string;
}

const Page = withDefaultLayout(({ value }: Props) => {
  return <div>Page {value}</div>;
});

export default Page;
