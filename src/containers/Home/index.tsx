import React from "react";
import { Route, Routes } from "react-router-dom";
import withDefaultLayout from "~/layouts/DefaultLayout";
import styles from "./styles.module.scss";

const HomePage = ({ value }: { value: string }) => {
  return <div>Page {value}</div>;
};
const HomeContainer = withDefaultLayout(() => {
  return (
    <div className={styles.homeContainer}>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage value="Home" />} />
          <Route path="a" element={<HomePage value="A" />} />
          <Route path="b" element={<HomePage value="B" />} />
        </Route>
      </Routes>
    </div>
  );
});

export default HomeContainer;
