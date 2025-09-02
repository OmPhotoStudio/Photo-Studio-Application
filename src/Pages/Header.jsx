import React from "react";
import { NavLink } from "react-router-dom";
import { PhoneIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div>
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full" />{" "}
          <span className="font-bold text-lg">Photopio</span>
        </div>
        <div className="hidden md:flex space-x-12 text-sm font-medium">
          {/* Map over the links array to create each NavLink */}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-black hover:text-cyan-600 transition-colors duration-200 relative group font-medium"
            >
              {/* Use a function as a child to get the 'isActive' state */}
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>
        <button className="flex items-center text-sm font-medium border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-100">
          Contact
          <PhoneIcon className="h-4 w-4 ml-3" />
        </button>
      </nav>
    </div>
  );
};

export default Header;