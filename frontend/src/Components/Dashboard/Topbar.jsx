import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10">

      {/* Search */}
<div className="flex items-center bg-gray-100 rounded-xl px-4 h-12 w-[420px]">

  <Search
    size={20}
    className="text-gray-500 flex-shrink-0"
  />

  <input
    type="text"
    placeholder="Search products..."
    className="ml-3 flex-1 bg-transparent outline-none border-none text-gray-700 placeholder-gray-400"
  />

</div>
      {/* Right Side */}
      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell
            size={24}
            className="text-gray-600"
          />

          <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            3
          </span>

        </button>

        <div className="h-12 w-px bg-gray-300"></div>

        <div className="flex items-center gap-4">

          {/* Profile Circle */}
          <div className="w-11 h-11 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
            PB
          </div>

          <div>

            <h4 className="font-semibold text-gray-800">
              Pranav Bisht
            </h4>

            <p className="text-sm text-gray-500">
              Customer
            </p>

          </div>

          <ChevronDown
            size={20}
            className="text-gray-500"
          />

        </div>

      </div>

    </header>
  );
}

export default Topbar;