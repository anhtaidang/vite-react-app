import React from "react";
import { Route, Routes } from "react-router-dom";
import withDefaultLayout from "../../layouts/DefaultLayout";

import Page from "../Page";

const HomePage = withDefaultLayout(() => {
  return (
    <Routes>
      <Route index element={<Page value="Home" />} />
      <Route path="a" element={<Page value="A" />} />
      <Route path="b" element={<Page value="B" />} />
    </Routes>
  );
});

export default HomePage;
