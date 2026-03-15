import { useState } from "react";
import DishCard from "../Components/Dishcard";
import { dishes, categories } from "../Data/dishes";

export default function MenuPage({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = dishes.filter((d) => {
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">

      {/* Header */}
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Curated Selection</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Our Menu</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dishes..."
            className="w-full bg-[#050d1f] border border-blue-900/30 text-white placeholder-gray-600 px-5 py-3 pr-12 rounded-xl focus:outline-none focus:border-blue-500/60 transition-colors"
          />
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                  : "bg-[#050d1f] text-gray-400 border border-blue-900/20 hover:border-blue-600/40 hover:text-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-600">No dishes found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((dish) => (
              <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}