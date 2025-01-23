import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ContactUser = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const { user } = location.state || {};

  
  if (!user) {
    navigate(-1); 
    return null;
  }

  return (
    <div className="min-h-screen font-semibold bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-100 rounded-xl shadow-lg p-8 border-2 shadow-black">
        <h1 className="text-5xl font-extrabold text-red-600 text-center mb-6">
          {user.fullname}
        </h1>

        <div className="space-y-6">
          
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Blood Type:</span>
            <span className="text-lg text-red-700">{user.bloodType}</span>
          </div>

        
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Age:</span>
            <span className="text-lg text-red-700">{user.age} years</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Weight:</span>
            <span className="text-lg text-red-700">{user.weight} kg</span>
          </div>

    
          <div className="flex justify-between items-center p-4  bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Gender:</span>
            <span className="text-lg text-red-700">{user.gender}</span>
          </div>

      
          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Contact Number:</span>
            <span className="text-lg text-red-700">{user.contactnumber}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Email:</span>
            <span className="text-lg text-red-700">{user.email}</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-black">
            <span className="text-xl font-bold text-red-600">Address:</span>
            <span className="text-lg text-red-700">{user.address}</span>
          </div>
        </div>

       
        <div className="mt-8 flex justify-between">
          <button
            onClick={() => navigate(-1)} 
            className="px-6 py-2 bg-white text-red-600 font-bold border-2 border-black rounded-lg shadow hover:bg-red-100 transition-all"
          >
            Back
          </button>
          <button
            onClick={() => alert("user not available")}
            className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition-all"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUser;
