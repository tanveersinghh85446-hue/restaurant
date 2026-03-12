import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Rooms() {

  const rooms = [
    {
      name: "Deluxe Room",
      price: "₹2500 / night",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
    {
      name: "Luxury Room",
      price: "₹4000 / night",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
      name: "Suite Room",
      price: "₹6000 / night",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-10">

        <h1 className="text-4xl font-bold text-center mb-10">
          Our Rooms
        </h1>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {room.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {room.price}
                </p>

                <button className="mt-4 bg-yellow-500 px-5 py-2 rounded text-white hover:bg-yellow-600">
                  Book Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}