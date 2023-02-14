import React from "react";
import { Route, Routes } from "react-router-dom";
import Page from "../CMS/components/Page";
import styles from "./styles.module.scss";

const HomeContainer = () => {
  const title = "";
  return (
    <div className={styles.homeContainer}>
      <Routes>
        <Route path="/">
          <Route index element={<Page value="Home" />} />
          <Route path="a" element={<Page value="A" />} />
          <Route path="b" element={<Page value="B" />} />
        </Route>
      </Routes>
    </div>
  );
};
export default HomeContainer;
