import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  if (!token) return <p className="text-center p-10 text-red-600">❌ Invalid or missing token</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("⚠️ Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || "http://127.0.0.1:5000"}/api/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset successfully! Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.error || "❌ Something went wrong");
      }
    } catch (err) {
      setMessage("❌ Network error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-red-100 via-white to-red-200 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-red-600 mb-4">
          Reset Your Password
        </h2>

        {message && <p className="text-center mb-4 text-red-500">{message}</p>}

        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-red-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded-lg mb-4 focus:ring-2 focus:ring-red-400"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button className="bg-red-600 w-full text-white py-3 rounded-lg hover:bg-red-700 transition">
          Reset Password
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full text-center mt-3 text-red-700 hover:underline"
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}
