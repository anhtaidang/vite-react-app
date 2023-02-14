import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "~/containers/Home";
import CMSContainer from "~/containers/CMS";
import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <HomeContainer />
      <Routes>
        <Route path="cms" element={<CMSContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
