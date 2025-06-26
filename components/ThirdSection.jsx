"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ThirdSection = () => {
  const scrollRef = useRef(null);
 
  const sectionRef = useRef(null); // Ref for the entire ThirdSection to detect its vertical position

  useEffect(() => {
    const handleWheel = (event) => {
      const sectionElement = sectionRef.current;
      const scrollableElement = scrollRef.current;

      // Ensure both refs are attached to their respective DOM elements
      if (!sectionElement || !scrollableElement) {
        return;
      }

      // Get the bounding rectangle of the entire section to determine its position relative to the viewport
      const sectionRect = sectionElement.getBoundingClientRect();

      // Determine if the section should currently handle horizontal scrolling.
      // This condition activates the horizontal scroll when:
      // 1. The section's top is at or above the viewport's top, and it's still visible (suggesting it's "pinned" or actively in view).
      // 2. The section is currently entering the viewport from the bottom.
      const isActiveForHorizontalScroll = (
        (sectionRect.top <= 0 && sectionRect.bottom > 0) ||
        (sectionRect.top > 0 && sectionRect.top < window.innerHeight)
      );

      // Calculate the maximum possible horizontal scroll position
      const maxScrollLeft = scrollableElement.scrollWidth - scrollableElement.clientWidth;

      // Determine the vertical scroll delta (how much the mouse wheel scrolled)
      const deltaY = event.deltaY;

      // If the section is active for horizontal scrolling, and there's content to scroll horizontally
      if (isActiveForHorizontalScroll && maxScrollLeft > 0) {
        let preventVerticalScroll = false; // Flag to decide if vertical page scroll should be prevented

        // Scrolling down (deltaY > 0)
        if (deltaY > 0) {
          // If the horizontal content is not yet fully scrolled to the right
          if (scrollableElement.scrollLeft < maxScrollLeft) {
            preventVerticalScroll = true; // Prevent the default vertical page scroll
            scrollableElement.scrollLeft += deltaY; // Apply vertical delta to horizontal scroll
            // Clamp scrollLeft to prevent overshooting beyond the maximum scroll position
            scrollableElement.scrollLeft = Math.min(maxScrollLeft, scrollableElement.scrollLeft);
          }
        }
        // Scrolling up (deltaY < 0)
        else if (deltaY < 0) {
          // If the horizontal content is not yet fully scrolled to the left
          if (scrollableElement.scrollLeft > 0) {
            preventVerticalScroll = true; // Prevent the default vertical page scroll
            scrollableElement.scrollLeft += deltaY; // Apply vertical delta to horizontal scroll
            // Clamp scrollLeft to prevent overshooting below the minimum scroll position (0)
            scrollableElement.scrollLeft = Math.max(0, scrollableElement.scrollLeft);
          }
        }

        // If we decided to handle the scroll horizontally, prevent the browser's default vertical scroll.
        // This ensures the page doesn't scroll vertically while the horizontal content is being scrolled.
        if (preventVerticalScroll) {
          event.preventDefault();
        }
      }
    };

    // Add the wheel event listener to the window.
    // passive: false is crucial as it allows `event.preventDefault()` to work,
    // enabling the custom scroll behavior.
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup function: remove the event listener when the component unmounts
    // This prevents memory leaks and ensures the listener is only active when the component is mounted.
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
  const cards = [
    { title: "AI Corporation. 2023", subtitle: "AI Wave - AI Chatbot Mobile " },
    { title: "Lancer Corporation. 2023", subtitle: "App Lancer - Freelance " },
    { title: "Tech Solutions. 2024", subtitle: "Quantum Analytics Platform" },
    { title: "Global Innovators. 2024", subtitle: "VR Learning Experience" },
    { title: "Future Systems. 2025", subtitle: "Smart Home Automation" },
    { title: "Data Insights. 2025", subtitle: "Predictive Marketing Suite" },
  ];

  return (
<div ref={sectionRef} className="container flex justify-center lg:mt-30 mt-20">
  {/* Main Card with Background Image and Rounded Corners */}
  <div
    className="container w-full max-w-[926px] rounded-[20px] overflow-hidden relative flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 text-white"
    style={{
      backgroundImage: "url('/images/card-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
       <h1 className="text-white text-center text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[130%] tracking-[-0.045em] mb-8 sm:mb-12">
      Real-world examples of how we have helped companies achieve their marketing objectives.
    </h1>


        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All Work ", "UI/UX Design ", "Digital Marketing", "Branding"].map((text) => (
            <button
  key={text}
  className="px-6 py-3 rounded-full border border-white text-white text-sm font-medium transition-colors duration-300 focus:outline-none hover:bg-[#99CF63] hover:text-black"
>
  {text}
</button>

          ))}
        </div>

        {/* Circular Progress and Cards in One Scrollable Row */}
    <div
  ref={scrollRef}
  className="flex space-x-8 w-full pb-4 overflow-x-auto scrollbar-hide"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
  <style jsx>{`
    div::-webkit-scrollbar {
      display: none;
    }
  `}</style>

  {/* CD Image with Button */}
  <div className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 bg-gray-200 rounded-full flex items-center justify-center p-4 shadow-lg relative overflow-hidden">
    
    {/* CD Image */}
    <img
      src="/images/cd.png" // Add correct path to your cd.png
      alt="CD"
      className="absolute inset-0 w-full h-full object-contain"
    />

    {/* Button */}
    {/* <button className="bg-green-500 text-black px-6 py-2 rounded-full z-10">
      See Details
    </button> */}
  </div>



  {/* Scrollable Cards */}
  {cards.map((card, index) => (
    <div
      key={index}

  className="flex-shrink-0 w-72 md:w-80 h-64 md:h-72 bg-[#C3C3C3] rounded-2xl flex flex-col justify-between p-6 border-10 border-[#C3C3C3] shadow-lg relative"
  // style={{
  //   border: "10px  red solid",
  // }}
>

    
      <div className="text-white text-[17px] mb-2">{card.title}</div>
      <div className="flex-grow bg-[#C3C3C3] rounded-lg  mb-4"></div>
      <div className="text-white text-[20px] font-semibold">{card.subtitle}</div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default ThirdSection;
