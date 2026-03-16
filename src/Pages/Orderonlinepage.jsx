import {dishes} from "../Data/dishes";
import DishCard from "../Components/Dishcard";

export default function OrderOnlinePage({ cart, removeFromCart, updateQty }) {
  const subtotal = cart.reduce((sum, i) => sum + parseFloat(i.price) * i.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const popular = dishes.slice(0, 4);

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Fast & Fresh</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Order Online</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Dish suggestions */}
          <div className="lg:col-span-2">
            <h2 className="font-['Playfair_Display',serif] text-2xl text-blue-300 mb-6">Popular Picks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {popular.map((dish) => (
                <DishCard key={dish.id} dish={dish} addToCart={(d) => updateQty ? null : null} compact />
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="bg-[#050d1f] border border-blue-900/30 rounded-2xl p-6 sticky top-28">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-4">
                    <img src="Empty-plate.jpg" alt="Empty" className="w-20 h-20 object-contain opacity-50" />
                  </div>
                  <p>Your cart is empty</p>
                  <p className="text-xs mt-1 text-gray-400">Add items from the menu</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 pb-4 border-b border-blue-900/20 last:border-0">
                      <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-2" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{item.name}</p>
                        <p className="text-blue-400 text-xs">${item.price}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.qty - 1)}
                          className="w-6 h-6 rounded border border-blue-700/50 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-sm">
                          −
                        </button>
                        <span className="text-white text-sm w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)}
                          className="w-6 h-6 rounded border border-blue-700/50 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-sm">
                          +
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)}
                        className="text-gray-600 hover:text-red-400 transition-colors ml-1">
                        ×
                      </button>
                    </div>
                  ))}

                  {/* Totals */}
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Tax (8%)</span><span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-blue-300 pt-2 border-t border-blue-900/30">
                      <span>Total</span><span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-blue-900/40 mt-2">
                    Checkout →
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}