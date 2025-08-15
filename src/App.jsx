import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full" />{" "}
          {/* Placeholder Logo */}
          <span className="font-bold text-lg">Photopio</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="text-violet-600">
            Home
          </a>
          <a href="#">Pages</a>
          <a href="#">Proofgallery</a>
          <a href="#">Photoshoots</a>
        </div>
        <button className="text-sm font-medium border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-100">
          Youtube
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center mt-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Where creative process <br /> happens
        </h1>
        <p className="text-gray-500 mt-3 max-w-md text-sm">
          Your creativity, our inspiration. Whatever your story, set it free.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full shadow hover:shadow-lg transition">
          Get in Touch
        </button>

        {/* Image / Illustration */}
        <div className="mt-10 relative">
          {/* Decorative doodles - can be replaced with SVGs */}
          {/* <span className="absolute -left-12 top-10 text-gray-400 text-xl">
            *
          </span>
          <span className="absolute -right-12 bottom-8 text-gray-400 text-xl">
            *
          </span> */}

          {/* Placeholder camera image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlkNMgDl4MS6eCHD0tOKPhrtIhur1YNykO3OB6Vgwpkl2LhEE"
            alt="Camera"
            className="w-56 "
          />
        </div>

      </main>
    </div>
  );
}
