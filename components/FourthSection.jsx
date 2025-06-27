"use client";
import React, { useState,useEffect } from 'react';
// import { ArrowLeft, ArrowRight } from "lucide-react";

// You can replace this with your actual review data
const reviews = [
  {
    text: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    reviewer: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "https://placehold.co/60x60/d1d5db/ffffff?text=AV", // Placeholder for avatar
  },
  {
    text: "This team consistently delivers outstanding results. Their attention to detail and innovative strategies have significantly boosted our market presence and engagement. ",
    reviewer: "Jane Doe",
    title: "Marketing Director, GlobalTech",
    avatar: "https://placehold.co/60x60/d1d5db/ffffff?text=JD",
  },
  {
    text: "Working with them has been a game-changer for our business. They understand our needs perfectly and provide solutions that are both creative and effective. We've seen remarkable growth since partnering with them.",
    reviewer: "John Smith",
    title: "Founder, Innovate Solutions",
    avatar: "https://placehold.co/60x60/d1d5db/ffffff?text=JS",
  },
  {
    text: "Their expertise in digital marketing is unparalleled. They crafted a comprehensive strategy that not only met but exceeded our expectations. Our ROI has never been better!",
    reviewer: "Emily White",
    title: "Operations Manager, FutureCorp",
    avatar: "https://placehold.co/60x60/d1d5db/ffffff?text=EW",
  },
  {
    text: "A truly professional and dedicated team. They took the time to understand our vision and translated it into a successful campaign. The results speak for themselves.",
    reviewer: "David Green",
    title: "Creative Lead, Design Hub",
    avatar: "https://placehold.co/60x60/d1d5db/ffffff?text=DG",
  },
];

const FourthSection = () => {
const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const currentReview = reviews[currentReviewIndex];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextReview();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentReviewIndex]);

  const handleNextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };
  return (
      <div className="  lg:mt-20 mt-10 flex py-10 items-center justify-center font-inter px-5 sm:px-5 lg:px-10  ">
      <div className="container max-w-4xl w-full  px-0 sm:px-0 md:px-5 lg:px-10  ">
        {/* Review Content */}
        {/* Added a fixed height to prevent layout shifts when review text length changes */}
       <div className="text-[#010205] font-['Plus_Jakarta_Sans'] font-semibold leading-[160%] tracking-[-1.08px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] mb-8 sm:mb-10 h-auto flex items-start justify-start">
  &quot;{currentReview.text}&quot;
</div>


        {/* Reviewer Info and Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:mt-10 mt-27 sm:mt-8">
          <div className="flex items-center mb-6 sm:mb-0">
            {/* Avatar Placeholder */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <img src={currentReview.avatar} alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/60x60/d1d5db/ffffff?text=AV'; }} />
            </div>
            <div className="ml-4">
              <p className="text-lg sm:text-xl text-left font-semibold text-gray-900">
                {currentReview.reviewer}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                {currentReview.title}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            {/* Previous Button */}
          <button
  className="py-4 px-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
  onClick={handlePreviousReview}
  aria-label="Previous Review"
>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-10"
                fill="none"
                viewBox="0 0 24 20"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            {/* Current Review Count */}
            <span className="text-gray-700 text-lg sm:text-xl font-medium w-20 text-center">
              {String(currentReviewIndex + 1).padStart(2, '0')}/{String(reviews.length).padStart(2, '0')}
            </span>

            {/* Next Button */}
            <button
              className="py-4 px-4  rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center"
              onClick={handleNextReview}
              aria-label="Next Review"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSection