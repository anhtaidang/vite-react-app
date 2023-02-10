import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CMSContainer from "./containers/CMS";
import HomeRoutes from "./routes/HomeRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <Routes>
        <Route path="cms" element={<CMSContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
