import React from "react";
import withCMSLayout from "~/layouts/CMSLayout";

interface Props {
  children: JSX.Element;
}

const CMSRoute = React.memo(
  withCMSLayout(({ children }: Props) => {
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        {children}
      </React.Suspense>
    );
  })
);

export default CMSRoute;
