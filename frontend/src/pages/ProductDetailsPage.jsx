import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {  ShoppingCart,  ArrowLeft, Heart, Star,Truck,PackageCheck,  RotateCcw,} from "lucide-react";
import { getProductById } from "../api/productApi";
import { addToCart } from "../api/cartApi";
import { createOrder } from "../api/orderApi";

// Images
import mandua from "../assets/image/mandua.jpg";
import honey from "../assets/image/honey.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import amla from "../assets/image/amla.jpg";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

const [product, setProduct] = useState(null);
const [quantity, setQuantity] = useState(1);
  useEffect(() => {
  loadProduct();
}, [id]);

  const loadProduct = async () => {
    try {
      const data = await getProductById(id);
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ===============================
// Add Product to Cart
// ===============================
const handleAddToCart = async () => {

  try {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      return;
    }

    const data = await addToCart(
      user.id,
      product.id,
      quantity
    );

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Unable to add product to cart.");

  }

};


// ===============================
// Buy Product
// ===============================
const handleBuyNow = async () => {

  try {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      return;
    }

    const data = await createOrder(
      user.id,
      product.id,
      quantity
    );

    alert(data.message);

  } catch (error) {

    console.log(error);
    alert("Unable to place order.");

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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-6">

    <div className="max-w-7xl mx-auto">

      {/* Back Button */}

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-green-700 font-semibold hover:underline mb-8"
      >
        <ArrowLeft size={22} />
        Back to Dashboard
      </button>

      {/* Main Card */}

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="bg-gray-50 flex justify-center items-center p-10">

          <img
            src={getImage(product.name)}
            alt={product.name}
            className="w-full max-w-md rounded-3xl object-cover shadow-lg"
          />

        </div>

        {/* RIGHT SIDE */}

        <div className="p-10 flex flex-col">

          {/* Category */}

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full w-fit font-semibold">
            {product.category}
          </span>

          {/* Product Name */}

          <h1 className="text-5xl font-bold mt-5">
            {product.name}
          </h1>

          {/* Rating */}

          <div className="flex items-center gap-2 mt-5">

            <Star
              className="text-yellow-500 fill-yellow-500"
              size={20}
            />

            <span className="font-semibold text-lg">
              4.8
            </span>

            <span className="text-gray-500">
              (120 Reviews)
            </span>

          </div>

          {/* Price */}

          <h2 className="text-5xl font-bold text-green-700 mt-6">
            ₹{product.price}
          </h2>

          {/* Description */}

          <p className="text-gray-600 leading-8 text-lg mt-6">
            {product.description}
          </p>

          {/* Product Features */}

          <div className="space-y-5 mt-8">

            <div className="flex items-center gap-3 text-green-700">

              <PackageCheck size={22} />

              <span className="font-medium">
                In Stock
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Truck size={22} />

              <span>
                Free Delivery Across India
              </span>

            </div>

            <div className="flex items-center gap-3">

              <RotateCcw size={22} />

              <span>
                7 Days Easy Replacement
              </span>

            </div>

          </div>

          {/* Quantity */}

          <div className="mt-10">

            <h3 className="font-semibold text-lg mb-4">
              Quantity
            </h3>

            <div className="flex items-center gap-5">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
                className="w-12 h-12 border rounded-xl text-2xl hover:bg-gray-100"
              >
                -
              </button>

              <span className="text-2xl font-bold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="w-12 h-12 border rounded-xl text-2xl hover:bg-gray-100"
              >
                +
              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">

            <button
            className="border-2 border-green-600 text-green-700 rounded-xl h-14 flex justify-center items-center gap-2 hover:bg-green-50 transition"
            >
              <Heart size={20} />
              Wishlist
            </button>

            <button onClick={handleAddToCart}
              className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl h-14 flex justify-center items-center gap-2 transition"
            >
            <ShoppingCart size={20} />
                Add to Cart
                </button>

            </div>

            <button onClick={handleBuyNow}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white h-14 rounded-xl text-lg font-bold flex justify-center items-center gap-3 transition"
            >  
            <ShoppingCart size={22} />
             Buy Now
                </button>

        </div>

      </div>

    </div>

  </div>
);
  
}

export default ProductDetailsPage;