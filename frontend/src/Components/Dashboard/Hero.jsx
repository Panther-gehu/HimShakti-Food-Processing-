import { useEffect, useState } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
function Hero() {

  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUsername(user.username);
    }
  }, []);

  return (
    <section
className="relative min-h-[420px] rounded-3xl overflow-hidden shadow-xl"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(8,30,20,0.88) 20%, rgba(8,30,20,0.45) 60%, rgba(8,30,20,0.15)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <div className="relative z-10 flex items-center justify-between h-full px-16 py-14">
        {/* Left Side */}

        <div className="max-w-xl">

          <span className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-md border border-green-400/30 text-green-200 px-5 py-2 rounded-full text-sm font-semibold">
            🌿 Organic Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white leading-tight">
            Welcome Back,
            <br />

            <span className="text-green-300">
              {username ? `${username} 👋` : "Guest 👋"}
            </span>

          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-8">
            Explore authentic food products sourced directly
            from the beautiful hills of Uttarakhand.
            Healthy, organic and traditionally crafted.
          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/products"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
            >
              <ShoppingBag size={20} />

              Browse Products

              <ArrowRight size={18} />

            </Link>

            <button className="px-7 py-4 rounded-xl border-2 border-white text-white hover:bg-white hover:text-green-700 transition-all duration-300 font-semibold">
              My Orders
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex">

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">

            <h3 className="text-white text-xl font-bold mb-6">
              Today's Highlights
            </h3>

            <div className="space-y-4">

              <div className="flex justify-between gap-10 text-white">
                <span>🌾 Organic Products</span>
                <span className="font-bold">120+</span>
              </div>

              <div className="flex justify-between gap-10 text-white">
                <span>🛒 Orders Delivered</span>
                <span className="font-bold">560+</span>
              </div>

              <div className="flex justify-between gap-10 text-white">
                <span>⭐ Customer Rating</span>
                <span className="font-bold">4.9/5</span>
              </div>

              <div className="flex justify-between gap-10 text-white">
                <span>🚚 Fast Delivery</span>
                <span className="font-bold">Available</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
