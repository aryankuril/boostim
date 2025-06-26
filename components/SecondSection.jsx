"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Pause } from 'lucide-react'; // Using lucide-react for the pause icon

// App component serving as the main container for the UI
const App = () => {
  return (
    // Main container with light background and Inter font, ensuring full viewport height
    // <div className=" container min-h-screen bg-gray-50 font-inter p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center">
      <div className="container lg:mt-30 mt-70 ">
    {/* Top Section */}
      {/* < div className="container w-full gap-20 flex flex-row max-w-6xl text-left mb-10 md:mb-16 lg:mb-20"> */}
        <div className="container  w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 mb-10 md:mb-16 lg:mb-20 text-left">
        {/* Large Heading */}
        {/* <h1
  className="text-[48px]  text-[#010205] font-semibold leading-[130%] tracking-[-1.44px] mb-4 max-w-xl"
  style={{ fontFamily: 'Plus Jakarta Sans', leadingTrim: 'both', textEdge: 'cap' }}
> */}
  <h1
      className="text-3xl sm:text-4xl md:text-5xl text-[#010205] font-semibold leading-[130%] tracking-[-1.44px] max-w-xl"
      style={{ fontFamily: 'Plus Jakarta Sans' }}
    >
  Provide the best service with out of the box ideas
</h1>

        {/* Smaller Subtext */}
       <p
  className="text-[16px] text-[#878C91]  lg:mt-4 mt-1 font-medium leading-[180%] max-w-2xl"
  style={{ fontFamily: 'Plus Jakarta Sans', leadingTrim: 'both', textEdge: 'cap' }}
>
  we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. 
  With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of 
  industry trends and technologies.
</p>

      </div>

      {/* Main Content Area: Black Card, Logos, and Video */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-start gap-8 md:gap-12">
        {/* Left Column: Black Card and Company Logos */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full lg:w-auto">
          {/* Animated Black Card */}
          <AnimatedBlackCard targetNumber={920} />

          {/* Company Logos Section - Below or next to the black card */}
          {/* Arranged as a row below the black card on smaller screens, and flexible on larger screens */}
          
        </div>

        {/* Right Column: Hover Video */}
        <div className="flex-1 w-full lg:w-auto">
          <HoverVideoPlayer />
        </div>
      </div>
    </div>
  );
};

// Component for the Animated Black Card
const AnimatedBlackCard = ({ targetNumber }) => {
  const [count, setCount] = useState(0); // State for the animated number
  const duration = 2000; // Animation duration in milliseconds
  const start = useRef(null); // Ref to store the start time of the animation

  useEffect(() => {
    // Function to animate the counter
    const animate = (timestamp) => {
      if (!start.current) start.current = timestamp; // Set start time on first frame
      const progress = timestamp - start.current; // Calculate elapsed time

      // Calculate the current count based on progress
      const currentCount = Math.min(Math.floor((progress / duration) * targetNumber), targetNumber);
      setCount(currentCount);

      // Continue animation if not finished
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    // Start the animation
    requestAnimationFrame(animate);

    // Reset animation on unmount (optional, for re-renders if component unmounts)
    return () => {
      start.current = null; // Clear start time
      setCount(0); // Reset count
    };
  }, [targetNumber]); // Rerun effect if targetNumber changes

  return (
    // Card container with a dark background and rounded corners
    // The background is a gradient placeholder as the image is not provided yet
    <div className="container relative w-[438px] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-md h-60 sm:h-72 md:h-80 lg:h-60 xl:h-72 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden
                    bg-gradient-to-br from-gray-900 to-black shadow-xl">
      {/* Background overlay for visual effect, mimicking the image */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

      {/* Number and plus symbol */}
      <div className="relative z-10">
        <span className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-none">
          {count}+
        </span>
        {/* Smaller subtext below the number */}
        <p className="text-gray-300 text-sm sm:text-base mt-2">Project finish with superbly</p>
      </div>

      {/* Company Logos (placeholder circles) */}
      <div className="relative z-10 flex items-center gap-2 mt-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-20 h-20 sm:w-18 sm:h-18 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center">
            {/* Placeholder for small company logo or avatar */}
          </div>
        ))}
        {/* Plus sign for more logos */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <span className="text-gray-300 text-7xl">+</span>
        </div>
      </div>
    </div>
  );
};

// Component for the Hover Video Player
const HoverVideoPlayer = () => {
  const videoRef = useRef(null); // Ref to access the video DOM element
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback
  const [showControls, setShowControls] = useState(false); // State to show/hide pause button

  // Handle video playback on hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Video play failed:", error));
      setIsPlaying(true);
      setShowControls(true); // Show controls on hover
    }
  };

  // Pause video when mouse leaves
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      // Keep controls visible for a short duration or until explicitly hidden
      // For now, hide immediately
      setShowControls(false);
    }
  };

  // Toggle play/pause using the button
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => console.error("Video play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Adjust showControls state when video ends or is paused manually
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      videoElement.addEventListener('ended', handleEnded);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('play', handlePlay);

      return () => {
        videoElement.removeEventListener('ended', handleEnded);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  return (
    // Video container with rounded corners and a shadow
  <div className=" flex justify-center z-10">

  <div
    className="relative lg:w-[818px] w-[200%] h-60 sm:h-72 md:h-80 lg:h-60 xl:h-72 bg-gray-300 rounded-2xl shadow-xl flex items-center justify-center cursor-pointer"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >

    <video
      ref={videoRef}
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
    />

    {showControls && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          togglePlayPause();
        }}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-green-500 text-white shadow-lg"
      >
        <Pause size={24} />

          <img
      src="/images/play.png"
      alt="Decorative"
      className="absolute -bottom-5 -right-5 w-[100px] h-[100px] object-contain z-1000"
    />
 
      </button>
    )}

    {/* Center Text */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest opacity-80">
        HOW WE WORK
      </h2>
    </div>

    {/* Image stays bottom-right, controlled */}
    <img
     onClick={(e) => {
          e.stopPropagation();
          togglePlayPause();
        }}
      src="/images/play.png"
      alt="Decorative"
      className="absolute -bottom-5 -right-5 w-[100px] h-[100px] object-contain z-1000"
    />
  </div>

</div>


  );
};

export default App;
