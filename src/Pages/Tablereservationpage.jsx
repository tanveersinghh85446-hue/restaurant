import { useState } from "react";

const timeSlots = ["12:00 PM","12:30 PM","1:00 PM","1:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM"];

const galleryImages = [
  { src: "/gallery/dining-chair.jpg", alt: "Dining Chair" },
  { src: "/gallery/table-setting.jpg", alt: "Table Setting" },
  { src: "/gallery/candles.jpg", alt: "Candles" },
  { src: "/gallery/flowers.jpg", alt: "Flowers" },
  { src: "/gallery/champagne.jpg", alt: "Champagne" },
  { src: "/gallery/music.jpg", alt: "Music" },
  { src: "/gallery/wine.jpg", alt: "Wine" },
  { src: "/gallery/herbs.jpg", alt: "Herbs" },
  { src: "/gallery/ambiance.jpg", alt: "Ambiance" },
  { src: "/gallery/event.jpg", alt: "Event" },
  { src: "/gallery/lights.jpg", alt: "Lights" },
  { src: "/gallery/cake.jpg", alt: "Cake" },
];

export default function TableReservationPage() {
  const [form, setForm] = useState({ date: "", time: "", guests: 2, name: "", email: "", phone: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Reserve Your Seat</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Table Reservation</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Form */}
          <div className="lg:col-span-3 bg-[#050d1f] border border-blue-900/30 rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="flex justify-center mb-4">
                  <img src="/icons/confirmed.png" alt="Confirmed" className="w-16 h-16 object-contain" />
                </div>
                <h2 className="font-['Playfair_Display',serif] text-3xl text-blue-400 mb-3">Reservation Confirmed!</h2>
                <p className="text-gray-400 mb-2">We look forward to welcoming you, <strong className="text-white">{form.name}</strong>.</p>
                <p className="text-gray-500 text-sm">{form.date} at {form.time} · {form.guests} guests</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 px-6 py-3 border border-blue-700/50 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-sm">
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="font-['Playfair_Display',serif] text-2xl text-blue-300 mb-6">Book Your Table</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Date</label>
                    <input type="date" name="date" value={form.date} onChange={handle} required
                      className="w-full bg-[#020918] border border-blue-900/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Time</label>
                    <select name="time" value={form.time} onChange={handle} required
                      className="w-full bg-[#020918] border border-blue-900/30 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors">
                      <option value="">Select Time</option>
                      {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Number of Guests</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setForm({ ...form, guests: Math.max(1, form.guests - 1) })}
                      className="w-10 h-10 border border-blue-700/50 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-colors text-xl">−</button>
                    <span className="text-white text-xl font-medium w-8 text-center">{form.guests}</span>
                    <button type="button" onClick={() => setForm({ ...form, guests: Math.min(20, form.guests + 1) })}
                      className="w-10 h-10 border border-blue-700/50 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-colors text-xl">+</button>
                    <span className="text-gray-600 text-sm">Max 20 guests</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[["name","Your Name","text"],["email","Email Address","email"],["phone","Phone Number","tel"]].map(([n,p,t]) => (
                    <div key={n} className={n === "phone" ? "sm:col-span-2" : ""}>
                      <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">{p}</label>
                      <input type={t} name={n} value={form[n]} onChange={handle} placeholder={p} required
                        className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors" />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Special Requests (Optional)</label>
                  <textarea name="notes" value={form.notes} onChange={handle} rows={3} placeholder="Allergies, celebrations, seating preferences..."
                    className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors resize-none" />
                </div>

                <button type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-blue-900/40">
                  Book a Table →
                </button>
              </form>
            )}
          </div>

          {/* Gallery & Info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Photo gallery */}
            <div>
              <h3 className="font-['Playfair_Display',serif] text-xl text-blue-300 mb-4">Our Dining Spaces</h3>
              <div className="grid grid-cols-3 gap-2">
                {galleryImages.map((img, i) => (
                  <div key={i} className="aspect-square bg-[#050d1f] border border-blue-900/20 rounded-lg overflow-hidden hover:border-blue-600/50 transition-colors cursor-pointer">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#050d1f] border border-blue-900/30 rounded-xl p-5">
              <h3 className="font-['Playfair_Display',serif] text-lg text-blue-300 mb-4 flex items-center gap-2">
                <img src="/icons/clock.png" alt="Hours" className="w-5 h-5 object-contain" />
                Opening Hours
              </h3>
              <ul className="space-y-2 text-sm">
                {[["Monday–Friday","12:00 PM – 10:00 PM"],["Saturday","11:00 AM – 11:00 PM"],["Sunday","11:00 AM – 9:00 PM"]].map(([day, hrs]) => (
                  <li key={day} className="flex justify-between text-gray-400">
                    <span>{day}</span><span className="text-blue-400">{hrs}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}