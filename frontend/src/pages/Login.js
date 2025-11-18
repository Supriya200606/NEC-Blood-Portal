import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../apis/endpoint";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiLogin(formData.email, formData.password);

      if (response.token) {
        login(response.user, response.token);

        // ✅ Show success popup
        setToastMessage("✅ Login Successful!");

        // Redirect after short delay
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      }
    } catch {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">

      {toastMessage && <Toast message={toastMessage} />}

      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Left Section */}
        <div className="hidden md:flex w-1/2 bg-red-100 flex-col justify-center items-center py-20">
          <h2 className="text-3xl font-bold text-red-700">NEC BLOOD PORTAL</h2>
          <p className="text-gray-600 mt-2">Save Lives With One Donation</p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Welcome Back</h2>

          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg bg-red-50 mb-4 focus:ring-2 focus:ring-red-400 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-lg bg-red-50 pr-12 focus:ring-2 focus:ring-red-400 outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>

            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

            <button className="w-full p-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition">
              Login
            </button>
          </form>

          <p
            onClick={() => navigate("/forgot-password")}
            className="text-red-600 text-sm mt-2 cursor-pointer hover:underline"
          >
            Forgot Password?
          </p>

          <p className="text-center mt-4 text-gray-600">
            New here?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-red-600 font-bold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
