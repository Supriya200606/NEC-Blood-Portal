import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/api/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Password reset successfully. Redirecting...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.error || "❌ Something went wrong");
      }
    } catch (err) {
      setMessage("❌ Server error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-red-600">Reset Password</h2>

        {message && <p className="text-center mb-4 text-red-500">{message}</p>}

        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 rounded mb-4"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button className="bg-red-600 w-full text-white py-2 rounded hover:bg-red-700 transition">
          Reset Password
        </button>
      </form>
    </div>
  );
}
