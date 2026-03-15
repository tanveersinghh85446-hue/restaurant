import { useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "order", label: "Order Online" },
  { id: "reservation", label: "Reservations" },
  { id: "about", label: "About Us" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, setActivePage, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020918]/95 backdrop-blur border-b border-blue-800/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div
          className="cursor-pointer flex items-center gap-2"
          onClick={() => setActivePage("home")}
        >
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg font-['Playfair_Display',serif]">R</span>
          </div>
          <div>
            <div className="text-white font-['Playfair_Display',serif] text-xl font-bold leading-none">
              Restora
            </div>
            <div className="text-blue-400/70 text-[10px] tracking-[0.2em] uppercase">
              Fine Dining
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => setActivePage(link.id)}
                className={`px-3 py-2 text-sm tracking-wide transition-all duration-200 rounded
                  ${activePage === link.id
                    ? "text-white bg-blue-600/25 border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-blue-600/10"
                  }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActivePage("order")}
            className="relative p-2 text-blue-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActivePage("reservation")}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-colors"
          >
            Book a Table
          </button>

          {/* Mobile menu btn */}
          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#050d1f] border-t border-blue-900/30 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActivePage(link.id); setMenuOpen(false); }}
              className={`block w-full text-left py-3 text-sm border-b border-blue-900/30 last:border-0 transition-colors
                ${activePage === link.id ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}