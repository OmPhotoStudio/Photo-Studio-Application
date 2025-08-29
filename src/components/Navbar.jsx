import React, { Component } from "react";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  return (
    <div>
      {/* <nav
        className={`w-full z-50 transition-all duration-300 fixed top-0  ${
          // fixed top-0
          scrolled
            ? "bg-gray-800/70 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              </div>
              <span className="text-xl font-bold">
                Logo !!
              </span>
            </div>
 
            
 
            <div className="hidden md:flex items-center space-x-8">

              <NavLink
                to="/"
                className={`${
                  scrolled
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-600"
                } transition-colors duration-200 relative group font-medium`}
              >
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-cyan-400" : "bg-cyan-600"
                  } transition-all group-hover:w-full`}
                ></span>
              </NavLink>
 
              <NavLink
                to="/products"
                className={`${
                  scrolled
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-600"
                } transition-colors duration-200 relative group font-medium`}
              >
                Products
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-cyan-400" : "bg-cyan-600"
                  } transition-all group-hover:w-full`}
                ></span>
              </NavLink>
 
              <NavLink
                to="/services"
                className={`${
                  scrolled
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-600"
                } transition-colors duration-200 relative group font-medium`}
              >
                Services
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-cyan-400" : "bg-cyan-600"
                  } transition-all group-hover:w-full`}
                ></span>
              </NavLink>
 
              <NavLink
                to="/aboutUs"
                className={`${
                  scrolled
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-700 hover:text-cyan-600"
                } transition-colors duration-200 relative group font-medium`}
              >
                About Us
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                    scrolled ? "bg-cyan-400" : "bg-cyan-600"
                  } transition-all group-hover:w-full`}
                ></span>
              </NavLink>

              <NavLink
              to="/login"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </NavLink>
            
            </div>
          </div>
        </div>
      </nav> */}

      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full" />{" "}
          <span className="font-bold text-lg">Photopio</span>
        </div>
        <div className="hidden md:flex space-x-12 text-sm font-medium">

          <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink>

          {/* <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink> */}

          <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink>

          {/* <NavLink
            to="/"
            className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
          </NavLink> */}

        </div>
        <button className="text-sm font-medium border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-100">
          Book a Call
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
