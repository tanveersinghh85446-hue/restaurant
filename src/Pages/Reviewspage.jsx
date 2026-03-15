import { useState } from "react";

const reviews = [
  { id: 1, name: "Sarah Johnson", rating: 5, date: "Mar 10, 2024", text: "Absolutely stunning experience. The beef tenderloin was cooked to perfection and the ambiance was magical. Will definitely return!", avatar: "/avatars/avatar-1.jpg" },
  { id: 2, name: "Michael Chen", rating: 5, date: "Feb 28, 2024", text: "Best fine dining experience in the city. The truffle risotto is a masterpiece. Service was impeccable from start to finish.", avatar: "/avatars/avatar-2.jpg" },
  { id: 3, name: "Emma Rodriguez", rating: 4, date: "Feb 15, 2024", text: "Incredible food and great atmosphere. The chocolate lava cake was out of this world! Slightly long wait but worth every minute.", avatar: "/avatars/avatar-3.jpg" },
  { id: 4, name: "James Wilson", rating: 5, date: "Jan 30, 2024", text: "Celebrated our anniversary here. The staff went above and beyond, surprising us with a dessert platter. Truly memorable evening.", avatar: "/avatars/avatar-4.jpg" },
  { id: 5, name: "Priya Sharma", rating: 5, date: "Jan 18, 2024", text: "The lamb chops were divine! Perfectly seasoned, beautifully presented. Paired with the espresso martini — perfection.", avatar: "/avatars/avatar-5.jpg" },
  { id: 6, name: "David Park", rating: 4, date: "Jan 5, 2024", text: "Excellent food, great cocktails. The burrata salad was fresh and vibrant. Would love to see more vegetarian options on the menu.", avatar: "/avatars/avatar-6.jpg" },
];

function Stars({ count, max = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`text-sm ${i < count ? "text-blue-400" : "text-gray-700"}`}>★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);

  const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Guest Experiences</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Reviews</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
          <div className="md:col-span-1 bg-[#050d1f] border border-blue-900/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="font-['Playfair_Display',serif] text-6xl font-bold text-blue-400">{avg}</div>
            <Stars count={5} />
            <p className="text-gray-500 text-sm mt-2">{reviews.length} reviews</p>
          </div>
          <div className="md:col-span-3 bg-[#050d1f] border border-blue-900/30 rounded-2xl p-8">
            <h3 className="text-blue-300 font-['Playfair_Display',serif] text-lg mb-4">Rating Breakdown</h3>
            {[5,4,3,2,1].map((star) => {
              const count = reviews.filter(r => r.rating === star).length;
              const pct = (count / reviews.length) * 100;
              return (
                <div key={star} className="flex items-center gap-3 mb-2">
                  <span className="text-blue-400 text-sm w-4">{star}★</span>
                  <div className="flex-1 bg-[#0d1a33] rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-gray-600 text-xs w-4">{count}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Review list */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-['Playfair_Display',serif] text-2xl text-blue-300 mb-4">Customer Reviews</h2>
            {reviews.map((r) => (
              <div key={r.id} className="bg-[#050d1f] border border-blue-900/20 rounded-xl p-6 hover:border-blue-700/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full overflow-hidden flex-shrink-2">
                    <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-white font-medium">{r.name}</span>
                      <Stars count={r.rating} />
                      <span className="text-gray-600 text-xs ml-auto">{r.date}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Write a review */}
          <div className="lg:col-span-1">
            <div className="bg-[#050d1f] border border-blue-900/30 rounded-2xl p-6 sticky top-28">
              <h2 className="font-['Playfair_Display',serif] text-xl text-blue-300 mb-5">Write a Review</h2>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="flex justify-center mb-3">
                    <img src="/icons/star-filled.png" alt="Thank you" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-blue-300 font-medium">Thank you!</p>
                  <p className="text-gray-500 text-sm mt-1">Your review has been submitted.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-xs text-blue-500 hover:text-blue-300 underline">Write another</button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Your Name</label>
                    <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name"
                      className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Rating</label>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <button key={s} onClick={() => setForm({...form, rating: s})}
                          className={`text-2xl transition-all ${s <= form.rating ? "text-blue-400" : "text-gray-700 hover:text-blue-500"}`}>★</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Your Review</label>
                    <textarea value={form.text} onChange={e => setForm({...form, text: e.target.value})} rows={4} placeholder="Share your experience..."
                      className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors resize-none text-sm" />
                  </div>
                  <button onClick={() => form.name && form.text && setSubmitted(true)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium tracking-wide transition-all">
                    Submit Review
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