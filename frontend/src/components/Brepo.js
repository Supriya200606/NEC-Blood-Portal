import React, { useState, useEffect } from "react";
import { showBloodRequestData } from "../apis/endpoint";
import { useNavigate } from "react-router-dom";

const BRepo = () => {
  const navigate = useNavigate();
  const [donorsData, setDonorsData] = useState([]);

  useEffect(() => {
    const getDonors = async () => {
      const res = await showBloodRequestData("donor");
      setDonorsData(Array.isArray(res) ? res : []);
    };
    getDonors();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-4xl font-bold text-center text-red-700 mb-2">
        Blood Donor Repository
      </h1>
      <p className="text-center text-gray-600 mb-10">
        A network of voluntary donors ready to help save lives.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {donorsData.length > 0 ? (
          donorsData.map((donor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-t-4 border-red-600 shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-red-700 mb-2">
                  {donor.bloodType}
                </h2>
                <h3 className="text-lg font-semibold text-gray-800">
                  {donor.fullname}
                </h3>
                <p className="text-gray-600 text-sm">
                  {donor.gender}, {donor.age} yrs
                </p>
              </div>

              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>📍 <span className="font-medium">{donor.address}</span></p>
                <p>☎️ {donor.contactnumber || "Not provided"}</p>
                <p>✉️ {donor.email}</p>
              </div>

              <button
                onClick={() => navigate("/contactuser", { state: { user: donor } })}
                className="mt-5 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Contact Donor
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-600 text-lg">
            No donors available currently.
          </p>
        )}
      </div>
    </div>
  );
};

export default BRepo;
