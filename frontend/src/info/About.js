import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Donate Blood, Save Lives
        </h1>
        <p className="mt-4 text-lg max-w-2xl leading-relaxed text-red-100">
          Every drop of blood you donate can bring hope to someone in need.
          Your contribution can save up to <span className="font-bold">three lives</span>.
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate("/guide")}
            className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-100 transition-all"
          >
            Guide for Donation
          </button>

          <button
            onClick={() => navigate("/ablood")}
            className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-red-700 transition-all"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-red-700 mb-6 text-center lg:text-left">
            About the Portal
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center lg:text-left">
            The <b>NEC Blood Donation Portal</b> is an initiative by
            <b> Nandha Engineering College</b> in collaboration with 
            <b> Nandha Medical Hospital</b>, Erode. Our goal is to connect voluntary blood donors
            with patients in urgent need — quickly and efficiently.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left">
            We believe in enhancing societal responsibility through compassion,
            awareness, and technology. By joining our community, you're taking
            part in a life-saving mission.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-red-300 w-20 h-20 rounded-full blur-2xl opacity-50"></div>
            <img
              src={logo}
              alt="NEC Blood Portal"
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-red-700 relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
