import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Hotel</h1>

        <p className="text-gray-600">
          Our hotel provides luxury rooms and the best hospitality
          for our guests. Enjoy comfort and premium services.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;