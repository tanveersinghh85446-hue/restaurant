import React from "react";

const images = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className="h-40 w-full object-cover rounded"
        />
      ))}

    </div>
  );
};

export default Gallery;