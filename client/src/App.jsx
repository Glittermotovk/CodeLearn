import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import CPage from "./pages/CPage";
import Java from "./pages/Java";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JavaScript from "./pages/JavaScript";

import "./index.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Language Pages */}
        <Route path="/c" element={<CPage />} />
        <Route path="/java" element={<Java />} />
        <Route path="/html" element={<HTML />} />
        <Route path="/css" element={<CSS />} />
        <Route path="/javascript" element={<JavaScript />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
