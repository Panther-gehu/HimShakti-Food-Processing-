import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Bell,
  Leaf,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Manage Products",
      path: "/manage-products",
      icon: <ShoppingBag size={20} />,
    },
    {
      name: "My Orders",
      path: "/orders",
      icon: <Package size={20} />,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: <ShoppingCart size={20} />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={20} />,
    },
    {
      name: "Wishlist",
      path: "/wishlist",
      icon: <Heart size={20} />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <Bell size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];
  const handleLogout = () => {
  localStorage.removeItem("user");

  alert("Logged out successfully");

  navigate("/login");
};

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-sm">

      {/* Logo */}

      <div className="h-24 flex items-center px-8 border-b">

        <div className="h-12 w-12 rounded-xl bg-green-600 flex items-center justify-center">

          <Leaf className="text-white" size={24} />

        </div>

        <div className="ml-4">

          <h2 className="text-2xl font-bold text-gray-800">
            HimShakti
          </h2>

          <p className="text-sm text-gray-500">
            Food Processing
          </p>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 py-8 px-4">

        {menus.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-2 transition-all duration-300
            ${
              location.pathname === item.path
                ? "bg-green-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-green-50 hover:text-green-700"
            }`}
          >

            {item.icon}

            <span className="font-medium">
              {item.name}
            </span>

          </Link>

        ))}

      </div>

      {/* Bottom */}

      <div className="p-4 border-t">

        <button  onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 transition"
          >
           <LogOut size={20} />
              Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;