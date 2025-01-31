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
          <Link href="/#services" className="hover:text-blue-600 transition duration-300">Services</Link>
          <Link href="/#offerings" className="hover:text-blue-600 transition duration-300">Our Offerings</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition duration-300">Contact Us</Link>
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

        {/* About Section */}
        <section className="mt-16 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Our Story</h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Founded in <span className="font-bold text-blue-700">2013</span>, <span className="font-semibold text-blue-700">Saanal Suppliers Ltd</span> has been at the forefront of providing top-tier construction, electrical works, and general supplies. Our commitment to excellence and integrity has earned us the trust of clients across various industries.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mt-16 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
              <p className="text-gray-600 mt-2">
                To deliver exceptional construction, electrical, and supply services that exceed our clients&apos; expectations, ensuring sustainability, quality, and efficiency.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
              <p className="text-gray-600 mt-2">
                To be the leading construction and supply company in the region, recognized for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-16 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Our Core Values</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 max-w-3xl leading-relaxed">
            <li><span className="font-semibold text-blue-700">Integrity:</span> We uphold transparency and honesty in all our dealings.</li>
            <li><span className="font-semibold text-blue-700">Quality:</span> We prioritize excellence in every project we undertake.</li>
            <li><span className="font-semibold text-blue-700">Innovation:</span> We embrace new technologies and methodologies to enhance efficiency.</li>
            <li><span className="font-semibold text-blue-700">Customer Satisfaction:</span> Our clients&apos; needs and expectations drive our success.</li>
            <li><span className="font-semibold text-blue-700">Sustainability:</span> We are committed to eco-friendly and sustainable practices.</li>
          </ul>
        </section>

        {/* Team Overview */}
        <section className="mt-16 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center sm:text-left">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: "/images/joanrono.jpeg", name: "Joan Rono", role: "CEO & Founder" },
              { img: "/images/person.svg", name: "Manager", role: "Operations Manager" },
              { img: "/images/person.svg", name: "Eng. Engineer", role: "Chief Engineer" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <Image src={member.img} alt={member.name} width={150} height={150} className="rounded-full shadow-md" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            ))}
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
