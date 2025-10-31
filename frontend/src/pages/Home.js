import homebanner from "../assets/homebanner.jpg";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cam5 from "../assets/cam5.webp";
import cam6 from "../assets/cam6.webp";
import cam7 from "../assets/cam7.webp";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "NEC Blood Portal";
  }, []);

  return (
    <div className="bg-slate-200 text-black">
      {/* Header Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center p-10 bg-gradient-to-r from-red-600 to-red-900 text-white">
        <section className="flex-1 text-center md:text-left px-6">
          <h1 className="text-5xl lg:text-7xl font-bold">Give Blood, Spread Love</h1>
          <p className="text-2xl font-semibold mt-4">-  A Little Pain, A Lot of Life ❤️</p>
          <button
            onClick={() => navigate("/form")}
            className="mt-6 mx-2 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            Become a Donor
          </button>
          <button
            onClick={() => navigate("/form")}
            className="mt-6 mx-2 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            Request for Blood
          </button>
          <button
            onClick={() => navigate("/ablood")}
            className="mt-6 mx-2 px-8 py-3 bg-white text-red-600 font-bold rounded-lg shadow-lg hover:bg-red-100"
          >
            About Blood
          </button>
        </section>
        <img
          src={homebanner}
          alt="blooddonation"
          className="rounded-2xl m-4 w-full md:w-2/3 lg:w-1/2 shadow-2xl"
        />
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-900 py-12 px-4 mt-10 md:px-8">
        <h2 className="text-4xl font-extrabold text-center text-slate-300 mb-8">
          Why Was NEC Blood Portal Developed?
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

      {/* What Can You Donate Section */}
      <div className="bg-gray-100 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          What Can You Donate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam5} alt="Donate Blood" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Donate Blood</h3>
            <p className="text-gray-600 text-center">
              A single pint of blood can save up to three lives. Your generosity
              can create countless smiles and hope.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam6} alt="Community Support" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Community Support</h3>
            <p className="text-gray-600 text-center">
              Together we can save lives. Join our community of donors and supporters
              to make a difference in emergency situations.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6">
            <img className="w-32 h-32 mb-4" src={cam7} alt="Funding" />
            <h3 className="text-xl font-semibold text-red-600 mb-2">Funding</h3>
            <p className="text-gray-600 text-center">
              Every contribution counts. Your support can empower essential
              programs and reach those in need.
            </p>
          </div>
        </div>
      </div>

      {/* Did You Know Section (Replaced Testimonials) */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 py-16 px-6 md:px-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-10">🩸 Did You Know?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              💧 Every two seconds, someone needs blood — right now, somewhere, a life depends on it.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              🦸 You have a superpower inside you — it’s called blood.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              😴 It takes just 15 minutes to donate, but it creates a lifetime of memories for another.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              🎬 Real heroes aren’t in movies — they’re in blood donation camps.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              💪 Regular donors have lower cholesterol and blood pressure.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-lg">
              🩸 Giving blood stimulates new red cell production — keeping you healthy and strong!
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-red-600 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Join Us in Saving Lives</h2>
        <button
          onClick={() => navigate("/form")}
          className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-100"
        >
          Donate Blood Now
        </button>
      </div>
    </div>
  );
};

export default Home;
