import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../apis/endpoint";
import { useAuth } from "../context/AuthContext";

const API_BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await getProfile();
        setProfile(res);
      } catch (error) {
        console.error(error);
        logout();
        navigate("/login");
      }
    };
    loadProfile();
  }, [logout, navigate]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to permanently delete your account?")) return;

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`${API_BASE}/api/delete`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        alert("Account deleted successfully.");
        logout();
        navigate("/");
      } else {
        alert("Failed to delete profile.");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (!profile)
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <p className="text-red-600 text-2xl font-bold">Loading Profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200 p-6">
      <div className="bg-white shadow-xl w-full max-w-4xl rounded-3xl p-8 border border-gray-300">

        <h2 className="text-4xl font-extrabold text-center text-red-700 mb-8">My Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold text-gray-600">Full Name</label>
            <p className="border-b-2 border-gray-400 py-1 text-gray-900">{profile.fullname}</p>
          </div>

          <div>
            <label className="font-semibold text-gray-600">Blood Group</label>
            <p className="border-b-2 border-gray-400 py-1 text-gray-900">{profile.bloodType}</p>
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-600">Date of Birth</label>
            <p className="border-b-2 border-gray-400 py-1 text-gray-900">{profile.DOB}</p>
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-600">Mobile Number</label>
            <p className="border-b-2 border-gray-400 py-1 text-gray-900">{profile.contact}</p>
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-600">Email</label>
            <p className="border-b-2 border-gray-400 py-1 text-gray-900">{profile.email}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/showform">
            <button className="bg-red-100 text-red-700 border border-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition">
              View Submitted Forms
            </button>
          </Link>

          <button
            onClick={() => navigate("/upassword")}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Change Password
          </button>

          <button
            onClick={handleDelete}
            className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Delete Account
          </button>

          {/* Logout Now Opens Popup */}
          <button
            onClick={() => setShowLogoutPopup(true)}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow-xl text-center">

            <h2 className="text-xl font-bold text-red-600 mb-4">
              Are you sure you want to logout?
            </h2>

            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
