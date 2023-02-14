import React from "react";
import { Route } from "react-router";
import { RouteProps } from "react-router/dist/lib/components";
import withCMSLayout from "~/layouts/CMSLayout";

interface Props {}

const CMSRoute: React.FC<Props & RouteProps> = withCMSLayout(({ ...rest }) => {
  return <Route {...rest} />;
});

export default CMSRoute;
