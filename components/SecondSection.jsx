"use client";

import { useEffect, useRef, useState } from "react";

const CombinedSection = () => {
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const targetNumber = 920;
  const duration = 2000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountAnimation();
            observer.disconnect(); // Run only once
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentCount = Math.min(
        Math.floor((progress / duration) * targetNumber),
        targetNumber
      );
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error("Video play failed:", error));
      setIsPlaying(true);
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(false);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => console.error("Video play failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleEnded = () => setIsPlaying(false);
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      videoElement.addEventListener("ended", handleEnded);
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("play", handlePlay);

      return () => {
        videoElement.removeEventListener("ended", handleEnded);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("play", handlePlay);
      };
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="container mx-auto max-w-7xl mt-75 lg:mt-30 flex flex-col gap-10"
    >
      {/* Top Row */}
      <div className="container w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 text-left">
        <h1 className="flex-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010205] font-semibold leading-[130%] tracking-[-1.44px]">
          Provide the best service with <br /> out of the box ideas
        </h1>
        <p className="flex-1 text-[15px] sm:text-[16px] text-[#878C91] mt-2 lg:mt-4 font-medium leading-[180%] max-w-2xl">
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of experience
          and a deep understanding of the ever-evolving online landscape, we stay at
          the forefront of industry trends and technologies.
        </p>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Black Card */}
        <div className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[438px] h-60 sm:h-72 md:h-80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-xl mx-auto">
          <div className="absolute inset-0 bg-black opacity-20 z-0 rounded-2xl"></div>
          <div className="relative z-10">
            <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
              {count}+
            </span>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Project finish with superbly
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 mt-4 flex-wrap">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center"
              ></div>
            ))}
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <span className="text-gray-300 text-2xl">+</span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[818px] xl:w-[850px] h-60 sm:h-72 md:h-80 bg-gray-300 rounded-2xl shadow-xl flex items-center justify-center cursor-pointer mx-auto mt-6 lg:mt-0"
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
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold tracking-widest opacity-80">
              HOW WE WORK
            </h2>
          </div>

          {/* Play/Pause Controls */}
          <div className="absolute -bottom-5 -right-5 flex flex-col items-center justify-center z-30">
            <img
              src={isPlaying ? "/images/pause.png" : "/images/play-button.png"}
              alt="play/pause"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="w-5 h-5 lg:w-8 lg:h-8 lg:ml-1 lg:-mb-17 -mb-11 cursor-pointer z-20"
            />
            <img
              src="/images/play-g.png"
              alt="Decorative"
              className="w-[70px] sm:w-[80px] md:w-[100px] h-auto object-contain cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedSection;
