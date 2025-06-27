import React from "react";
import Image from "next/image";

export const  Footer = () => {
  return (
    <footer className=" py-12 lg:px-4">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">

        {/* Left Section - Logo + Text + Social */}
        <div className="space-y-6">
          <Image src="/images/logo.png" alt="Boostim Logo" width={120} height={40} />

         <p className="text-[#9B9B9C] font-['Roboto'] lg:w-[450px] text-[14px] font-normal leading-[24px] ">
  We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
</p>


          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Image src="/icons/facebook.svg" alt="Facebook" width={40} height={40} />
            <Image src="/icons/twitter.svg" alt="Twitter" width={40} height={40} />
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            <Image src="/icons/instagram.png" alt="Instagram" width={40} height={40} />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-1 lg:ml-70 ml-1 md:ml-45  ">
          <h4 className="text-[#010205] font-semibold text-[18px] mt-1 mb-7">Navigation</h4>
          <ul className="space-y-2 text-[#878C91] text-[14px]">
            <li><a href="#">Service</a></li>
            <li><a href="#">Agency</a></li>
            <li><a href="#">CaseStudy</a></li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* License Links */}
        <div className="space-y-4 ml-30 md:ml-20 lg:ml-30 -mt-54 sm:mt-0"> 
          <h4 className="text-[#010205] font-semibold text-[18px] mt-1 mb-7">Licence</h4>
          <ul className="space-y-2 text-[#878C91] text-[14px]">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Copyright</a></li>
            <li><a href="#">Email Address</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-[#010205] font-semibold text-[18px] mt-1 mb-7">Contact</h4>
          <ul className="space-y-4 text-[#878C91] text-[14px]">
            <li className="flex items-center gap-3">
              <Image src="/icons/phone.png" alt="Phone" width={16} height={16} />
              (406) 555-0120
            </li>
            <li className="flex items-center gap-3">
              <Image src="/icons/mail.png" alt="Email" width={16} height={16} />
              Hey@boostim.com
            </li>
            <li className="flex items-center gap-3">
              <Image src="/icons/add.png" alt="Location" className="-mt-5" width={12} height={12} />
              2972 Westheimer Rd. Santa Ana,<br />Illinois 85486
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

// export default Footer