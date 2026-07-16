import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-green-700 dark:bg-gray-900 text-white sticky top-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3">

        <h2 className="text-2xl md:text-4xl font-bold">
          HimShakti
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">

          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg font-medium">

  <li>
    <Link
      to="/"
      className="hover:text-green-200 transition"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/about"
      className="hover:text-green-200 transition"
    >
      About
    </Link>
  </li>

  <li>
    <Link
      to="/products"
      className="hover:text-green-200 transition"
    >
      Products
    </Link>
  </li>

  <li>
    <Link
      to="/contact"
      className="hover:text-green-200 transition"
    >
      Contact
    </Link>
  </li>

  <li>
    <Link
      to="/login"
      className="hover:text-green-200 transition"
    >
      Login
    </Link>
  </li>

  <li>
    <Link
      to="/signup"
      className="hover:text-green-200 transition"
    >
      Sign Up
    </Link>
  </li>

</ul>

          <button
  onClick={() => setDarkMode((prev) => !prev)}
  className="bg-white text-black px-3 py-2 text-sm md:text-base rounded-lg font-medium hover:bg-gray-200 transition"
>
  {darkMode ? "Switch to Light" : "Switch to Dark"}
</button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;