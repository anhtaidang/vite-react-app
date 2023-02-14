import React from "react";
import { Route, Routes } from "react-router";
import routeContants from "~/constants/routes";
import CMSRoute from "~/routes/CMSRoute";
import "./styles.scss";

const { PageRoutes } = routeContants;
const CMSContainer = () => {
  return (
    <Routes>
      <Route path="cms">
        {PageRoutes.map((route) => {
          const { Component } = route;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <CMSRoute>
                  <Component value={route.path} />
                </CMSRoute>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default CMSContainer;
