import { useState } from "react";

const galleryItems = [
  { id: 1, img: "/gallery/beef-tenderloin.jpg", title: "Beef Tenderloin", category: "Food" },
  { id: 2, img: "/gallery/dining-hall.jpg", title: "Main Dining Hall", category: "Interior" },
  { id: 3, img: "/gallery/desserts.jpg", title: "Signature Desserts", category: "Food" },
  { id: 4, img: "/gallery/wine-cellar.jpg", title: "Wine Cellar", category: "Interior" },
  { id: 5, img: "/gallery/table-setup.jpg", title: "Table Setup", category: "Interior" },
  { id: 6, img: "/gallery/seafood-platter.jpg", title: "Seafood Platter", category: "Food" },
  { id: 7, img: "/gallery/celebrations.jpg", title: "Special Celebrations", category: "Events" },
  { id: 8, img: "/gallery/open-kitchen.jpg", title: "Open Kitchen", category: "Interior" },
  { id: 9, img: "/gallery/garden-terrace.jpg", title: "Garden Terrace", category: "Interior" },
  { id: 10, img: "/gallery/fine-dining.jpg", title: "Fine Dining Setup", category: "Events" },
  { id: 11, img: "/gallery/chef-at-work.jpg", title: "Chef at Work", category: "Events" },
  { id: 12, img: "/gallery/birthday.jpg", title: "Birthday Celebration", category: "Events" },
  { id: 13, img: "/gallery/fresh-salads.jpg", title: "Fresh Salads", category: "Food" },
  { id: 14, img: "/gallery/night-ambiance.jpg", title: "Night Ambiance", category: "Interior" },
  { id: 15, img: "/gallery/chefs-special.jpg", title: "Chef's Special", category: "Food" },
  { id: 16, img: "/gallery/live-music.jpg", title: "Live Music Evening", category: "Events" },
];

const cats = ["All", "Food", "Interior", "Events"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = galleryItems.filter(g => active === "All" || g.category === active);

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Visual Journey</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Gallery</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* Filters */}
        <div className="flex gap-2 justify-center mb-10">
          {cats.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-[#050d1f] text-gray-400 border border-blue-900/20 hover:border-blue-600/40 hover:text-blue-300"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className={`bg-linear-to-br from-blue-900/20 to-blue-800/5 border border-blue-900/20 rounded-xl overflow-hidden cursor-pointer hover:border-blue-600/50 hover:scale-[1.02] transition-all duration-200 group ${i % 7 === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-auto" : "h-40"}`}
            >
              <div className="relative w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-blue-300 text-xs text-center">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="bg-[#050d1f] border border-blue-900/30 rounded-2xl p-6 max-w-sm w-full text-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-['Playfair_Display',serif] text-2xl text-white mb-1">{selected.title}</h3>
            <p className="text-blue-400 text-sm">{selected.category}</p>
            <button onClick={() => setSelected(null)} className="mt-6 px-6 py-2 border border-blue-700/50 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-sm">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}