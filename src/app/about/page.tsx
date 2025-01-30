"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 500, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 sm:px-20 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <Image src="/images/saanal.jpg" alt="Saanal Logo" width={50} height={50} className="rounded-full shadow-md" />
          <h1 className="text-2xl font-bold ml-4 tracking-wide text-blue-700">Saanal Suppliers Limited</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link>
          <a href="#services" className="hover:text-blue-600 transition duration-300">Services</a>
          <a href="#offerings" className="hover:text-blue-600 transition duration-300">Our Offerings</a>
          <a href="#contact" className="hover:text-blue-600 transition duration-300">Contact Us</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-center sm:text-left mt-24 px-8 sm:px-20 w-full flex-1">
        {/* Hero Section */}
        <div className="relative w-full sm:w-full h-[600px] overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-indigo-500">
          <Image
            src="/images/constructionn.jpeg"
            alt="Saanal Construction"
            layout="intrinsic"
            width={1600}
            height={800}
            objectFit="cover"
            priority
            className="transition-opacity duration-1000 ease-in-out"
            style={{ opacity }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center drop-shadow-lg">
              About Us
            </h2>
          </div>
        </div>

        <p className="text-lg text-gray-700 max-w-3xl mt-6 text-center sm:text-left leading-relaxed">
          At <span className="font-semibold text-blue-700">Saanal</span>, we are committed to providing top-tier construction services with unmatched expertise, ensuring your projects succeed from start to finish.
        </p>

        <section className="mt-20 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Our Story</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Our Mission</h3>
              {/* Fixed apostrophe issue */}
              <p className="text-gray-600 mt-2">
                To deliver exceptional construction services that exceed our clients&apos; expectations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Our Vision</h3>
              <p className="text-gray-600 mt-2">To be the leading construction company in the region, known for our quality and reliability.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-4 bg-blue-700 text-white py-8 mt-16">
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-sm">&copy; 2025 Saanal. All rights reserved.</p>
      </footer>
    </div>
  );
}
