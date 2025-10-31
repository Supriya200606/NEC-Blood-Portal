import logo from "../assets/logo.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Bell } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDp1Open, setIsDp1Open] = useState(false);
  const [isDp2Open, setIsDp2Open] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-portal")) {
        setIsDropdownOpen(false);
      }
      if (!event.target.closest(".dropdown-donors")) {
        setIsDp1Open(false);
      }
      if (!event.target.closest(".dropdown-resources")) {
        setIsDp2Open(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-[#A3151A] flex justify-between items-center text-xl text-white">
          <div className="p-4 flex items-center gap-6">
            <img
              src={logo}
              alt="Logo"
              className="shadow-black shadow-xl rounded-full cursor-pointer h-auto w-1/6"
            />
            <h1
              className="text-3xl font-bold cursor-pointer"
              onClick={() => navigate("/home")}
            >
              NEC Blood Portal
            </h1>
          </div>

          <div className="flex gap-3 justify-between items-center py-4 px-6">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/repo")}
                  className="bg-red-600 text-white hover:bg-red-800 border-y-4 border-x-2 rounded-3xl p-2 text-xs"
                >
                  Blood Recipients
                </button>

                <button
                  onClick={() => navigate("/brepo")}
                  className="bg-red-600 text-white hover:bg-red-800 border-y-4 border-x-2 rounded-3xl p-2 text-xs"
                >
                  Blood Donors
                </button>
                <Bell
                  onClick={() => navigate("/notification")}
                  className="cursor-pointer"
                />
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-red-600 text-white hover:bg-red-800 border-y-4 rounded-3xl p-2 text-xs"
                >
                  <pre>Log In</pre>
                </button>

                <button
                  onClick={() => navigate("/register")}
                  className="bg-red-600 text-white hover:bg-red-800 border-y-4  rounded-3xl p-2 text-xs"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>

        <nav className="bg-slate-100 font-bold text-black">
          <div className="container mx-auto flex justify-between items-center py-2">
            <ul className="flex flex-wrap space-x-4">
              <li>
                <a href="/home" className= "hover:text-red-500 ml-4">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="  hover:text-red-500">
                  AboutUs
                </a>
              </li>

             
              <div className="relative dropdown-donors">
                <button
                  className="hover:text-red-500 "
                  onClick={() => setIsDp1Open((prev) => !prev)}
                >
                  Blood Donors/Requests
                </button>
                {isDp1Open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                    <ul>
                      <li
                        onClick={() => navigate("/brepo")}
                        className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                      >
                        Blood Donors Lists
                      </li>
                      <li
                        onClick={() => navigate("/repo")}
                        className="px-4 py-2 hover:bg-red-500  hover:text-white cursor-pointer"
                      >
                        Blood Request Lists
                      </li>
                    </ul>
                  </div>
                )}
              </div>


              <div className="relative dropdown-portal">
                <button
                  className="hover:text-red-500"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  Blood Donation Portal
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                    <ul>
                      <li
                        onClick={() => navigate("/bfind")}
                        className="px-4 py-2 hover:bg-red-500  hover:text-white cursor-pointer"
                      >
                        Blood Finder
                      </li>
                      <li
                        onClick={() => navigate("/form")}
                        className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                      >
                        Form
                      </li>
                      <li
                        onClick={() => navigate("/eligibility")}
                        className="px-4 py-2 hover:bg-red-500  hover:text-white cursor-pointer"
                      >
                        Check Eligibility
                      </li>
                    </ul>
                  </div>
                )}
              </div>



              <div className="relative dropdown-resources">
                <button
                  className="hover:text-red-500"
                  onClick={() => setIsDp2Open((prev) => !prev)}
                >
                  Resources
                </button>
                {isDp2Open && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-lg">
                    <ul>
                      <li
                        onClick={() => navigate("/guide")}
                        className="px-4 py-2 hover:bg-red-500 hover:text-white    cursor-pointer"
                      >
                        Guide for Donation
                      </li>
                      <li
                        onClick={() => navigate("/ablood")}
                        className="px-4 py-2 hover:bg-red-500 hover:text-white   cursor-pointer"
                      >
                        About Blood
                      </li>
                      <li
                        onClick={() => navigate("/HelpLine")}
                        className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                      >
                        HelpLine
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" className=" hover:text-red-500">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className=" hover:text-red-500"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
