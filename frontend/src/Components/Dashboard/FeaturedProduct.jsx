import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ShoppingCart } from "lucide-react";

import { getProducts, searchProducts } from "../../api/productApi";
import { createOrder } from "../../api/orderApi";

// Local Images
import mandua from "../../assets/image/mandua.jpg";
import honey from "../../assets/image/honey.jpg";
import redrice from "../../assets/image/redrice.jpg";
import rajma from "../../assets/image/rajma.jpg";
import jhangora from "../../assets/image/jhangora.jpg";
import amla from "../../assets/image/amla.jpg";

function FeaturedProducts({ search }) {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
  if (search.trim() === "") {
    loadProducts();
  } else {
    handleSearch();
  }
}, [search]);

  const loadProducts = async () => {
  try {
    const data = await getProducts();

    console.log("Products from backend:", data);
    console.log("Product Names:", data.map(product => product.name));

    setProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const handleSearch = async () => {
  try {
    const data = await searchProducts(search);
    setProducts(data);
  } catch (error) {
    console.log(error);
  }
};

const handleBuyNow = async (product) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      return;
    }

    await createOrder(user.id, product.id, 1);

    alert("Order placed successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to place order.");
  }
};

  const getImage = (name) => {
  switch (name.toLowerCase()) {
    case "mandua flour":
      return mandua;

    case "jhangora":
      return jhangora;

    case "red rice":
      return redrice;

    case "pahadi rajma":
      return rajma;

    case "himalayan honey":
      return honey;

    case "natural amla candy":
    return amla;

    default:
      return mandua;
  }
};

  return (
    <section className="pt-8 w-full">

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mb-8">

  <div>
    <h2 className="text-3xl font-bold text-gray-800">
      Featured Products
    </h2>

    <p className="text-gray-500 mt-2">
      Products loaded from backend
    </p>
  </div>

  

</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            <img
              src={getImage(product.name)}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">

              <span className="text-green-600 text-sm font-semibold">
                {product.category}
              </span>

              <h3 className="text-xl font-bold mt-2">
                {product.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {product.description}
              </p>

              <p className="text-3xl text-green-700 font-bold mt-4">
                ₹{product.price}
              </p>

              <div className="flex gap-3 mt-6">

                <button onClick={() => handleBuyNow(product)}
                  className="flex-1 bg-green-600 text-white rounded-xl py-3 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />

                  Buy Now

                </button>

                <button
  onClick={() => navigate(`/product/${product.id}`)}
  className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-green-600 hover:text-white transition"
>

                   <Eye size={20} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;