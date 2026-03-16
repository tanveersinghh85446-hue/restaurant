import DishCard from "../Components/Dishcard";
import {dishes} from "../Data/dishes"
import { FaCircle, FaUtensils } from "react-icons/fa";
import { MdDeliveryDining, MdMenuBook, MdStar, MdPhoneIphone, MdTableRestaurant } from "react-icons/md";
import { GiMeat, GiCupcake, GiWineBottle } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";


export default function HomePage({ setActivePage, addToCart }) {
  const BLUE = "#2563EB";
  const BLUE_LIGHT = "#3B82F6";
  const BLUE_DARK = "#1D4ED8";

  const popular = dishes.filter((d) => d.badge).slice(0, 3);

  const features = [
    {
      icon: <MdDeliveryDining className="text-4xl text-blue-500" />,
      title: "Online Order",
      desc: "Order your favorite dishes from the comfort of your home.",
    },
    {
      icon: <MdMenuBook className="text-4xl text-blue-500" />,
      title: "Menu & Booking",
      desc: "Browse our full menu and easily book a table online.",
    },
    {
      icon: <MdStar className="text-4xl text-blue-500" />,
      title: "Reviews",
      desc: "Thousands of happy guests love our food and service.",
    },
    {
      icon: <MdPhoneIphone className="text-4xl text-blue-500" />,
      title: "Responsive Design",
      desc: "Enjoy a seamless experience on any device.",
    },
  ];

  const stats = [
    ["10+", "Years of Excellence"],
    ["50+", "Signature Dishes"],
    ["5k+", "Happy Guests"],
  ];

  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#020918] via-[#060e24] to-[#020918]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(37,99,235,0.18),transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
              Welcome to <br />
              <span style={{ color: BLUE_LIGHT }}>Our</span> <br />
              Restaurant
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              An extraordinary culinary journey crafted with passion, elegance, and premium taste.
            </p>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => setActivePage("order")}
                className="px-8 py-4 rounded-lg font-medium tracking-wide transition-all text-white hover:opacity-90"
                style={{ backgroundColor: BLUE }}
              >
                Order Online
              </button>

              <button
                onClick={() => setActivePage("reservation")}
                className="px-8 py-4 border rounded-lg font-medium tracking-wide transition-all text-blue-400 hover:bg-blue-600/10"
                style={{ borderColor: BLUE_LIGHT }}
              >
                Book a Table
              </button>

            </div>

            {/* STATS */}
            <div className="flex gap-10 mt-12 pt-8 border-t border-blue-500/20">
              {stats.map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-2xl font-['Playfair_Display',serif] font-bold"
                    style={{ color: BLUE_LIGHT }}
                  >
                    {num}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96">
              <img
                src="Hotel.jpg"
                alt="hotel img"
                className="w-full h-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* POPULAR DISHES */}
      <section className="py-20 bg-[#050d1f]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="font-['Playfair_Display',serif] text-4xl font-bold text-white mb-12">
            Our Popular <span style={{ color: BLUE_LIGHT }}>Dishes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popular.map((dish) => (
              <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
            ))}
          </div>

        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="py-20 bg-[#020918]">
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="border rounded-2xl p-10 md:p-16 text-center"
            style={{ borderColor: BLUE + "60", background: "rgba(37,99,235,0.05)" }}
          >

            <div className="flex justify-center mb-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: BLUE + "20" }}
              >
                <MdTableRestaurant className="text-3xl text-blue-400" />
              </div>
            </div>

            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4 text-white">
              Reserve Your <span style={{ color: BLUE_LIGHT }}>Table</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
              Join us for an unforgettable dining experience. Reserve your spot today.
            </p>

            <button
              onClick={() => setActivePage("reservation")}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-medium transition-all text-white hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              <BsCalendarCheck className="text-lg" />
              Book a Table Now
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}