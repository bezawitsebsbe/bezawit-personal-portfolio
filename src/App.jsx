import React from "react";
import About from "./About/about";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
