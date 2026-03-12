import React from "react";
import Navbar from "../Components/Navbar";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

function GalleryPage() {
  return (
    <>
      <Navbar />

      <h1 className="text-4xl font-bold text-center mt-10">
        Hotel Gallery
      </h1>

      <Gallery />

      <Footer />
    </>
  );
}

export default GalleryPage;