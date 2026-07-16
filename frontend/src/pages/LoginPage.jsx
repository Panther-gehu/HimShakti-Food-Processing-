
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

function LoginPage() {
  const navigate = useNavigate();

  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  


  // ===========================================
// LOGIN USER
// ===========================================
const handleLogin = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {

    const data = await loginUser(username, password);

    console.log(data);

    // ===============================
    // Save JWT Token
    // ===============================
    localStorage.setItem(
      "token",
      data.access_token
    );

    // ===============================
    // Save Logged In User
    // ===============================
    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    alert(data.message);

    navigate("/dashboard");

  } catch (err) {

    console.error(err);

    if (err.response) {
      setError(
        err.response.data.detail ||
        "Invalid Username or Password"
      );
    } else {
      setError("Unable to connect to server.");
    }

  }

  setLoading(false);
};

const handleGoogleLogin = () => {
  window.location.href =
    "http://localhost:8000/api/auth/google/login";
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-6 py-12">

      <div className="w-full max-w-6xl">

        <div className="flex flex-col md:flex-row gap-8">

          {/* Login Form */}

          <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10 md:p-14">

            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-3">
              Login
            </h1>

            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
              Login to continue to HimShakti
            </p>

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-6">

  <div>
    <label className="block mb-2 font-medium">
      Username
    </label>

    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Enter Username"
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

  {/* Existing Login Button */}
  <button
    type="submit"
    disabled={loading}
    className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold text-lg"
  >
    {loading ? "Logging In..." : "LOGIN"}
  </button>

  <button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full mt-4 border-2 border-gray-300 py-4 rounded-xl font-semibold hover:bg-gray-100"
>
  Continue with Google
</button>

  

</form>

          </div>

          {/* Welcome Panel */}

          <div className="w-full md:w-1/2 bg-green-700 rounded-3xl shadow-xl text-white flex flex-col justify-center items-center p-10 md:p-14 text-center">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to HimShakti
            </h2>

            <p className="text-lg leading-relaxed max-w-md mb-10">
              Discover authentic food products from Uttarakhand.
              Create your account and explore healthy, natural,
              and traditionally crafted products.
            </p>

            <Link
              to="/signup"
              className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
            >
              CREATE ACCOUNT
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;