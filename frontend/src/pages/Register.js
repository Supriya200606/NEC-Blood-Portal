import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register} from "../apis/endpoint";


const RegisterPage = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [DOB,setDOB] = useState("");
  const[gender,setGender]=useState("");
  const[district,setDistrict]=useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  
  const places = [
    "Achham", "Arghakhanchi",
    "Baglung","Baitadi",
    "Bajhang", "Bajura",
    "Banke", "Bara",
    "Bardiya",   "Bhaktapur", "Bhojpur",   "Chitwan",   "Dadeldhura",  "Dailekh",  "Dang",   "Darchula","Dhading",  "Dhankuta",  "Dhanusha","Dolakha",  "Dolpa",
    "Doti", "Gorkha",
    "Gulmi", "Humla",   "Ilam",   "Jajarkot","Jhapa",   "Jumla","Kailali",   "Kalikot",   "Kanchanpur","Kapilvastu",   "Kaski",
    "Kathmandu",
    "Kavrepalanchok","Khotang",
    "Lalitpur","Lamjung", "Mahottari", "Makwanpur", "Manang", "Morang",
 "Mugu","Mustang","Myagdi", "Nawalparasi (Bardaghat Susta East)",  "Nawalparasi (Bardaghat Susta West)",  "Nuwakot","Okhaldhunga",
    "Palpa",
    "Panchthar","Parbat",
    "Parsa",    "Pyuthan","Ramechhap", "Rasuwa", "Rautahat",
    "Rolpa",  "Rukum East",  "Rukum West",
    "Rupandehi", "Salyan", "Sankhuwasabha",  "Saptari",
    "Sarlahi",   "Sindhuli",  "Sindhupalchok",  "Siraha",  "Solukhumbu",  "Sunsari",  "Surkhet",
    "Syangja",   "Tanahun", "Taplejung",   "Terhathum",
    "Udayapur",
  ];

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !contact || !password || !bloodType || !DOB || !gender || !district) {
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

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");

    setFname("");
    setLname("");
    setContact("");
    setEmail("");
    setPassword("");
    setBloodType("");
    setDOB("");
    setDistrict("");
    setGender("");

    try {
      const data = await register(fname, lname, contact, email, password,DOB,district,bloodType,gender);
      console.log(data);

      if (data) {
        setUserData(data);
        navigate("/login");
  
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
          <h1 className="text-3xl font-bold text-red-800 border-b-2 border-black pb-2">Registration</h1>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
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
            <label className="block mb-1">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-1">District</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select your district</option>
              {places.map((place, index) => (
                <option key={index} value={place}>
                  {place}
                </option>
              ))}
            </select>
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
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-full font-bold"
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
