import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../api/authApi";

function SignupPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const data = await signupUser(username, password);

      alert(data.message);

      navigate("/login");
    } catch (err) {
      console.error(err);

      if (err.response) {
        setError(err.response.data.detail || "Signup failed");
      } else {
        setError("Unable to connect to server");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-12">

      <div className="w-full max-w-6xl">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Side */}

          <div className="w-full md:w-1/2 bg-green-700 rounded-3xl shadow-xl text-white flex flex-col justify-center items-center p-10 md:p-14 text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join HimShakti
            </h2>

            <p className="text-lg leading-relaxed max-w-md mb-10">
              Become a part of the HimShakti family and discover authentic,
              healthy, and traditionally crafted food products from Uttarakhand.
            </p>

            <Link
              to="/login"
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
            >
              SIGN IN
            </Link>

          </div>

          {/* Right Side */}

          <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 md:p-14">

            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
              Create Account
            </h1>

            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
              Create your HimShakti account
            </p>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
                {error}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-6">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Full Name"
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Username
                </label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose Username"
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Confirm Password
                </label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg transition"
              >
                {loading ? "Creating Account..." : "CREATE ACCOUNT"}
              </button>

            </form>

            <p className="text-center mt-8 text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-700 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SignupPage;