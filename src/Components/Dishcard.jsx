export default function DishCard({ dish, addToCart, compact = false }) {
  return (
    <div className={`bg-[#050d1f] border border-blue-900/20 rounded-xl overflow-hidden hover:border-blue-600/50 transition-all duration-300 group ${compact ? "" : "hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20"}`}>

      {/* Image */}
      <div className={`relative overflow-hidden bg-linear-to-br from-blue-900/30 to-blue-800/10 ${compact ? "h-32" : "h-48"}`}>
        <img
          src={dish.img}
          alt={dish.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {dish.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-blue-600 text-white text-xs rounded font-semibold tracking-wide">
            {dish.badge}
          </span>
        )}
      </div>

      <div className={`p-4 ${compact ? "p-3" : ""}`}>
        <div className="flex justify-between items-start mb-1">
          <h3 className={`font-['Playfair_Display',serif] font-semibold text-white group-hover:text-blue-400 transition-colors ${compact ? "text-sm" : "text-base"}`}>
            {dish.name}
          </h3>
          <span className="text-blue-400 font-bold text-sm ml-2 whitespace-nowrap">${dish.price}</span>
        </div>
        <p className={`text-gray-500 leading-relaxed mb-3 ${compact ? "text-xs line-clamp-1" : "text-xs line-clamp-2"}`}>
          {dish.description}
        </p>
        <button
          onClick={() => addToCart && addToCart(dish)}
          className="w-full py-2 bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs rounded hover:bg-blue-600 hover:text-white transition-all duration-200 font-medium tracking-wide"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}