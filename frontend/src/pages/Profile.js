import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile} from "../apis/endpoint";
import { useAuth } from "../context/AuthContext";
const DELETE_URL = 'https://healthnet-v3g1.onrender.com/api/delete/:id';

const Profile = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    contact: "",
    bloodType: "",
    DOB: "",
  });
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProfile();
        if (res) setProfile(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      deleteProfile();
    }
  };


  const deleteProfile = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(DELETE_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) handleLogout();
      else throw new Error("Failed to delete profile");
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <div className="bg-gradient-to-tr from-slate-50 via-grey-200 to-slate-200 w-4/5 rounded-3xl shadow-lg p-4 flex">
        <div className="w-1/4 flex flex-col items-center border-r border-gray-300 pr-4">
          <div className="text-center">
            <Link to="/showform">
              <button className="text-3xl mb-6 text-red-600 font-bold p-2 border-red-400 rounded-full border-4 cursor-pointer">
                Show my Forms
              </button>
            </Link>
            <h1 className="mt-10 text-3xl font-bold">Donation Detail</h1>
            <h2 className="mt-4 text-xl font-bold text-red-700">
              {profile.fullname} 
            </h2>
            <table className="mt-4 w-full text-left">
              <tbody>
                {["Donations", "Received Blood", "Attended Campaign", "Volunteering"].map(
                  (item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2 font-bold">No. of {item}</td>
                      <td className="border px-4 py-2 font-bold">{index + 1}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="flex-col mt-auto p-4 text-center">
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white hover:bg-red-800 text-lg font-bold p-2 rounded-lg shadow-lg"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="w-3/4 pl-6">
          
            <h3 className="text-4xl font-bold mb-6 text-red-600 font-serif">Profile</h3>
            <form className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-bold text-gray-700">Full Name</label>
                <p
                 
                  className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm "
                >{profile.fullname}</p>
              </div>
             
              
              <div>
                <label className="block text-lg font-bold text-gray-700">Blood Group</label>
                <p
                  
                  className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm "
                > {profile.bloodType}</p>
              </div>
              
              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Date Of Birth (DOB)</label>
                <p
              
                  className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm "
                >{profile.DOB}</p>
              </div>

              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Mobile Number</label>
                <p
                  
                  
                  className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm"
                >{profile.contact} </p>
              </div>

          

              <div className="col-span-2">
                <label className="block text-lg font-bold text-gray-700">Email Address</label>
                <p
                  
            
                  className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm "
                >{profile.email}</p>
              </div>
            </form>
            
         
        
          <button
            onClick={confirmDelete}
            className="mt-6 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800 focus:outline-none"
          >
            Delete Profile
          </button>
          <button
            onClick={() => navigate('/upassword')}
            className="mt-6 mx-10 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800 "
          >
           Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;