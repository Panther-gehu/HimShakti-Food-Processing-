import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../../api/orderApi";

function RecentOrders() {
  const [orders, setOrders] = useState([]);

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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (!confirmDelete) return;

    try {
      await deleteOrder(id);
      alert("Order deleted successfully!");
      loadOrders();
    } catch (error) {
      console.log(error);
      alert("Failed to delete order.");
    }
  };

  return (
    <section className="mt-14">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Recent Orders
      </h2>

      <div className="bg-white rounded-3xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-green-600 text-white">

            <tr>

              <th className="py-4">Order ID</th>
                <th>Product</th>

                <th>Price</th>

                <th>Quantity</th>
              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {orders.length === 0 ? (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500"
                >
                  No Orders Found
                </td>

              </tr>

            ) : (

              orders.map((order) => (

                <tr
  key={order.id}
  className="border-b hover:bg-gray-50"
>

  {/* Order ID */}
  <td className="text-center py-4">
    {order.id}
  </td>

  {/* Product Name */}
  <td className="text-center font-medium">
    {order.product_name}
  </td>

  {/* Price */}
  <td className="text-center text-green-700 font-semibold">
    ₹{order.price}
  </td>

  {/* Quantity */}
  <td className="text-center">
    {order.quantity}
  </td>

  {/* Date */}
  <td className="text-center">
    {new Date(order.created_at).toLocaleDateString()}
  </td>

  {/* Delete Button */}
  <td className="text-center">
    <button
      onClick={() => handleDelete(order.id)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  </td>

</tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default RecentOrders;