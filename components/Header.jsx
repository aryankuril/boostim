"use client";

import { useState } from "react";
import { Menu,X, ChevronDown, Bell } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';




// import { Button } from "@/components/ui/button"; 

export const Header = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
        <header className="container w-full flex items-center py-4 relative">
  
  {/* Left - Logo */}
  <div className="flex items-center space-x-2 w-[200px]">
    <Image src="/images/logo.png" alt="boostim logo" width={130} height={33} />
  </div>

  {/* Center - Navigation */}
  <div className="flex-grow">
    <nav className="hidden lg:flex items-center space-x-6">
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 text-black">
        <span>Service</span>
        <ChevronDown size={14} />
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 text-black">
        <span>Agency</span>
        <ChevronDown size={14} />
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 text-black">
        <span>Case study</span>
        <ChevronDown size={14} />
      </div>
      <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 text-black">
        <span>Resources</span>
        <ChevronDown size={14} />
      </div>
      <div className="cursor-pointer hover:text-gray-700 text-black">Contact</div>
    </nav>
  </div>

  {/* Right - Actions */}
  <div className="hidden lg:flex items-center space-x-4">
    <Link href="/contact-us">
      <button className="rounded-full px-5 py-2 border text-black border-black hover:bg-black hover:text-white transition">
        Get started
      </button>
    </Link>

    <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center cursor-pointer">
      <Bell size={16} color="white" />
    </div>
  </div>

  {/* Mobile Menu Icon */}
  <div className="lg:hidden flex items-center">
    {mobileMenuOpen ? (
      <X size={22} className="cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
    ) : (
      <Menu size={22} className="cursor-pointer" onClick={() => setMobileMenuOpen(true)} />
    )}
  </div>

  {/* Mobile Menu Dropdown */}
  {mobileMenuOpen && (
    <div className="fixed inset-0 w-full h-full bg-white z-50 flex flex-col p-6 lg:hidden">
      <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
        <X size={28} />
      </div>
      <div className="flex flex-col space-y-6 mt-16 text-left">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-gray-700 text-xl">
          <span>Service</span>
          <ChevronDown size={18} />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-gray-700 text-xl">
          <span>Agency</span>
          <ChevronDown size={18} />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-gray-700 text-xl">
          <span>Case study</span>
          <ChevronDown size={18} />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-black text-gray-700 text-xl">
          <span>Resources</span>
          <ChevronDown size={18} />
        </div>
        <Link href="/contact-us">
          <button className="mt-8 rounded-full px-6 py-2 border text-white bg-black hover:bg-white border-black hover:text-black transition">
            Get started
          </button>
        </Link>
      </div>
    </div>
  )}

</header>

  );
};
