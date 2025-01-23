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
  const[response, setResponse] = useState('');
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
        setResponse("Login successful! Redirecting...");
        navigate('/profile');
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
  <div className="  font-serif font-bold bg-slate-200  " >

    <div className="flex justify-end"> 
    <div className="flex-1 items-center justify-center p-6">


<h1 className=" mt-10 font-bold text-6xl  bg-gradient-to-r from-red-500 via-purple-700 to-blue-900 text-transparent bg-clip-text">
  HealthNet
</h1>
<p className="text-3xl font-mono  text-blue-400"> "Saving Lives in One Click"</p>

</div>
<div className="m-20 ">
<buttom className="cursor-pointer border-b-2 text-red-600  font-thin border-black " onClick={()=>navigate("/")}>
  Back to Home
</buttom>
</div>

    </div>
   

    <div className="  p-16 gap-10  rounded-full flex items-center justify-between " >
      <div>
        <img className=" shadow-red-700 shadow-2xl min-h-40  border-slate-500 rounded-full  " src={rbc} alt="bgimg" />
      </div>


      <div className="bg-white rounded-3xl shadow-lg w-2/5 p-16">

        <form onSubmit={handleSubmit} >
          <h1 className="text-3xl font-bold font-serif text-center text-red-800 mb-10 border-b-2 border-black w-1/2 rounded-2xl items-center">Login</h1> 
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
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
            <label htmlFor="password" className="block mb-2">
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
            className="font-bold items-center text-white bg-primary bg-red-500 w-1/4 py-2 rounded-3xl hover:bg-red-600 hover:text-white mb-4"
          >
            Login
          </button>
          <div className="flex items-center justify-center">
            New Here?<span onClick={()=>navigate("/register")} className="cursor-pointer border-b-2 font-thin border-black ">
              Register
            </span>
          </div>


    
        </form>
       
      </div>
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



    </div>
    <p className="text-center">&copy; 2024 HealthNet. Saving Lives Digitally.</p>

  </div>
  );
};
export default LoginPage;