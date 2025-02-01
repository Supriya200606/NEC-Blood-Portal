import React, { useState } from "react";
import rbc from '../assets/rbc.jpg';
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from '../apis/endpoint';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: " ",
    password: " "
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [response, setResponse] = useState('');
  const { login } = useAuth();

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
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
    try {
      const response = await apiLogin(formData.email, formData.password);
      if (response.token) {
        login(response.user, response.token);
        setResponse('Login Successfully');
        navigate('/home');
      }
    } catch (error) {
      setError(error.message);
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
            HealthNet
          </h1>
          <p className="text-3xl font-mono text-blue-400">"Saving Lives in One Click"</p>
        </div>
        <div className="m-4 md:m-20">
          <button className="cursor-pointer border-b-2 text-red-600 font-bold border-black hover:bg-red-600 hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-full" onClick={() => navigate("/")}>
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
              <label className="block mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="font-bold items-center text-white bg-primary bg-red-500 w-full md:w-1/4 py-2 rounded-3xl hover:bg-red-600 hover:text-white mb-4"
            >
              Login
            </button>
            <div className="flex items-center justify-center">
              New Here?
              <span onClick={() => navigate("/register")} className="cursor-pointer border-b-2 font-thin border-black ml-1">
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
     
      <p className="text-center mt-6">&copy; 2024 HealthNet. Saving Lives Digitally.</p>
    </div>
  );
};
export default LoginPage;