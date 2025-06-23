// src/Navbar.js
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-xl font-bold text-white">Megha</div>
      <ul className="flex space-x-6 text-white font-medium">
        <li>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
