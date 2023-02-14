import React from "react";
import { Route, Routes } from "react-router-dom";
import withDefaultLayout from "~/layouts/DefaultLayout";
import Page from "../CMS/components/Page";
import styles from "./styles.module.scss";

const HomeContainer = withDefaultLayout(() => {
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
});

export default HomeContainer;
