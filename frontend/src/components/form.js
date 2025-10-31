import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setFormData } from "../apis/endpoint";

const Form = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate('');
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  const [requesterData, setRequesterData] = useState({
    fullname: "", contactnumber: "", email: "", tag: "", bloodType: "", age: "", weight: "", gender: "", address: "", agreeTerms: false,
  });

  // ✅ Tamil Nadu Districts
  const districts = [
    "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri",
    "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur",
    "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris",
    "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivagangai",
    "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
    "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore",
    "Viluppuram", "Virudhunagar"
  ];

  const validateForm = () => {
    const { fullname, contactnumber, email, tag, bloodType, age, weight, gender, address, agreeTerms } = requesterData;
    if (!fullname || !contactnumber || !email || !tag || !bloodType || !age || !weight || !gender || !address) {
      setError("All fields are required.");
      return false;
    }
    if (!/^\d{10}$/.test(contactnumber)) {
      setError("Please enter a valid 10-digit contact number.");
      return false;
    }
    if (!agreeTerms) {
      setError("You must agree to the terms and conditions.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    const { fullname, contactnumber, email, tag, bloodType, age, weight, gender, address } = requesterData;
    await setFormData(fullname, contactnumber, email, tag, bloodType, age, weight, gender, address, userId);
    navigate('/showform');
    setRequesterData({ fullname: "", contactnumber: "", email: "", tag: "", bloodType: "", age: "", weight: "", gender: "", address: "", agreeTerms: false });
  } catch (error) {
    console.error("Error submitting form:", error);
    setError("Failed to submit request. Please try again.");
  }
};

  return (
    <div className="bg-slate-200">
      <div className="mx-auto max-w-3xl text-black p-5 border rounded-2xl shadow-2xl bg-white">
        <h2 className="text-3xl text-red-600 border-b-4 border-gray-300 font-bold mb-10 text-center">Blood Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1">Who Are You?</label>
            <select name="tag" value={requesterData.tag} onChange={(e) => setRequesterData({ ...requesterData, tag: e.target.value })} className="w-full border rounded p-2">
              <option className="text-gray-200">Donor Or Recipient</option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Full Name:</label>
            <input type="text" name="fullname" value={requesterData.fullname} onChange={(e) => setRequesterData({ ...requesterData, fullname: e.target.value })} placeholder="Full name" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1">Gender:</label>
            <div className="flex space-x-4">
              <label><input type="radio" name="gender" value="male" checked={requesterData.gender === "male"} onChange={(e) => setRequesterData({ ...requesterData, gender: e.target.value })} /> M</label>
              <label><input type="radio" name="gender" value="female" checked={requesterData.gender === "female"} onChange={(e) => setRequesterData({ ...requesterData, gender: e.target.value })} /> F</label>
            </div>
          </div>
          <div>
            <label className="block mb-1">Blood Type:</label>
            <select name="bloodType" value={requesterData.bloodType} onChange={(e) => setRequesterData({ ...requesterData, bloodType: e.target.value })} className="w-full border rounded p-2">
              <option value="">Select Blood Type</option>
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
            <label className="block mb-1">Age:</label>
            <input type="number" name="age" min="16" max="55" placeholder="16 years" value={requesterData.age} onChange={(e) => setRequesterData({ ...requesterData, age: e.target.value })} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1">Weight:</label>
            <input type="number" name="weight" min="45" max="100" placeholder="45 kg" value={requesterData.weight} onChange={(e) => setRequesterData({ ...requesterData, weight: e.target.value })} className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1">Contact Number:</label>
            <input type="text" name="contactnumber" value={requesterData.contactnumber} onChange={(e) => setRequesterData({ ...requesterData, contactnumber: e.target.value })} placeholder="Phone/Landline" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1">Email Address:</label>
            <input type="email" name="email" value={requesterData.email} onChange={(e) => setRequesterData({ ...requesterData, email: e.target.value })} placeholder="Email address" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block mb-1">District</label>
            <select name="address" value={requesterData.address} onChange={(e) => setRequesterData({ ...requesterData, address: e.target.value })} className="w-full border rounded p-2">
              <option value="">Select District</option>
              {districts.map((district, index) => <option key={index} value={district}>{district}</option>)}
            </select>
          </div>
          <div>
            <label className="block">
              <input type="checkbox" name="agreeTerms" checked={requesterData.agreeTerms} onChange={(e) => setRequesterData({ ...requesterData, agreeTerms: e.target.checked })} required className="cursor-pointer" />
              I agree to the terms and conditions
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="w-full bg-red-600 text-white hover:bg-red-800 hover:text-white p-2 rounded mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
