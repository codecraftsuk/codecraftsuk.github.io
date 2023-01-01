import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Courses from "../pages/courses";
import Home from "../pages/home";
import Jobs from "../pages/jobs";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
