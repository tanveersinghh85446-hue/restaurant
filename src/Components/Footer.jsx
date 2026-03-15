export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#020918] border-t border-blue-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <div className="text-white font-['Playfair_Display',serif] text-xl font-bold">Restora</div>
                <div className="text-blue-400/70 text-[10px] tracking-[0.2em] uppercase">Fine Dining</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              An extraordinary dining experience crafted with passion and the finest ingredients.
            </p>
            <div className="flex gap-3 mt-5">
              {["f", "t", "in"].map((s) => (
                <a key={s} href="#"
                  className="w-8 h-8 border border-blue-700/50 rounded flex items-center justify-center text-blue-500 hover:border-blue-400 hover:text-white transition-colors text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[["home","Home"],["menu","Menu"],["about","About Us"],["gallery","Gallery"]].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => setActivePage(id)}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[["order","Online Order"],["reservation","Table Booking"],["reviews","Reviews"],["contact","Contact"]].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => setActivePage(id)}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-['Playfair_Display',serif] text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex gap-2">
                <img src="/icons/location.png" alt="Location" className="w-5 h-5 object-contain" />
                103 Restaurant St, Eng, 2-203-23226
              </li>
              <li className="flex gap-2">
                <img src="/icons/phone.png" alt="Phone" className="w-5 h-5 object-contain" />
                (723) 455-7920
              </li>
              <li className="flex gap-2">
                <img src="/icons/email.png" alt="Email" className="w-5 h-5 object-contain" />
                info@restora.com
              </li>
              <li className="flex gap-2">
                <img src="/icons/clock.png" alt="Hours" className="w-5 h-5 object-contain" />
                Mon–Sat: 10:00 AM – 10:00 PM
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-blue-900/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-sm">© 2024 Restora Restaurant. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}