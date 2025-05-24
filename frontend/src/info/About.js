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

          <div className="flex flex-wrap justify-evenly items-center gap-6">
            <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-red-500 mb-10 w-full sm:w-auto">
              <div className="pb-6 p-6 text-3xl font-bold text-[#ff2323] bg-gray-100 border-4 rounded-3xl">
                Verified Donors
                <p className="flex text-justify justify-center">19</p>
              </div>
            </div>
            <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-red-500 mb-10 w-full sm:w-auto">
              <div className="p-6 text-3xl font-bold text-[#ff2323] bg-gray-100 border-4 rounded-3xl">
                Active Donors
                <p className="flex text-justify justify-center">10</p>
              </div>
            </div>
            <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-red-500 mb-10 w-full sm:w-auto">
              <div className="pb-6 p-6 text-3xl font-bold text-[#ff2323] bg-gray-100 border-4 rounded-3xl">
                Total Donations
                <p className="flex text-justify justify-center">34</p>
              </div>
            </div>
            <div className="p-4 rounded-3xl bg-gradient-to-tr from-stone-400 via-grey-200 to-red-500 mb-10 w-full sm:w-auto">
              <div className="p-6 text-3xl font-bold text-[#ff2323] bg-gray-100 border-4 rounded-3xl">
                Lives Saved
                <p className="flex text-justify justify-center">--</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="m-10 flex-1 items-center mb-10 lg:text-6xl text-4xl px-2 text-[#fc2323] mt-16 font-extrabold text-center">
            What is HealthNet?
            <p className="lg:text-2xl text-xl text-black font-bold m-10 text-center">
              HealthNet is an innovative platform devoted to combating blood
              deficiency and thereby enhancing healthcare access within Nepal.
              Our mission is simple yet deep: to create a connected community
              where blood donors, recipients, and volunteers come together to
              save lives and build a stronger, healthier society. In a country
              where the compatibility of blood donors often becomes a matter of
              life and death, HealthNet bridges the critical gap between donors
              and those in need. Our advanced technology and user-centric design
              make blood donation accessible and seamless, fostering a culture
              of support and giving.
            </p>
          </div>
          <img src={logo} alt="logo" className="h-1/2 rounded-full" />
        </div>

     
      
        
       
      </div>
    </div>
  );
};
export default About;
