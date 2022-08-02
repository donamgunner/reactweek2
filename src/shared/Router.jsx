import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from "../pages/Info";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
