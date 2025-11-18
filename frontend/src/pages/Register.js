import React, { useState } from "react";
import { Eye, EyeOff, ArrowLeftCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../apis/endpoint";

const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [DOB, setDOB] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !contact || !password || !bloodType || !DOB) {
      setError("⚠️ All fields are required.");
      return;
    }
    if (!/^\d{10}$/.test(contact)) {
      setError("⚠️ Please enter a valid 10-digit contact number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("⚠️ Invalid email format.");
      return;
    }
    const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPwd.test(password)) {
      setError(
        "⚠️ Password must include uppercase, lowercase, number and symbol."
      );
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const data = await register(fullname, contact, DOB, bloodType, email, password);
      if (data) {
        setResponse("✅ Registration successful!");
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      console.error(err);
      setResponse("❌ Registration failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left section - Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10 bg-white shadow-lg relative">
        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-1 bg-white border border-gray-300 px-3 py-2 rounded-full text-teal-600 font-semibold shadow hover:bg-teal-500 hover:text-white transition"
        >
          <ArrowLeftCircle size={18} /> Back
        </button>

        <h1 className="text-4xl font-bold text-teal-700 mb-1">Blood</h1>
        <p className="text-gray-500 mb-10">Create a New Account</p>

        <form onSubmit={handleRegister} className="w-full max-w-sm space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Blood Group
            </label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
            >
              <option value="">Select your blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter 10-digit number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-teal-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-md pr-10 focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Create a password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>

          {/* Error or Success */}
          {error && (
            <p className="bg-red-100 border border-red-300 text-red-700 p-2 rounded text-sm">
              {error}
            </p>
          )}
          {response && (
            <p className="bg-green-100 border border-green-300 text-green-700 p-2 rounded text-sm">
              {response}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-md text-white font-semibold ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700 transition"
            }`}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <p className="text-center text-gray-600 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-semibold hover:underline"
            >
              Login Here
            </Link>
          </p>
        </form>

        <p className="text-xs text-gray-500 mt-8">
          © 2025 Hospital Management Service. All rights reserved.
        </p>
      </div>

      {/* Right Section - Light Teal Info */}
      <div className="hidden md:flex w-1/2 bg-[#e6f9f9] flex-col justify-center items-center relative">
        <div className="bg-white rounded-full shadow-lg w-64 h-64 flex flex-col justify-center items-center text-center border border-teal-100">
          <h2 className="text-xl font-semibold text-teal-700">HOSPITAL</h2>
          <p className="text-gray-600 text-sm mt-2">
            Register & Join Us
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-teal-500">
            <span>💉</span>
            <span>🏥</span>
            <span>🧑‍⚕️</span>
            <span>💊</span>
            <span>🧬</span>
            <span>🚑</span>
          </div>
        </div>

        <h1 className="absolute bottom-6 text-5xl font-bold text-teal-500 opacity-10 tracking-wide">
          REGISTER
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
