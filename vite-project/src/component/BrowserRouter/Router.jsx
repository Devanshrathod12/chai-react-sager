import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../context/Home";
import About from "../context/About";
import Portfoliyo from "../context/Portfoliyo";
import ErrorS from '../../component/context/ErrorS'
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfoliyo" element={<Portfoliyo />} />
          <Route path="*" element={<ErrorS />} />
        </Routes>
      </BrowserRouter>{" "}
    
    </div>
  );
};

export default Router;
