"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    servicesRequired: "",
    estimatedBudget: "",
    projectTimeline: "",
    projectDescription: "",
  });

  const services = [
    "Civil Works",
    "Electrical Works",
    "Building & Renovation",
    "General Supplies",
    "Interior Design",
    "Plumbing Services",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API or email)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center py-8 px-4 sm:px-16 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 sm:px-20 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <Image src="/images/saanal.jpg" alt="Saanal Logo" width={50} height={50} className="rounded-full shadow-md" />
          <h1 className="text-2xl font-bold ml-4 tracking-wide text-blue-700">Saanal Suppliers Limited</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <Link href="/about" className="hover:text-blue-600 transition duration-300">About Us</Link>
          <a href="#services" className="hover:text-blue-600 transition duration-300">Services</a>
          <a href="#offerings" className="hover:text-blue-600 transition duration-300">Our Offerings</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-center sm:text-left mt-24 px-8 sm:px-20 w-full flex-1">
        
        {/* Hero Section */}
        <div className="relative w-full h-[600px] overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-indigo-500">
          <Image
            src="/images/constructionn.jpeg"
            alt="Saanal Construction"
            width={1600}
            height={800}
            className="transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
              Building Trust, Delivering Excellence
            </h2>
          </div>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 text-center sm:text-left leading-relaxed">
          At <span className="font-semibold text-blue-700">Saanal</span>, we are committed to providing top-tier construction services with unmatched expertise, ensuring your projects succeed from start to finish.
        </p>

        {/* Quote Request Form */}
        <h2 className="text-4xl font-semibold text-blue-700 mt-8 mb-8">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-lg font-semibold text-gray-800">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-lg font-semibold text-gray-800">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company Name */}
          <div className="mb-6">
            <label htmlFor="companyName" className="block text-lg font-semibold text-gray-800">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Services Required */}
          <div className="mb-6">
            <label htmlFor="servicesRequired" className="block text-lg font-semibold text-gray-800">
              Services Required *
            </label>
            <select
              id="servicesRequired"
              name="servicesRequired"
              value={formData.servicesRequired}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Estimated Budget */}
          <div className="mb-6">
            <label htmlFor="estimatedBudget" className="block text-lg font-semibold text-gray-800">
              Estimated Budget *
            </label>
            <input
              type="text"
              id="estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Project Timeline */}
          <div className="mb-6">
            <label htmlFor="projectTimeline" className="block text-lg font-semibold text-gray-800">
              Project Timeline
            </label>
            <input
              type="text"
              id="projectTimeline"
              name="projectTimeline"
              value={formData.projectTimeline}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <label htmlFor="projectDescription" className="block text-lg font-semibold text-gray-800">
              Project Description *
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="rounded-full bg-blue-600 text-white px-8 py-3 text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-4 bg-blue-700 text-white py-8 mt-16">
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-sm">&copy; 2025 Saanal. All rights reserved.</p>
        
        {/* Contact Email */}
        <a href="mailto:saanalsuppliers@gmail.com" className="text-white text-lg font-semibold hover:underline transition duration-300">
          saanalsuppliers@gmail.com
        </a>
      </footer>
    </div>
  );
}
