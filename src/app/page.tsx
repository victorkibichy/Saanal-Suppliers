"use client"; // Add this at the top of your file

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(1 - scrollPosition / 500, 0); // Adjust 500 for the fade speed
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="row-start-1 w-full flex justify-between items-center px-8 sm:px-20">
        <div className="flex items-center">
          {/* Logo Image */}
          <Image
            src="/images/saanal.jpg" // Replace with your logo's image path
            alt="Saanal Logo"
            width={40} // Adjust the width of the logo
            height={40} // Adjust the height of the logo
          />
          {/* Company Name */}
          <h1 className="text-2xl font-bold ml-4">Saanal Suppliers Limited</h1>
        </div>
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <div className="relative w-full sm:w-full h-[600px] overflow-hidden rounded-lg shadow-lg">
          {/* Set a fixed size for the image */}
          <Image
            src="/images/constructionn.jpeg" // Correct image path
            alt="Saanal Construction"
            layout="intrinsic" // Intrinsic layout for controlled size
            width={1200} // Increased width for a larger image
            height={800} // Increased height for a larger image
            objectFit="cover" // Ensure the image covers the space without distortion
            priority
            className="transition-opacity duration-1000 ease-in-out"
            style={{ opacity }} // Apply dynamic opacity based on scroll
          />
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mt-8">
          Building Trust, Delivering Excellence
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl">
          At Saanal, we are committed to providing top-tier construction services combined with unparalleled expertise, ensuring your projects are successful from start to finish.
        </p>

        <a
          className="rounded-full bg-blue-600 text-white px-6 py-3 text-sm sm:text-base hover:bg-blue-700"
          href="#contact"
        >
          Contact Us
        </a>
      </main>

      <footer className="row-start-3 w-full flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="text-sm text-gray-500">&copy; 2025 Saanal. All rights reserved.</p>
      </footer>
    </div>
  );
}
