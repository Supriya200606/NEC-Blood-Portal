import React, { useState } from "react";
import rbc from '../assets/rbc.jpg';
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from '../apis/endpoint';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [response, setResponse] = useState('');
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false); // 👁️ Toggle state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const validateForm = () => {
    const { email, password } = formData;
    
    // Trim whitespace for validation
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    
    if (!trimmedEmail || !trimmedPassword) {
      setError("Email and password are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (trimmedPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    // Clear previous messages and set loading
    setError('');
    setResponse('');
    setIsLoading(true);
    
    try {
      const response = await apiLogin(formData.email.trim(), formData.password.trim());
      if (response.token) {
        login(response.user, response.token);
        setResponse('Login Successfully');
        setTimeout(() => {
          navigate('/home');
        }, 1000); // Small delay to show success message
      }
    } catch (error) {
      // Extract meaningful error message
      let errorMessage = error.message;
      if (errorMessage.includes('User not found')) {
        setError('Email not found. Please check your email or register first.');
      } else if (errorMessage.includes('Invalid password')) {
        setError('Incorrect password. Please try again.');
      } else if (errorMessage.includes('Network error')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError(errorMessage || 'Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="font-serif font-bold bg-slate-200 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between items-center w-full p-6">
        <div className="flex-1 items-center justify-center p-6 text-center">
          <h1 className="mt-10 font-bold text-6xl bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 text-transparent bg-clip-text">
            NEC Blood Portal
          </h1>
          <p className="text-3xl font-mono text-blue-400">"Saving Lives in One Click"</p>
        </div>
        <div className="m-4 md:m-20">
          <button
            className="cursor-pointer border-b-2 bg-slate-400 text-red-600 font-bold border-black hover:bg-red-600 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-full"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 gap-10 rounded-full">
        <div className="mb-6 md:mb-0">
          <img className="shadow-red-700 shadow-2xl min-h-40 border-slate-500 rounded-full" src={rbc} alt="bgimg" />
        </div>

        <div className="bg-white rounded-3xl shadow-lg w-full md:w-2/5 p-6 md:p-16">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold font-serif text-center text-red-800 mb-10 border-b-2 border-black w-1/2 rounded-2xl mx-auto">
              Login
            </h1>
            <div className="mb-4">
              <label className="block mb-2">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            {/* 👁️ Password field with show/hide feature */}
            <div className="mb-4 relative">
              <label className="block mb-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded pr-10"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 cursor-pointer text-gray-600"
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>

            {/* Error Message Display */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            {/* Success Message Display */}
            {response && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                {response}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`font-bold items-center text-white bg-primary w-full md:w-1/4 py-2 rounded-3xl mb-4 ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-500 hover:bg-red-600 hover:text-white'
              }`}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>



            <div className="flex items-center justify-center">
              New Here?
              <span
                onClick={() => navigate("/register")}
                className="cursor-pointer border-b-2 font-thin border-black ml-1"
              >
                Register
              </span>
            </div>
          </form>
        </div>
      </div>

      <p className="text-center mt-6">&copy; 2025 NEC Blood Portal. Saving Lives Digitally.</p>
    </div>
  );
};

export default LoginPage;
