import React from 'react'

const SixthSection = () => {
  // Data for the cards to make it dynamic and reusable
  // const cardsData = [
  //   {
  //     dotColor: 'bg-blue-500', // Corresponding to the image
  //     readTime: '5 min read',
  //     title: 'How a Digital Marketing Agency Can Boost Your Business',
  //     description: 'We are the top digital marketing agency for branding corp. We offer a full rang engine...',
  //   },
  //   {
  //     dotColor: 'bg-orange-500', // Corresponding to the image
  //     readTime: '5 min read',
  //     title: 'The Latest Trends and Strategies with a Digital Marketing Agency',
  //     description: 'Working with this digital marketing agency has been a true partnership. They have tak...',
  //   },
  //   {
  //     dotColor: 'bg-purple-500', // Corresponding to the image
  //     readTime: '5 min read',
  //     title: 'Maximizing ROI with the Expertise of a Digital Marketing Agency',
  //     description: 'What sets the digital marketing agency apart is their commitment to transparency a...',
  //   },
  // ];
  return (
 <section className="max-w-7xl mx-auto  px-2 sm:px-0 lg:px-10   font-['Plus_Jakarta_Sans']">
      
      {/* Top Heading + Subtext + Button */}
      <div className="container flex flex-col lg:mt-30 mt-20 lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#010205] leading-[130%] tracking-[-0.03em] max-w-2xl">
          Digital Marketing & SEO Services<br />That Grow Traffic & Increase Revenue
        </h2>

        {/* Subtext + Button */}
        <div className="flex flex-col items-start mt-5 gap-10">
          <p className="text-[#878C91] text-[16px] font-medium leading-[180%] max-w-md overflow-hidden ">
            We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
          </p>
        <button className="border border-black rounded-full  px-[36px] py-[10px] text-sm hover:bg-black hover:text-white transition">
  See more
</button>

        </div>
      </div>

      {/* Cards Grid */}
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">


  {/* Card Example */}
 


    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between  h-[280px] border border-gray-200">
          <div className="flex items-center justify-between mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs text-gray-500">5 min read</span>
          </div>
        <h3 className="text-[#010205] font-['Plus_Jakarta_Sans'] text-[20px] lg:text-[26px]  max-w-[90%] sm:max-w-[300px] font-semibold leading-[120%] tracking-[-0.03em] mb-4">
  How a Digital Marketing Agency Can Boost Your Business
</h3>

          <p className="text-[12px] lg:text-sm text-[#878C91] mb-15  lg:mb-6 mt-8 w-[200px]">
            We are the top digital marketing agency for branding corp. We offer a full range engine...
          </p>
          <div className="flex justify-end -mt-15 ">
            <button className="w-16 h-9  rounded-full border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition">
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

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between  h-[280px] border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="text-xs text-gray-500">5 min read</span>
          </div>
       <h3 className="text-[#010205] font-['Plus_Jakarta_Sans'] text-[20px] lg:text-[26px]  max-w-[90%] sm:max-w-[300px] font-semibold leading-[120%] tracking-[-0.03em] mb-4">
            The Latest Trends and Strategies with a Digital Marketing Agency
          </h3>
           <p className="text-[12px] lg:text-sm text-[#878C91] mb-15  lg:mb-6 mt-8 w-[200px]">
            Working with this digital marketing agency has been a true partnership. They have tak...
          </p>
          <div className="flex justify-end -mt-15 ">
            <button className="w-16 h-9  rounded-full border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition">
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

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between h-[280px] border border-gray-200">
          <div className="flex items-center justify-between ">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <span className="text-xs text-gray-500">5 min read</span>
          </div>
        <h3 className="text-[#010205] font-['Plus_Jakarta_Sans'] text-[20px] lg:text-[26px]  max-w-[90%] sm:max-w-[300px] font-semibold leading-[120%] tracking-[-0.03em] mb-4">
            Maximizing ROI with the Expertise of a Digital Marketing Agency
          </h3>
           <p className="text-[12px] lg:text-sm text-[#878C91] mb-15  lg:mb-6 mt-8 w-[200px]">
            What sets this digital marketing agency apart is their commitment to transparency a...
          </p>
          <div className="flex justify-end -mt-15 ">
            <button className="w-16 h-9  rounded-full border border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition">
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
    </section>
  )
}

export default SixthSection