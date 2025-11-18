import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../apis/endpoint";
import { useAuth } from "../context/AuthContext";

const UpdatePW = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!password.trim() || !confirmPassword.trim()) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await updatePassword({ password });
      alert("✅ Password updated successfully! Please login again.");
      logout();
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to update password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b9132a] via-[#d9445d] to-[#f8b4c8] px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full flex">

        {/* LEFT SECTION */}
        <div className="hidden md:flex w-1/2 bg-[#ffe4e9] justify-center items-center flex-col p-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#b9132a] tracking-wide">
            BLOOD DONATION
          </h2>
          <p className="text-gray-600 mt-2">Save Lives • Donate Blood • Spread Hope</p>
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/10093/10093346.png"
            alt="Blood Donation"
            className="w-44 mt-6"
          /> */}
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
            Update Password
          </h2>

          <p className="text-center text-gray-600 mb-4 font-medium">
            <b>Email:</b> {user?.email}
          </p>

          {error && (
            <p className="bg-red-100 border border-red-400 text-red-700 p-2 rounded mb-4 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-semibold text-gray-700">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Enter new password"
            />

            <label className="block mb-2 font-semibold text-gray-700">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border p-3 rounded-lg mb-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Confirm new password"
            />

            <p
              onClick={() => setShowPassword(!showPassword)}
              className="text-right text-sm text-red-600 cursor-pointer hover:underline mb-4"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </p>

            <button
              type="submit"
              className="w-full bg-[#b9132a] hover:bg-[#8a0f20] text-white py-3 rounded-lg font-semibold transition"
            >
              Update Password
            </button>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="w-full text-center mt-4 text-red-700 hover:underline"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePW;
