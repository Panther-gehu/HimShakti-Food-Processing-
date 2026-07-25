import Sidebar from "../Components/Dashboard/Sidebar";
import Topbar from "../Components/Dashboard/Topbar";
import Hero from "../Components/Dashboard/Hero";
import Stats from "../Components/Dashboard/Stats";
import FeaturedProduct from "../Components/Dashboard/FeaturedProduct";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import RecentOrders from "../Components/Dashboard/RecentOrders";
function DashboardPage() {
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Desktop Sidebar */}
<div className="hidden md:block">
  <Sidebar />
</div>

{/* Mobile Sidebar */}
{showSidebar && (
  <div className="fixed inset-0 z-50 flex">
    <div className="w-64 bg-white shadow-xl">
      <Sidebar />
    </div>

    <div
      className="flex-1 bg-black/50"
      onClick={() => setShowSidebar(false)}
    ></div>
  </div>
)}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Mobile Menu Button */}
<div className="md:hidden p-4 bg-white shadow">
  <button onClick={() => setShowSidebar(true)}>
    <Menu size={28} />
  </button>
</div>

        {/* Top Navigation */}
        <Topbar
      search={search}
      setSearch={setSearch}
/>

        {/* Dashboard Content */}
       <main className="flex-1 overflow-y-auto bg-slate-100 px-10 py-10 space-y-12">

  <Hero />

  <Stats />
    <div className="h-16"></div>
  <FeaturedProduct search={search} />

 

<RecentOrders />

</main>

      </div>

    </div>
  );
}

export default DashboardPage;
