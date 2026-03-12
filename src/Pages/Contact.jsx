import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded"
          />

          <textarea
            placeholder="Your Message"
            className="p-3 border rounded"
          ></textarea>

          <button className="bg-yellow-500 py-3 rounded text-white">
            Send Message
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Contact;