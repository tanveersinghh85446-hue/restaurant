import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1566073771259-6a8506099945)",
      }}
    >
      <div className="text-center text-white bg-black/50 p-10 rounded">
        <h1 className="text-5xl font-bold mb-4">
          Welcome To Our Hotel
        </h1>

        <p className="mb-5">
          Luxury rooms with the best service
        </p>

        <button className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;