import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-white mb-4">
                We'd Love to Hear <span className="text-blue-400">From You</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">Whether you have a question, a compliment, or a special request — our team is always ready to help.</p>
            </div>

            <div className="space-y-5">
              {[
                { img: "/icons/location.png", label: "Address", value: "103 Restaurant Street, Eng 2-203-23226" },
                { img: "/icons/phone.png", label: "Phone", value: "(723) 455-7920" },
                { img: "/icons/email.png", label: "Email", value: "info@restora.com" },
                { img: "/icons/clock.png", label: "Hours", value: "Mon–Sat: 10:00 AM – 10:00 PM\nSunday: 11:00 AM – 9:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-5 bg-[#050d1f] border border-blue-900/20 rounded-xl hover:border-blue-700/40 transition-colors">
                  <img src={item.img} alt={item.label} className="w-7 h-7 object-contain flex-shrink-2" />
                  <div>
                    <p className="text-blue-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-gray-300 text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-600 text-sm mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {[["f","Facebook"],["t","Twitter"],["in","Instagram"]].map(([s, label]) => (
                  <a key={s} href="#" title={label}
                    className="w-10 h-10 bg-[#050d1f] border border-blue-800/40 rounded-lg flex items-center justify-center text-blue-500 hover:border-blue-400 hover:text-white transition-colors font-bold text-sm">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-linear-to-br from-blue-900/20 to-blue-800/5 border border-blue-900/20 rounded-xl h-48 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <img src="/icons/map.png" alt="Map" className="w-10 h-10 object-contain" />
                </div>
                <p className="text-gray-600 text-sm">View on Google Maps</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                  className="text-blue-500 text-xs hover:text-blue-300 underline mt-1 inline-block">
                  Open Map →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#050d1f] border border-blue-900/30 rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-16">
                <div className="flex justify-center mb-4">
                  <img src="/icons/message-sent.png" alt="Message Sent" className="w-16 h-16 object-contain" />
                </div>
                <h2 className="font-['Playfair_Display',serif] text-3xl text-blue-400 mb-3">Message Sent!</h2>
                <p className="text-gray-400">Thank you, <strong className="text-white">{form.name}</strong>. We'll be in touch soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-8 px-6 py-3 border border-blue-700/50 text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h2 className="font-['Playfair_Display',serif] text-2xl text-blue-300 mb-6">Send a Message</h2>
                {[["name","Your Name","text"],["email","Email Address","email"]].map(([n,p,t]) => (
                  <div key={n}>
                    <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">{p}</label>
                    <input type={t} name={n} value={form[n]} onChange={handle} placeholder={p} required
                      className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">Your Message</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="How can we help?" required
                    className="w-full bg-[#020918] border border-blue-900/30 text-white placeholder-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500/60 transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium tracking-wide transition-all hover:shadow-lg hover:shadow-blue-900/40">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}