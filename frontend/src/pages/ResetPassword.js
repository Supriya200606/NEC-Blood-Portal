import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirm) return setError("All fields are required");
    if (password !== confirm) return setError("Passwords do not match");

    setError("");
    setLoading(true);

    try {
      const API = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";
      const res = await fetch(`${API}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password updated successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.error);
      }

    } catch {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-5">Reset Password</h1>

        {error && <p className="bg-red-100 text-red-600 p-2 rounded mb-3 text-center">{error}</p>}
        {message && <p className="bg-green-100 text-green-700 p-2 rounded mb-3 text-center">{message}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold">New Password</label>
          <input
            type="password"
            className="border w-full p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="block font-semibold">Confirm Password</label>
          <input
            type="password"
            className="border w-full p-2 rounded mb-4"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <button
            className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
            disabled={loading}
          >
            {loading ? "Updating..." : "Reset Password"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default ResetPassword;
