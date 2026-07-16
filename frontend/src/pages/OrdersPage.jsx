import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Package } from "lucide-react";

import { getOrders } from "../api/orderApi";

// Images
import mandua from "../assets/image/mandua.jpg";
import honey from "../assets/image/honey.jpg";
import redrice from "../assets/image/redrice.jpg";
import rajma from "../assets/image/rajma.jpg";
import jhangora from "../assets/image/jhangora.jpg";
import amla from "../assets/image/amla.jpg";

function OrdersPage() {

    const navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    // ===========================
    // Load Orders
    // ===========================
    const loadOrders = async () => {

        try {

            const data = await getOrders();

            setOrders(data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadOrders();

    }, []);

    // ===========================
    // Product Images
    // ===========================
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

    // ===========================
    // Total Amount
    // ===========================
    const totalAmount = orders.reduce(

        (sum, item) => sum + item.price * item.quantity,

        0

    );

    return (

        <div className="min-h-screen bg-slate-100">

            {/* Header */}

            <div className="bg-green-50 border-b border-green-200">

                <div className="max-w-7xl mx-auto px-8 py-6">

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
                    >
                        <ArrowLeft size={22} />

                        Back to Dashboard

                    </button>

                    <div className="flex items-center gap-5 mt-5">

                        <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">

                            <Package
                                size={40}
                                className="text-green-700"
                            />

                        </div>

                        <div>

                            <h1 className="text-5xl font-bold">

                                My Orders

                            </h1>

                            <p className="text-gray-600 mt-2 text-lg">

                                Track all your purchased products.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Orders */}

            <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">

                {orders.map((item) => (

                    <div
                        key={item.id}
                        className="bg-white rounded-3xl shadow-lg p-8 flex justify-between items-center"
                    >

                        <div className="flex items-center gap-8">

                            <img
                                src={getImage(item.product_name)}
                                alt={item.product_name}
                                className="w-40 h-40 rounded-3xl object-cover"
                            />

                            <div>

                                <h2 className="text-4xl font-bold">

                                    {item.product_name}

                                </h2>

                                <p className="text-green-700 text-3xl font-bold mt-4">

                                    ₹{item.price}

                                </p>

                                <p className="text-gray-500 mt-3 text-lg">

                                    Ordered on{" "}
                                    {new Date(item.created_at).toLocaleDateString()}

                                </p>

                            </div>

                        </div>

                        <div className="text-right">

                            <p className="text-xl">

                                Quantity

                            </p>

                            <h2 className="text-4xl font-bold">

                                {item.quantity}

                            </h2>

                            <p className="text-gray-500 mt-5">

                                Total

                            </p>

                            <h2 className="text-4xl text-green-700 font-bold">

                                ₹{item.price * item.quantity}

                            </h2>

                            <button
                                onClick={() =>
                                    navigate(`/product/${item.product_id}`)
                                }
                                className="mt-8 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
                            >

                                <Eye size={20} />

                                View Product

                            </button>

                        </div>

                    </div>

                ))}

                {/* Summary */}

                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-4xl font-bold">

                        Order Summary

                    </h2>

                    <p className="mt-5 text-xl">

                        Total Orders : {orders.length}

                    </p>

                    <h1 className="text-6xl text-green-700 font-bold mt-6">

                        ₹{totalAmount}

                    </h1>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mt-8 w-full border-2 border-green-600 text-green-700 py-4 rounded-2xl text-xl font-bold hover:bg-green-50"
                    >

                        Continue Shopping

                    </button>

                </div>

            </div>

        </div>

    );

}

export default OrdersPage;