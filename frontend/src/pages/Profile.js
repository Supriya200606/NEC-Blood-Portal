import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../apis/endpoint";
import { useAuth } from "../context/AuthContext";

const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

const Profile = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    contact: "",
    bloodType: "",
    DOB: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log("Fetching profile data...");
        const token = localStorage.getItem("token");
        console.log("Token exists:", !!token);
        
        if (!token) {
          setError("No authentication token found");
          navigate('/login');
          return;
        }
        
        const res = await getProfile();
        console.log("Profile response:", res);
        if (res) {
          setProfile(res);
        } else {
          setError("No profile data received");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.message);
        // If token is invalid, redirect to login
        if (error.message.includes('Failed to get profile') || error.message.includes('Access denied')) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

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
      // Use API base and profile id to construct delete URL
      const id = profile._id || profile.id;
      if (!id) throw new Error('User id not available for delete');
      const response = await fetch(`${API_BASE}/api/delete/${id}`, {
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

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200 p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Loading Profile...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200 p-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-4">Error Loading Profile</div>
          <div className="text-lg text-gray-700 mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200 p-4">
      <div className="bg-gradient-to-tr from-slate-50 via-grey-200 to-slate-200 w-full md:w-4/5 rounded-3xl shadow-lg p-4 flex flex-col md:flex-row">

        {/* Profile Info Section */}
        <div className="w-full md:w-3/4 pl-0 md:pl-6 mt-6 md:mt-0">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-600 font-serif">Profile</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold text-gray-700">Full Name</label>
              <p className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm p-2">
                {profile.fullname || "Not provided"}
              </p>
            </div>
            <div>
              <label className="block text-lg font-bold text-gray-700">Blood Group</label>
              <p className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm p-2">
                {profile.bloodType || "Not provided"}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-lg font-bold text-gray-700">Date Of Birth (DOB)</label>
              <p className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm p-2">
                {profile.DOB || "Not provided"}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-lg font-bold text-gray-700">Mobile Number</label>
              <p className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm p-2">
                {profile.contact || "Not provided"}
              </p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-lg font-bold text-gray-700">Email ID</label>
              <p className="mt-1 block w-full border-gray-800 border-b-2 rounded-md shadow-sm p-2">
                {profile.email || "Not provided"}
              </p>
            </div>
          </form>

          <button
            onClick={confirmDelete}
            className="mt-6 mx-2 md:mx-10 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800"
          >
            Delete Profile
          </button>
          <button
            onClick={() => navigate('/upassword')}
            className="mt-6 mx-2 px-6 py-2 rounded-md bg-red-600 text-white hover:bg-red-800"
          >
            Change Password
          </button>
        </div>

        {/* Right Side (Show My Forms + Logout) */}
        <div className="w-full pt-10 md:w-1/4 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
          <div className="text-center">
            <Link to="/showform">
              <button className="text-2xl md:text-3xl mb-6 text-red-600 font-bold p-2 border-red-400 rounded-full border-4 cursor-pointer">
                Show my Forms
              </button>
            </Link>
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

      </div>
    </div>
  );
};

export default Profile;
