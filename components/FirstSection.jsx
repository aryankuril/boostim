"use client";
import { useEffect, useState } from "react";

const FirstSection = () => {
  const [count, setCount] = useState(0);

  // Count-up animation
  useEffect(() => {
  let start = 0;
  const end = 230;
  const duration = 500; // Total time in ms
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Clamp between 0 - 1
    const value = Math.floor(progress * end);
    setCount(value);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, []);

  return (
    
  <section className="container mt-10 flex  flex-col lg:flex-row items-center justify-between max-w-[1400px] mx-auto  relative ">

  {/* LEFT CONTENT */}
  <div className="flex-1 max-w-xl text-center lg:text-left z-10">
    <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[100%] font-semibold tracking-[-2px] text-[#010205] mb-8 font-['Plus Jakarta Sans']">
      Stay ahead of the curve with our forward-thinking
    </h1>

    <p className="text-gray-600 mb-8 text-base sm:text-lg">
      An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
    </p>

    <div className="flex flex-row sm:flex-row items-center gap-6 mb-10 justify-center sm:justify-start">
      <button className="bg-black text-white px-6 py-3 gap-3 rounded-full hover:bg-gray-900 transition flex items-center">
        Schedule Call
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a href="#" className="text-black underline font-medium mt-1 lg:mt-0">
        View Case Study
      </a>
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-10 ">
      <p className="text-black text-[14px] text-center sm:text-left">
        Trusted by the world's <br /> biggest brands
      </p>
      <div className="flex items-center gap-8">
        <img src="/images/Company logo-1.png" alt="Logo 1" className="h-6 sm:h-8" />
        <img src="/images/Company logo-2.png" alt="Logo 2" className="h-6 sm:h-8" />
        <img src="/images/Company logo-3.png" alt="Logo 3" className="h-6 sm:h-8" />
      </div>
    </div>
  </div>
                {/* right section */}
      {/* <div className=" -mr-100 lg:mr-0 flex justify-center items-center relative"> */}
      <div className="flex-1 -mr-5 lg:mr-0 relative w-full right-10  gap-10 mt-45   lg:mt-0 flex justify-center items-center">       
        {/* Semi Circle Decorative Image */}
         <div className="absolute -top-33 lg:-top-56 md:-top-34 lg:right-62 right-38 md:right-60  w-42 lg:w-65 md:w-43 lg:px-0  ">
        <img src="/images/Rectangle.png" alt="Decorative Shape" className="w-64 md:w-80 relative z-0" />
        

        {/* Trending Logo */}
        </div>
{/* <div className="absolute -top-65 right-20  md:w-55 "> */}
        <img src="/images/trending.png" alt="Trending Icon" className="absolute -top-40 lg:-top-65 md:-top-40 right-42 lg:right-65 md:right-62 w-22 lg:w-35 md:w-20 z-10" />
        {/* </div> */}
        {/* Number and Text Box */}
        <div className="absolute -top-34 lg:-top-56   -right-6 lg:-right-6 bg-white rounded-lg p-4 shadow-md text-center h-39 lg:h-59 w-41 md:w-63">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-1 sm:mt-1 md:mt-1 mb-1 sm:mb-1 lg:mb-5 md:mb-1">{count}+</h2>
          <p className="text-gray-600 text-sm lg:text-[20px] mt-1  leading-tight">
            some big companies that we work with, and trust us very much
          </p>
            {/* Progress Bar */}
  <div className="w-full h-2 lg:mt-5 mt-3  bg-gray-300 rounded-full overflow-hidden">
    <div
      className="h-full bg-black transition-all duration-1000"
      style={{
        width: `${(count / 230) * 70}%`, // converts count to % of max 230
      }}
    ></div>
  </div>
        </div>

        {/* Black Card Image */}
        <img src="/images/growth.png" alt="Black Card" className="absolute -bottom-60 -right-7  md:w-[450px] lg:w-[550px] h-[210px]" />
      </div>
      {/* </div> */}
      
    </section>
  );
};

export default FirstSection;
