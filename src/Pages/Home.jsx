import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";
import RoomCard from "../Components/RoomCard";

function Home() {

  const rooms = [
    {
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      title: "Deluxe Room",
      price: "2500"
    },
    {
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      title: "Luxury Room",
      price: "4000"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      title: "Suite Room",
      price: "6000"
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      <div className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Rooms
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              image={room.image}
              title={room.title}
              price={room.price}
            />
          ))}
        </div>
      </div>

      <Gallery />
      <Footer />
    </>
  );
}

export default Home;