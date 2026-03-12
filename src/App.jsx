import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import GalleryPage from "./Pages/GalleryPage";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/rooms" element={<Rooms />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}