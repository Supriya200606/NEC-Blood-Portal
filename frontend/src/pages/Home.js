

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cam5 from "../assets/cam5.webp";
import cam6 from "../assets/cam6.webp";
import cam7 from "../assets/cam7.webp";
import { showBloodRequestData } from "../apis/endpoint.js";

const Home = () => {
  const [donorsData, setDonorsData] = useState([
    {
      fullname: "",
      contactnumber: "",
      email: "",
      bloodType: ""
    },
  ]);
  const [recepientData, setRecepientData] = useState([
    {
      fullname: "",
      contactnumber: "",
      email: "",
      bloodType: ""
    },
  ]);

  useEffect(() => {
    const getDonors = async () => {
      const res = await showBloodRequestData("donor");
      if (res.status === 400) {
        throw new Error("Failed to get profile");
      }
      setDonorsData(res);
    };
    getDonors();
  }, []);

  useEffect(() => {
    const getRecepient = async () => {
      const res = await showBloodRequestData("recepient");
      if (res.status === 400) {
        throw new Error("Failed to get profile");
      }
      setRecepientData(res);
    };
    getRecepient();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bg-slate-200 text-black">
     
      <div className="flex flex-wrap md:flex-nowrap items-center p-10 bg-gradient-to-r from-red-600 to-red-900 text-white">
        <section className="flex-1 text-center md:text-left px-6">
          <h1 className="text-5xl lg:text-7xl font-bold">Donate Blood</h1>
          <p className="text-2xl font-semibold mt-4">- Give the Gift of Life</p>
          <button
            onClick={() => navigate("/form")}
            className="mt-6 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            Become a Donor
          </button>
          <button
            onClick={() => navigate("/form")}
            className="mt-6 ml-6 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            Request for Blood
          </button>
          <button
            onClick={() => navigate("/ablood")}
            className="mt-6 ml-6 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            About Blood
          </button>
        </section>
        <img
          src="https://imgs.search.brave.com/dAQNwl0N7deGF_jcWEBZoSVCiBaK0MtMEAKwPtfKO8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIxLzQ3Lzk5/LzM2MF9GXzIyMTQ3/OTk0Nl8yeVVtV1Jt/VlBCa2E2ZDR6Y1hi/QmhKYlJyYThXY3BR/Vi5qcGc"
          alt="blooddonation"
          className="rounded-full m-4 w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      <div className="min-h-10 bg-white py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
          <div>
            <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Available Donors</h2>
            <div className="grid grid-cols-1 gap-8">
              {donorsData.slice(0, 3).map((donor, index) => (
                <div
                  key={index}
                  className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center"
                >
                  <h3 className="font-semibold text-red-900 text-xl">{donor.fullname}</h3>
              
                  <p className="text-black  font-semibold text-xl">Blood Type:{donor.bloodType}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center text-gray-600 mb-8">Blood Needers</h2>
            <div className="grid grid-cols-1 gap-8">
              {recepientData.slice(0, 3).map((recipient, index) => (
                <div
                  key={index}
                  className="bg-[#f33535] shadow-lg rounded-lg p-6 flex flex-col items-center"
                >
                  <h3 className="font-semibold text-white text-xl">{recipient.fullname}</h3>
                  
                  <p className="text-black font-semibold text-lg">Blood Type: {recipient.bloodType}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  
      <div onClick={() => navigate("/campaigns")} className="bg-gray-100 py-12 px-4 md:px-8 cursor-pointer">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Campaigns</h2>
        <div className="flex justify-evenly overflow-x-scroll space-x-8">
          <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Ongoing Campaigns</h3>
            <p className="text-gray-600 text-lg">Details about ongoing campaigns...</p>
          </div>
          <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-red-600 mb-2">Completed Campaigns</h3>
            <p className="text-gray-600 text-lg">Details about completed campaigns...</p>
          </div>
          
                  <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">Upcoming Campaigns</h3>
                <p className="text-gray-600">Details about upcoming campaigns...</p>
                  
                </div>
              </div>
          </div>   
      <div className="bg-gradient-to-r from-red-700 to-red-900 py-12 px-4 mt-10 md:px-8">
        <h2 className="text-4xl font-extrabold text-center text-slate-300 mb-8">
          Why Was HealthNet Developed?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Encouraging Health & Fit Life</h3>
            <p className="text-gray-600 mt-4">
              Promoting a healthy lifestyle through awareness and action.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Life-Saving Technology</h3>
            <p className="text-gray-600 mt-4">
              Leveraging innovation to create impactful solutions.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Humanity Preserving Approach</h3>
            <p className="text-gray-600 mt-4">
              Building connections that save lives and uplift communities.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Making Life-Saving Connections</h3>
            <p className="text-gray-600 mt-4">
              Bridging the gap between donors and those in need.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">What Can You Donate?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam5} alt="Donate Blood" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Donate Blood</h3>
            <p className="text-gray-600 text-center">
              A single pint of blood can save up to three lives. Your generosity can create countless smiles and hope.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam6} alt="Volunteering" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Volunteering</h3>
            <p className="text-gray-600 text-center">
              Be the driving force in positive change. Give your time and skills to make a lasting impact in others' lives.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam7} alt="Funding" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Funding</h3>
            <p className="text-gray-600 text-center">
              Every contribution counts. Your support can empower essential programs and reach those in need.
            </p>
          </div>
        </div>
      </div>

     




      <div  className="bg-gray-100 py-12 px-4 md:px-8 cursor-pointer">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">What People Say About Us?</h2>
        <div className="flex justify-evenly overflow-x-scroll space-x-8">
        <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <p className="text-gray-600 italic mb-4">
              "Good initiative. Hope to work with you guys."
            </p>
            <h3 className="font-semibold text-gray-800">Sushil</h3>
            <p className="text-gray-500">Red Cross MD</p>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <p className="text-gray-600 italic mb-4">
              "Donating blood was the most rewarding experience of my life. I feel proud to have made a difference."
            </p>
            <h3 className="font-semibold text-gray-800">Ayush</h3>
            <p className="text-gray-500">A+ Blood Donor</p>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <p className="text-gray-600 italic mb-4">
              "I volunteered at the blood donation camp and it was heartwarming to see so many people willing to help."
            </p>
            <h3 className="font-semibold text-gray-800">Sushant</h3>
            <p className="text-gray-500">Volunteer</p>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col items-center">
            <p className="text-gray-600 italic mb-4">
              "Thank you for the opportunity to contribute. It’s a small step for me, but a big leap for those in need."
            </p>
            <h3 className="font-semibold text-gray-800">Somnath</h3>
            <p className="text-gray-500">Blood Recipient</p>
          </div>
       
              </div>
          </div>   


      <div className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
        <button
          onClick={() => navigate('/bank')}
          className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-100"
        >
          Find the Nearest Blood Branch
        </button>
      </div>
    </div>
    
  );
};

export default Home;
