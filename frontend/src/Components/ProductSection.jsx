import mandua from "../assets/image/mandua.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import amla from "../assets/image/amla.jpg";
import honey from "../assets/image/honey.jpg";

function ProductSection() {
  const products = [
    {
      image: mandua,
      name: "Mandua Flour",
      weight: "500g",
      price: "₹120",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Mandua%20Flour.",
    },
    {
      image: jhangora,
      name: "Jhangora",
      weight: "500g",
      price: "₹150",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Jhangora.",
    },
    {
      image: redrice,
      name: "Red Rice",
      weight: "1kg",
      price: "₹220",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Red%20Rice.",
    },
    {
      image: rajma,
      name: "Pahadi Rajma",
      weight: "500g",
      price: "₹180",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Pahadi%20Rajma.",
    },
    {
      image: amla,
      name: "Natural Amla Candy",
      weight: "250g",
      price: "₹120",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Natural%20Amla%20Candy.",
    },
    {
      image: honey,
      name: "Himalayan Honey",
      weight: "500g",
      price: "₹350",
      link: "https://wa.me/917355779801?text=Hello%20HimShakti,%20I%20am%20interested%20in%20Himalayan%20Honey.",
    },
  ];

  return (
    <section
  id="products"
  className="py-24 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
>
      <div className="h-32"></div>

<h2 className="text-5xl font-bold text-center text-green-700 dark:text-green-400 mb-16">
  Our Products
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full max-w-[280px] bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {product.weight}
                </p>

                <p className="font-semibold text-lg my-3 dark:text-white">
                  {product.price}
                </p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="bg-green-700 text-white px-5 py-2 rounded-xl hover:bg-green-800 transition">
                    Inquire on WhatsApp
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

     
    </section>
  );
}

export default ProductSection;
