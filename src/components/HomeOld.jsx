import React from 'react'

const Home = () => {
  return (
  
    <div className="relative h-screen w-full grid grid-cols-1 grid-rows-1 p-2">
      <div className="bg-gray-background w-[500px] h-full col-start-1 row-start-1 justify-self-center">
      </div>
      <div className="col-start-1 row-start-1 z-10 flex flex-col items-center text-center mt-16 ">

        <h1 className="text-5xl md:text-6xl font-stretch-200% font-normal leading-tight">
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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlkNMgDl4MS6eCHD0tOKPhrtIhur1YNykO3OB6Vgwpkl2LhEE"
            alt="Camera"
            className="w-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home