import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../apis/endpoint";

const RegisterPage = () => {
  const [fullname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [DOB, setDOB] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [userData, setUserData] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 👈 added for toggle
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !contact || !password || !bloodType || !DOB) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      setError("Please enter a valid 10-digit contact number.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      return;
    }

    const strongPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const hexPwd = /^[a-fA-F0-9]{8,}$/;
    if (!strongPwd.test(password) && !hexPwd.test(password)) {
      setError(
        "Password must be at least 8 characters and either include uppercase, lowercase, number and symbol, or be a hex string (0-9, a-f)."
      );
      return;
    }

    setError("");

    try {
      const data = await register(fullname, contact, DOB, bloodType, email, password);
      console.log(data);

      if (data) {
        setUserData(data);
        navigate("/login");

        // clear fields only after success
        setFname("");
        setContact("");
        setEmail("");
        setPassword("");
        setBloodType("");
        setDOB("");
      } else {
        setResponse("Registration failed.");
      }
    } catch (error) {
      console.error(error);
      setResponse(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          <h1 className="text-3xl font-bold text-red-800 border-b-2 border-black pb-2">
            Registration
          </h1>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1">Blood Group</label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
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

          <div>
            <label className="block mb-1">DOB</label>
            <input
              type="date"
              value={DOB}
              onChange={(e) => setDOB(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Contact Number</label>
            <input
              type="text"
              placeholder="Enter your contact number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* ✅ Password with Show/Hide toggle */}
          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-sm text-gray-600 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-full font-bold cursor-pointer"
          >
            Register
          </button>
        </form>

        {response && (
          <div
            className={`mt-6 p-4 rounded-md text-sm font-medium ${
              response.includes("successful")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {response}
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-lg">Already have an account?</p>
          <Link to="/" className="text-blue-500 underline">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
