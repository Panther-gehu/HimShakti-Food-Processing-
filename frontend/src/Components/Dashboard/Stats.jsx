import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  Bot,
  ShieldCheck,
} from "lucide-react";

import { getDashboardStats } from "../../api/dashboardApi";
function Stats() {
  const [stats, setStats] = useState({
  products: 0,
  orders: 0,
  cart: 0,
  users: 0,
});
  useEffect(() => {
  const fetchStats = async () => {
    try {
      const data = await getDashboardStats();
      setStats(data);
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
    }
  };

  fetchStats();
}, []);

  const cards = [
  {
    title: "Products",
    value: stats.products,
    icon: <Package size={30} />,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Orders",
    value: stats.orders,
    icon: <ShoppingCart size={30} />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Cart Items",
    value: stats.cart,
    icon: <ShoppingCart size={30} />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Users",
    value: stats.users,
    icon: <ShieldCheck size={30} />,
    color: "bg-yellow-100 text-yellow-700",
  },
];

  return (
    <section className="w-full pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">{item.title}</p>
                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
