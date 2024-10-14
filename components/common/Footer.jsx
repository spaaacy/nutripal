import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 text-sm text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <span className="font-bold text-lg text-white">NutriPal</span>
        </div>

        {/* Footer Links */}
        <nav className="flex space-x-8 text-gray-400">
          <a href="/terms" className="hover:text-white transition">TERMS</a>
          <a href="/privacy" className="hover:text-white transition">PRIVACY</a>
          <a href="/support" className="hover:text-white transition">SUPPORT</a>
          <a href="/status" className="hover:text-white transition">STATUS</a>
          <a href="/licensing" className="hover:text-white transition">LICENSING</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
