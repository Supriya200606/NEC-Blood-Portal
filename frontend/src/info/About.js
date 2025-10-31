import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-200">
      <div className="text-black p-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-6"></div>
        <div>
          <section className="relative h-[600px] bg-gray flex items-center">
            <div className="container mx-auto relative z-10 px-6">
              <div className="max-w-2xl">
                <h1 className="lg:text-6xl text-4xl px-2 text-slate-700 font-bold">
                  Every Drop Counts
                </h1>
              
                <p className="text-xl font-sans mb-8">
                  Your blood donation can save up to three lives. Join our
                  mission to make a difference in your community.
                </p>
                <div className="space-x-4">
                  <button
                    onClick={() => navigate("/guide")}
                    className="bg-red-700 p-2 m-2 text-white shadow-black hover:bg-white hover:text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg"
                  >
                    Guide for Donation
                  </button>
                  <button
                    onClick={() => navigate("/ablood")}
                    size="lg"
                    variant="outline"
                    className="p-2 shadow-slate-500 shadow-xl rounded-2xl"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="m-10 flex-1 items-center mb-10 lg:text-6xl text-4xl px-2 text-[#fc2323] mt-16 font-extrabold text-center">
            About Us
            <p className="lg:text-2xl text-xl text-black font-bold m-10 text-center">
              Welcome to the NEC Blood Donation Portal, a collaborative
              initiative by Nandha Engineering College (NEC) and Nandha Medical
              Hospital, Erode. Our mission is to save lives through awareness,
              technology, and compassion by connecting voluntary donors with
              those in need — right from our own campus. At NEC, we believe that
              education goes beyond academics — it’s about creating responsible
              citizens who give back to society. With the support of Nandha
              Medical Hospital’s healthcare team, the NEC Blood Donation Portal
              serves as a bridge between donors, hospitals, and patients
              requiring urgent blood transfusions.
            </p>
          </div>
          <img src={logo} alt="logo" className="h-1/2 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
