import mandua from "../assets/image/mandua.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import amla from "../assets/image/amla.jpg";
import honey from "../assets/image/honey.jpg";

function ProductSection() {
  return (
    <section id="products" className="py-24 px-6 pb-32 bg-gray-100 text-center">
      <h2 className="text-5xl font-bold text-green-700 mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto mb-20">

        {/* Mandua */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={mandua} alt="Mandua Flour" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Mandua Flour</h3>
            <p className="mb-1">500g</p>
            <p className="font-semibold mb-4">₹120</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Mandua%20Flour."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Jhangora */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={jhangora} alt="Jhangora" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Jhangora</h3>
            <p className="mb-1">500g</p>
            <p className="font-semibold mb-4">₹150</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Jhangora."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Red Rice */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={redrice} alt="Red Rice" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Red Rice</h3>
            <p className="mb-1">1kg</p>
            <p className="font-semibold mb-4">₹220</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Red%20Rice."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Rajma */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={rajma} alt="Pahadi Rajma" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Pahadi Rajma</h3>
            <p className="mb-1">500g</p>
            <p className="font-semibold mb-4">₹180</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Pahadi%20Rajma."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Amla */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={amla} alt="Natural Amla Candy" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Natural Amla Candy</h3>
            <p className="mb-1">250g</p>
            <p className="font-semibold mb-4">₹120</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Natural%20Amla%20Candy."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

        {/* Honey */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300">
          <img src={honey} alt="Himalayan Honey" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-green-700 mb-2">Himalayan Honey</h3>
            <p className="mb-1">500g</p>
            <p className="font-semibold mb-4">₹350</p>

            <a
              href="https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Himalayan%20Honey."
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition">
                Inquire on WhatsApp
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ProductSection;