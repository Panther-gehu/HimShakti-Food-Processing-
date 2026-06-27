import Sidebar from "../Components/Dashboard/Sidebar";
import Topbar from "../Components/Dashboard/Topbar";
import Hero from "../Components/Dashboard/Hero";
import Stats from "../Components/Dashboard/Stats";
import FeaturedProduct from "../Components/Dashboard/FeaturedProduct";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Navigation */}
        <Topbar />

        {/* Dashboard Content */}
       <main className="flex-1 overflow-y-auto bg-slate-100 px-10 py-10 space-y-12">

  <Hero />

  <Stats />
    <div className="h-16"></div>
  <FeaturedProduct />

</main>

      </div>

    </div>
  );
}

export default DashboardPage;