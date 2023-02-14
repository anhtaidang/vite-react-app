import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import HomeContainer from "~/containers/Home";
// import CMSContainer from "~/containers/CMS";
import { Route } from "react-router";
import Page from "~/containers/CMS/components/Page";
import withDefaultLayout from "~/layouts/DefaultLayout";
import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <>
          <HomeContainer />
        </>
        {/*<CMSContainer />*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
