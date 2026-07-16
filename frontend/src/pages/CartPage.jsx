import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

import {
  getCart,
  deleteCartItem,
  updateCart,
  checkoutCart,
} from "../api/cartApi";

// Images
import mandua from "../assets/image/mandua.jpg";
import honey from "../assets/image/honey.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import amla from "../assets/image/amla.jpg";

function CartPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  // ============================
  // Load Cart
  // ============================

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  // ============================
// Remove Cart Item
// ============================
const handleRemove = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to remove this product from the cart?"
  );

  if (!confirmDelete) return;

  try {

    await deleteCartItem(id);

    alert("Product removed from cart.");

    loadCart();

  } catch (error) {

    console.log(error);

    alert("Unable to remove product.");

  }

};


// ============================
// Update Cart Quantity
// ============================
const handleQuantity = async (item, newQuantity) => {

  // If quantity becomes 0, remove the item
  if (newQuantity <= 0) {
    handleRemove(item.id);
    return;
  }

  try {

    await updateCart(
      item.id,
      item.user_id,
      item.product_id,
      newQuantity
    );

    loadCart();

  } catch (error) {

    console.log(error);

    alert("Unable to update quantity.");

  }

};

// ============================
// Checkout Cart
// ============================
const handleCheckout = async () => {

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    return;
  }

  const confirmOrder = window.confirm(
    "Proceed with checkout?"
  );

  if (!confirmOrder) return;

  try {

    const data = await checkoutCart(user.id);

    alert(data.message);

    loadCart();

    navigate("/orders");

  } catch (error) {

    console.log(error);

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Checkout failed.");
    }

  }

};



  useEffect(() => {
    loadCart();
  }, []);

  // ============================
  // Product Images
  // ============================

  const getImage = (name) => {
    switch (name.toLowerCase()) {
      case "organic mandua flour":
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

  // ============================
  // Grand Total
  // ============================

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="bg-green-50 border-b border-green-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-8 py-6">

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-green-700 hover:text-green-800 font-semibold"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </button>

          <div className="flex items-center gap-4 mt-6">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

              <ShoppingCart
                className="text-green-700"
                size={32}
              />

            </div>

            <div>

              <h1 className="text-4xl font-bold">
                My Cart
              </h1>

              <p className="text-gray-500 mt-1">
                Review your selected products before checkout.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="max-w-7xl mx-auto px-8 py-10">

        {cartItems.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-20 text-center">

            <ShoppingCart
              size={70}
              className="mx-auto text-green-600"
            />

            <h2 className="text-3xl font-bold mt-6">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add products to your cart and they will appear here.
            </p>

          </div>

        ) : (

          <div className="space-y-8">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col lg:flex-row justify-between gap-10"
              >

                {/* Left */}

                <div className="flex gap-8">

                  <img
                    src={getImage(item.product_name)}
                    alt={item.product_name}
                    className="w-40 h-40 rounded-3xl object-cover shadow"
                  />

                  <div className="flex flex-col justify-center">

                    <h2 className="text-3xl font-bold">

                      {item.product_name}

                    </h2>

                    <p className="text-2xl font-bold text-green-700 mt-4">

                      ₹{item.price}

                    </p>

                    <p className="text-gray-500 mt-3">

                      Added on{" "}
                      {new Date(
                        item.created_at
                      ).toLocaleDateString()}

                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="flex flex-col items-center justify-center gap-6">

                  <h3 className="text-lg font-semibold">

                    Quantity

                  </h3>

                  <div className="flex items-center gap-4">

                    <button  onClick={() => handleQuantity(item, item.quantity - 1)
                    }
                        className="w-11 h-11 rounded-xl border hover:bg-gray-100"
                    >
                    <Minus size={18} />
                </button>

                    <span className="text-2xl font-bold">

                      {item.quantity}

                    </span>

                    <button onClick={() =>handleQuantity(item, item.quantity + 1)
                }
                className="w-11 h-11 rounded-xl border hover:bg-gray-100"
            >
                    <Plus size={18} />
                </button>

                  </div>

                  <div className="text-center">

                    <p className="text-gray-500">

                      Subtotal

                    </p>

                    <h2 className="text-3xl font-bold text-green-700">

                      ₹{item.price * item.quantity}

                    </h2>

                  </div>

                  <button  onClick={() => handleRemove(item.id)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
                >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>

              </div>

            ))}

                      </div>

        )}

        {/* Order Summary */}

        {cartItems.length > 0 && (

          <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">

              {/* Left Side */}

              <div>

                <h2 className="text-3xl font-bold">

                  Order Summary

                </h2>

                <p className="text-gray-500 mt-2">

                  Total Items : {cartItems.length}

                </p>

              </div>

              {/* Right Side */}

              <div className="text-center">

                <p className="text-gray-500">

                  Grand Total

                </p>

                <h2 className="text-5xl font-bold text-green-700 mt-2">

                  ₹{grandTotal}

                </h2>

              </div>

            </div>

            {/* Buttons */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

              <button
                onClick={() => navigate("/dashboard")}
                className="border-2 border-green-600 text-green-700 rounded-2xl py-4 font-semibold hover:bg-green-50 transition"
              >
                Continue Shopping
              </button>

              <button onClick={handleCheckout}
                className="bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 text-lg font-bold transition"
                >
                Proceed to Checkout
                </button>

            </div>

          </div>

        )}

      </div>

    </div>

  );

}

export default CartPage;