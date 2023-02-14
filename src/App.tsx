import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeContainer from "~/containers/Home";
import CMSContainer from "~/containers/CMS";
import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <HomeContainer />
      <CMSContainer />
    </BrowserRouter>
  );
};

export default App;
