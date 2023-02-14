import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "~/containers/Page";

const HomeRoutes = () => {
  const title = "";
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Page value="Home" />} />
        <Route path="a" element={<Page value="A" />} />
        <Route path="b" element={<Page value="B" />} />
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
