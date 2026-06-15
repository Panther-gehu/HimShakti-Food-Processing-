import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-md">

      <div className="max-w-7xl mx-auto px-8 md:px-12 py-4 flex justify-between items-center">

        <h2 className="text-4xl font-bold">
          HimShakti
        </h2>

        <ul className="flex gap-12 text-xl font-medium">

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

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;