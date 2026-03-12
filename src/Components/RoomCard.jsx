import React from "react";

const RoomCard = ({ image, title, price }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          ₹{price} / night
        </p>

        <button className="mt-4 bg-yellow-500 px-4 py-2 rounded">
          Book Now
        </button>

      </div>
    </div>
  );
};

export default RoomCard;