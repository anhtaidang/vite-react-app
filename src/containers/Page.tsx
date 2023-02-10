import React from "react";

import { withRouter } from "../HOC/withRouter";
import withDefaultLayout from "../layouts/DefaultLayout";

interface Props {
  value: string;
}

const Page = withRouter(
  withDefaultLayout(({ value }: Props) => {
    return <div>Page {value}</div>;
  })
);

export default Page;
