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
    <h1 className="text-[36px]  sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[100%] font-semibold tracking-[-2px] text-[#010205] mb-8 ">
      Stay ahead of the curve with our forward-thinking
    </h1>

    <p className="text-[#878C91] mb-8 text-base sm:text-lg">
      An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
    </p>

    <div className="flex flex-row sm:flex-row items-center lg:gap-10 gap-8  mb-10 justify-center sm:justify-start">
      <button className="bg-black text-white px-6 py-3 lg:gap-8 gap-2 rounded-full hover:bg-gray-900 transition flex items-center">
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
   <p className="text-[#010205] text-[14px] font-semibold leading-[160%] text-center sm:text-left font-['Plus_Jakarta_Sans']">
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
      <div className="flex-1 relative w-full gap-10 mt-45 lg:mt-0 flex justify-center items-center 
  -mr-5 lg:mr-10 right-10 lg:-right-3 md:right-80 md:mx-auto">
  
  {/* Semi Circle Decorative Image */}
  <div className="absolute -top-33 xl:-top-56 lg:-top-47 md:-top-34 lg:right-56 xl:right-62 right-38 md:right-60 w-42 lg:w-55 xl:w-65 md:w-43 lg:px-0">
    <img src="/images/Rectangle.png" alt="Decorative Shape" className="w-64 md:w-80 relative z-0" />
  </div>

  {/* Trending Logo */}
  <img src="/images/trending.png" alt="Trending Icon" className="absolute -top-40 xl:-top-65 lg:-top-55 md:-top-40 right-42 xl:right-65 lg:right-60 md:right-62 w-22 xl:w-35 lg:w-30 md:w-20 z-10" />

  {/* Number and Text Box */}
  <div className="absolute -top-34 lg:-top-48 xl:-top-56 -right-6 lg:-right-6 bg-white rounded-lg p-4 shadow-md text-center h-39 lg:h-50 xl:h-59 w-41 xl:w-63 lg:w-58 md:w-63">
    <h2 className="text-4xl text-[#010205] sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-1 mb-1">{count}+</h2>
    <p className="text-gray-600 text-sm lg:text-[20px] mt-1 leading-tight">
      some big companies that we work with, and trust us very much
    </p>
    <div className="w-full h-2 xl:mt-7 lg:mt-3 mt-3 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-black transition-all duration-1000" style={{ width: `${(count / 230) * 70}%` }}></div>
    </div>
  </div>

  {/* Black Card Image */}
  <img src="/images/growth.png" alt="Black Card" className="absolute -bottom-60 -right-7 md:w-[450px] lg:w-[550px] h-[210px]" />

</div>

      {/* </div> */}
      
    </section>
  );
};

export default FirstSection;
