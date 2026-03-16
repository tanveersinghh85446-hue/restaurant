import { useState } from "react";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import HomePage from "./Pages/HomePage"
import Menupage from "./Pages/Menupage"
import Orderonlinepage from "./Pages/Orderonlinepage"
import Tablereservationpage from "./Pages/Tablereservationpage"
import AboutUsPage from "./Pages/AboutUsPage"
import Reviewspage from "./Pages/Reviewspage"
import ContactPage from "./Pages/ContactPage"
import GalleryPage from "./Pages/GalleryPage"

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  };

  const pages = {
    home: <HomePage setActivePage={setActivePage} addToCart={addToCart} />,
    menu: <Menupage addToCart={addToCart} />,
    order: <Orderonlinepage cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />,
    reservation: <Tablereservationpage />,
    about: <AboutUsPage />,
    reviews: <Reviewspage />,
    contact: <ContactPage />,
    gallery: <GalleryPage />,
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-['Cormorant_Garamond',serif]">
      <Navbar activePage={activePage} setActivePage={setActivePage} cartCount={cart.reduce((a, i) => a + i.qty, 0)} />
      <main>{pages[activePage]}</main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}