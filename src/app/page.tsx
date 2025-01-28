import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="row-start-1 w-full flex justify-between items-center px-8 sm:px-20">
        <h1 className="text-2xl font-bold">Saanal</h1> 
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact Us</a>
        </nav>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <div className="relative overflow-hidden"> 
          <Image
            src="/hero-image.jpg" // Replace with the actual image path
            alt="Saanal Construction"
            layout="fill"
            objectFit="cover"
            priority
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white">
            Building Trust, Delivering Excellence
          </h2>
        </div>

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