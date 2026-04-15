import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Bell, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDp1Open, setIsDp1Open] = useState(false);
  const [isDp2Open, setIsDp2Open] = useState(false);

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(menu === "portal" ? !isDropdownOpen : false);
    setIsDp1Open(menu === "donors" ? !isDp1Open : false);
    setIsDp2Open(menu === "resources" ? !isDp2Open : false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-portal")) setIsDropdownOpen(false);
      if (!event.target.closest(".dropdown-donors")) setIsDp1Open(false);
      if (!event.target.closest(".dropdown-resources")) setIsDp2Open(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="bg-[#dc2626] flex justify-between items-center text-white">
        <div className="p-4 flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-14 rounded-full border-2 border-white shadow-md cursor-pointer"
            onClick={() => navigate("/home")}
          />
          <h1
            className="text-2xl md:text-3xl font-bold cursor-pointer tracking-wide"
            onClick={() => navigate("/home")}
          >
            Kongu Blood Portal
          </h1>
        </div>

        <div className="hidden md:flex gap-3 items-center py-3 px-6">
          {isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/repo")}
                className="bg-white text-[#dc2626] hover:bg-[#b91c1c] hover:text-white font-medium rounded-lg px-4 py-2 transition-all"
              >
                Recipients
              </button>

              <button
                onClick={() => navigate("/brepo")}
                className="bg-white text-[#dc2626] hover:bg-[#b91c1c] hover:text-white font-medium rounded-lg px-4 py-2 transition-all"
              >
                Donors
              </button>

              <Bell
                onClick={() => navigate("/notification")}
                className="cursor-pointer hover:text-yellow-300 transition"
              />
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-[#dc2626] hover:bg-[#b91c1c] hover:text-white font-medium rounded-lg px-4 py-2 transition-all"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="bg-[#dc2626] border border-white text-white hover:bg-[#b91c1c] font-medium rounded-lg px-4 py-2 transition-all"
              >
                Register
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden pr-5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      <nav
        className={`bg-slate-50 font-semibold text-gray-800 shadow-inner md:block ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center py-3 px-4 gap-3">
          <ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-start md:items-center">
            <li><Link to="/home" className="hover:text-[#dc2626]" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-[#dc2626]" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>

            <div className="relative dropdown-donors">
              <button className="hover:text-[#dc2626]" onClick={() => toggleDropdown("donors")}>Donors & Requests</button>
              {isDp1Open && (
                <div className="absolute mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg border z-50">
                  <ul>
                    <li onClick={() => { navigate("/brepo"); setIsDp1Open(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Donor List</li>
                    <li onClick={() => { navigate("/repo"); setIsDp1Open(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Request List</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative dropdown-portal">
              <button className="hover:text-[#dc2626]" onClick={() => toggleDropdown("portal")}>Blood Portal</button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg border z-50">
                  <ul>
                    <li onClick={() => { navigate("/bfind"); setIsDropdownOpen(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Find Blood</li>
                    <li onClick={() => { navigate("/form"); setIsDropdownOpen(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Donation Form</li>
                    <li onClick={() => { navigate("/eligibility"); setIsDropdownOpen(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Check Eligibility</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="relative dropdown-resources">
              <button className="hover:text-[#dc2626]" onClick={() => toggleDropdown("resources")}>Resources</button>
              {isDp2Open && (
                <div className="absolute mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg border z-50">
                  <ul>
                    <li onClick={() => { navigate("/guide"); setIsDp2Open(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Donation Guide</li>
                    <li onClick={() => { navigate("/ablood"); setIsDp2Open(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">About Blood</li>
                    <li onClick={() => { navigate("/helpline"); setIsDp2Open(false); setIsMenuOpen(false); }} className="px-4 py-2 hover:bg-[#dc2626] hover:text-white cursor-pointer">Help Line</li>
                  </ul>
                </div>
              )}
            </div>

            {isAuthenticated && (
              <Link to="/profile" className="hover:text-[#dc2626]" onClick={() => setIsMenuOpen(false)}>
                Profile
              </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;