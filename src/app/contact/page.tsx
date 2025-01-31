// src/app/contact/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 sm:px-20 py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center">
          <Image
            src="/images/saanal.jpg"
            alt="Saanal Logo"
            width={50}
            height={50}
            className="rounded-full shadow-md"
          />
          <h1 className="text-2xl font-bold ml-4 tracking-wide text-blue-700">Saanal Suppliers Limited</h1>
        </div>
        <nav className="flex gap-6 text-lg">
          <Link href="/about" className="hover:text-blue-600 transition duration-300">
            About Us
          </Link>
          <a href="#services" className="hover:text-blue-600 transition duration-300">
            Services
          </a>
          <a href="#offerings" className="hover:text-blue-600 transition duration-300">
            Our Offerings
          </a>
          <Link href="/contact" className="hover:text-blue-600 transition duration-300">
            Contact Us
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-center sm:text-left mt-24 px-8 sm:px-20 w-full flex-1">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-4">We would love to hear from you!</p>
        <p className="text-lg text-gray-700 mt-2">
          Please reach out to us at the following email:{" "}
          <a href="mailto:saanalsuppliers@gmail.com" className="text-blue-600">
            saanalsuppliers@gmail.com
          </a>
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-4 bg-blue-700 text-white py-8 mt-16">
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Saanal. All rights reserved.</p>

        {/* Contact Email */}
        <a
          href="mailto:saanalsuppliers@gmail.com"
          className="text-white text-lg font-semibold hover:underline transition duration-300"
        >
          saanalsuppliers@gmail.com
        </a>
      </footer>
    </div>
  );
}
