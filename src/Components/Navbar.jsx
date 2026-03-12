import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">Hotel Paradise</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <Link to="/rooms" onClick={() => setMenuOpen(false)}>Rooms</Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;