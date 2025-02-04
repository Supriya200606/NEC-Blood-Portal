import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import sujan from "../assets/DSC_152.JPG";
import ankit from "../assets/1737610338670_1.jpg";
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

        <div className="text-center gap-y-6">
          <h2 className="lg:text-5xl text-3xl px-2 mt-10 mb-10 text-slate-700 font-bold text-center">
            Meet Our Team
          </h2>
          <div className="lg:text-2xl text-xl font-mono leading-relaxed pr-4 pl-4 lg:pr-48 lg:pl-48 mb-16">
            We are a passionate team of students pursuing our educations in the
            field of Information Technology, and our objective is to devise a
            solution for society that will make a difference in people's lives.
            Our team believes in the power of technology to bring a positive
            change to the world, and with HealthNet, we're committed to making
            blood donation smooth and efficient.
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center h-auto">
          <div className="flex flex-col items-center p-6 w-full sm:w-1/2 lg:w-1/4">
            <div className="border-4 w-1/2 rounded-full mb-4">
              <img src={sujan} alt="logo" className="rounded-full" />
            </div>
            <p className="text-3xl font-bold mb-2">Sujan Mishra</p>
            <div className="rounded-3xl font-bold text-lg px-4 py-2 bg-zinc-400">
              UI/UX & Frontend
            </div>
            <p className="font-serif m-6 text-md">
              A very honorable student of Shreeyantra College, always moving
              forward in every endeavor. The work done by him can be considered
              as the world's finest crafts, and he is a very good friend of
              mine.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 w-full sm:w-1/2 lg:w-1/4">
            <div className="border-4 w-1/2 rounded-full mb-4">
              <img src={ankit} alt="logo" className="rounded-full" />
            </div>
            <p className="text-3xl font-bold mb-2">Ankit Dhakal</p>
            <div className="rounded-3xl font-bold text-lg px-4 py-2 bg-zinc-400">
              Backend
            </div>
            <p className="font-serif m-6 text-md">
              A proud of Shreeyantra College who has successfully proven his work and intelligence in his 4 year career.
              He is very friendly toward his every friends and very responsible toward his duty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
