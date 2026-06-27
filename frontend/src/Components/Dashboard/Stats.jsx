import {
  Package,
  ShoppingCart,
  Heart,
  BadgePercent,
} from "lucide-react";

function Stats() {
  const stats = [
    {
      title: "Products",
      value: "120+",
      icon: <Package size={30} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Orders",
      value: "25",
      icon: <ShoppingCart size={30} />,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Wishlist",
      value: "12",
      icon: <Heart size={30} />,
      color: "bg-pink-100 text-pink-700",
    },
    {
      title: "Offers",
      value: "8",
      icon: <BadgePercent size={30} />,
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <section className="w-full pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">{item.title}</p>
                <h2 className="text-4xl font-bold mt-2">{item.value}</h2>
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