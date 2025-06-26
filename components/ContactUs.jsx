"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [subject, setSubject] = useState("general");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const sendEmail = async (e) => {
  e.preventDefault();

  // First send email
  emailjs
    .send(
      "service_y2eid4a",
      "template_aqncdcg",
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: subject,
        message: formData.message,
      },
      "PIxZ6ToR73scATBvY"
    )
    .then(
      (result) => {
        console.log("Email Sent:", result.text);
        alert("Message sent successfully!");

        // Now, also store data in MongoDB
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, subject }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              console.log("Data saved to DB");
            } else {
              console.error("DB Save failed:", data.message);
            }
          })
          .catch((err) => console.error("DB Error:", err));

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.log("Email Failed:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
};

  return (
    <section className="min-h-screen px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-500 text-lg">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:h-[600px] bg-white shadow-lg rounded-2xl overflow-hidden">
          <div
            className="md:w-1/2 bg-cover bg-center text-white p-8 relative"
            style={{ backgroundImage: `url('/images/contact-bg.png')` }}
          >
            <div className="absolute inset-0 bg-black/70 z-0 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-[28px] font-semibold mb-2">
                Contact Information
              </h3>
              <p className="lg:mb-30 mb-6 text-[18px]">
                Say something to start a live chat!
              </p>

              <div className="space-y-5 text-[16px]">
                <div className="flex items-center space-x-4 lg:mb-10">
                  <img src="/icons/phone-w.png" alt="phone" className="w-5 h-5" />
                  <span>+1012 3456 789</span>
                </div>
                <div className="flex items-center space-x-4 lg:mb-10">
                  <img src="/icons/email-w.png" alt="email" className="w-5 h-5" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 lg:mb-40">
                  <img
                    src="/icons/location-w.png"
                    alt="location"
                    className="w-5 h-5"
                  />
                  <span>
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </span>
                </div>
              </div>

              <div className="flex space-x-4 mt-10">
                <img src="/icons/twitter-g.png" alt="social1" className="w-8 h-8" />
                <img src="/icons/instagram.png" alt="social2" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="md:w-1/2 p-8 bg-white">
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 lg:mt-5 mt-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 lg:mt-5 mt-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 border-b border-gray-300 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Select Subject?</p>
                <div className="flex flex-wrap gap-4">
                  {["General Inquiry", "Career Opportunities", "Billing & Payments"].map(
                    (option, i) => (
                      <label
                        key={i}
                        className="flex items-center space-x-2 cursor-pointer text-sm"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={option.toLowerCase()}
                          checked={subject === option.toLowerCase()}
                          onChange={() => setSubject(option.toLowerCase())}
                          className="accent-black"
                        />
                        <span>{option}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-5">Message</label>
                <textarea
                  rows="2"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write a message"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex lg:ml-85 px-5 py-3 justify-center items-center gap-[25px] rounded-[70px] bg-[#99EA48] text-black font-semibold hover:bg-[#84CC16] transition"
              >
                Get Started
                <span className="text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
