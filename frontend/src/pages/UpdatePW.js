import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function UpdatePW() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("⚠ Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || "http://127.0.0.1:5000"}/api/reset-password/${token}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Password updated! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.error || "❌ Something went wrong");
      }
    } catch {
      setMessage("❌ Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-2xl rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-red-700 mb-3">
          Reset Password
        </h2>

        {message && <p className="text-center text-red-600 mb-3">{message}</p>}

        <input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          className="w-full p-3 border rounded-lg mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="w-full p-3 border rounded-lg mb-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <p
          className="text-sm text-red-600 cursor-pointer mb-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </p>

        <button className="bg-red-600 text-white py-2 rounded-lg w-full hover:bg-red-700">
          Reset Password
        </button>
      </form>
    </div>
  );
}
