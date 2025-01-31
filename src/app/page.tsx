"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            style={{ opacity }}
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

        <a
          className="rounded-full bg-blue-600 text-white px-8 py-3 text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-md mt-6"
          href="#contact"
        >
          Get in Touch
        </a>

        {/* Our Offerings Section */}
        <section id="offerings" className="py-20 px-8 sm:px-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Offerings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { img: "/images/civilworks.webp", title: "Civil Works", desc: "Quality infrastructure development for roads, bridges, and more." },
              { img: "/images/electricworks.jpeg", title: "Electrical Works", desc: "Professional electrical installations and maintenance." },
              { img: "/images/constructionworks.jpeg", title: "Building & Renovation", desc: "Residential and commercial building projects." },
              { img: "/images/generalequipment.jpeg", title: "General Supplies", desc: "Reliable procurement and supply chain solutions." },
              { img: "/images/interiordesign.jpeg", title: "Interior Design", desc: "Custom solutions tailored to unique project needs." },
              { img: "/images/Plumbing Projects.jpeg", title: "Plumbing Services", desc: "Expert plumbing solutions for residential and commercial projects." },
            ].map((offering, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image src={offering.img} alt={offering.title} width={500} height={400} className="rounded-lg shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{offering.title}</h3>
                <p className="text-gray-600 mt-2">{offering.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Projects Section */}
        <section id="projects" className="mt-20 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: "/images/Landscaping.avif", title: "Landscaping", desc: "Successfully completed a modern landscaping." },
              { img: "/images/Electricals Supply.jpeg", title: "Electricals Supply", desc: "Upgraded rural electrification with sustainable solutions." },
              { img: "/images/Construction Materials.jpeg", title: "Construction Materials", desc: "Supplying Construction Materials." },
              { img: "/images/Luxury Interior Design.webp", title: "Luxury Interior Design", desc: "Designed and furnished premium office spaces with modern aesthetics." },
              { img: "/images/Glassware Products.jpeg", title: "Glassware Products", desc: "Supply of Glass and glass materials." },
              { img: "/images/Plumbing Projects.jpeg", title: "Plumbing Projects", desc: "Installed smart Plumbing Systems." },
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image src={project.img} alt={project.title} width={500} height={400} className="rounded-lg shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
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
