const chefs = [
  { name: "Chef Marco Rossi", role: "Executive Chef", img: "/images/chef-marco.jpg", specialty: "Italian & Mediterranean" },
  { name: "Chef Yuki Tanaka", role: "Pastry Chef", img: "/images/chef-yuki.jpg", specialty: "French Pastry & Desserts" },
  { name: "Chef Amir Patel", role: "Sous Chef", img: "/images/chef-amir.jpg", specialty: "South Asian Fusion" },
];

export default function AboutUsPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#020918]">
      <div className="bg-linear-to-b from-blue-900/30 to-transparent py-14 text-center">
        <p className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-2">Our Story</p>
        <h1 className="font-['Playfair_Display',serif] text-5xl font-bold text-white">About Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-20">

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-['Playfair_Display',serif] text-4xl font-bold text-white mb-6">
              A <span className="text-blue-400">Passion</span> for <br />Great Food
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>Founded in 2014, Restora began as a humble bistro with a single table and an enormous dream. Our founders believed that extraordinary food should be accessible, warm, and memorable.</p>
              <p>Today, we bring together seasonal ingredients, age-old techniques, and bold innovation to craft dishes that honor tradition while embracing creativity. Every plate that leaves our kitchen carries our commitment to excellence.</p>
              <p>We partner with local farms and artisan producers to ensure the freshest, most sustainable ingredients. From the first bite to the last, we want every visit to feel like coming home.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-blue-900/20">
              {[["10+","Years Open"],["3","Expert Chefs"],["4.9★","Avg Rating"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-['Playfair_Display',serif] font-bold text-blue-400">{num}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/about-dining.jpg", alt: "Dining" },
              { src: "/images/about-fresh.jpg", alt: "Fresh Ingredients" },
              { src: "/images/about-kitchen.jpg", alt: "Kitchen" },
              { src: "/images/about-drinks.jpg", alt: "Drinks" },
            ].map((img, i) => (
              <div key={i} className="bg-linear-to-br from-blue-900/30 to-blue-800/10 border border-blue-900/20 rounded-2xl overflow-hidden aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-white text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/icons/farm.png", title: "Farm to Table", desc: "We source exclusively from local, organic farms and trusted artisan producers." },
              { img: "/icons/heart.png", title: "Made with Love", desc: "Every dish is prepared with care, intention, and decades of culinary passion." },
              { img: "/icons/earth.png", title: "Sustainability", desc: "Our practices minimize waste and support the communities around us." },
            ].map((v) => (
              <div key={v.title} className="bg-[#050d1f] border border-blue-900/20 rounded-xl p-6 text-center hover:border-blue-600/40 transition-colors">
                <div className="flex justify-center mb-4">
                  <img src={v.img} alt={v.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="font-['Playfair_Display',serif] text-lg text-blue-300 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chefs */}
        <div>
          <h2 className="font-['Playfair_Display',serif] text-3xl font-bold text-white text-center mb-10">Meet Our Chefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chefs.map((chef) => (
              <div key={chef.name} className="bg-[#050d1f] border border-blue-900/20 rounded-xl overflow-hidden hover:border-blue-600/40 transition-all group">
                <div className="h-48 bg-linear-to-br from-blue-900/30 to-blue-800/10 overflow-hidden">
                  <img src={chef.img} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-['Playfair_Display',serif] text-lg text-white group-hover:text-blue-300 transition-colors">{chef.name}</h3>
                  <p className="text-blue-500 text-sm mt-1">{chef.role}</p>
                  <p className="text-gray-600 text-xs mt-2">{chef.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}