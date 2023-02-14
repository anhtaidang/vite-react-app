import React from "react";
import { Route, Routes } from "react-router";
import routeContants from "~/constants/routes";
// import CMSRoute from "~/routes/CMSRoute";
import Page from "~/containers/CMS/components/Page";
import "./styles.scss";

const { PageRoutes } = routeContants;
const CMSContainer = () => {
  return (
    <Routes>
      <Route path="/cms">
        <Route index element={<Page value="home cms" />} />
        {/*{PageRoutes.map((route) => {*/}
        {/*  const { Component } = route;*/}
        {/*  return (*/}
        {/*    <Route*/}
        {/*      key={route.path}*/}
        {/*      path={route.path}*/}
        {/*      element={<Component value={route.path} />}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </Route>
    </Routes>
  );
};

export default CMSContainer;
