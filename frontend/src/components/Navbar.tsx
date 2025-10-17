// components/Navbar.tsx

"use client"; // Bu komponentdə interaktivlik (mobil menyu, tema) olduğu üçün

import React, { useState, useEffect } from "react";
import Link from "next/link";
// İkonlar üçün lucide-react istifadə olunur
import { Sun, Moon, Menu, X, Globe } from "lucide-react";

// Navigasiya linkləri
const navLinks = [
  { name: "Ana Səhifə", href: "/" },
  { name: "Xidmətlər", href: "/xidmetler" },
  { name: "Haqqımda", href: "/haqqimda" },
  { name: "Bloq", href: "/bloq" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu vəziyyəti
  const [isDarkMode, setIsDarkMode] = useState(false); // Tema vəziyyəti (optional)

  // Mobil menyunun açılıb-bağlanmasını idarə edir
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Nümunə: Tema dəyişdirmə funksiyası (Real tətbiqdə daha mürəkkəb olacaq)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Real tətbiqdə: document.documentElement.classList.toggle('dark');
  };

  // Navigasiyanın yuxarı sərhəddi (border-t) şəkildə olduğu üçün
  // Əsas Nav konteynerinin yuxarı və aşağı sərhəddi
  return (
    <nav className="border-t border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-extrabold text-[#081a4b]">LOGO</span>
          </Link>

          {/* Navigasiya və İkonlar (Masaüstü) */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Nav Linkləri */}
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-[#081a4b] transition duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* İkonlar (Tema və Dil) */}
            <div className="flex items-center space-x-4">
              {/* Tema Dəyişdirici */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:text-[#081a4b] transition duration-150"
                aria-label="Toggle Dark Mode"
              >
                {/* Şəkildəki ikona görə sadə bir toggle */}
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Dil Dəyişdirici */}
              <button
                className="p-2 rounded-full text-gray-600 hover:text-[#081a4b] transition duration-150 flex items-center space-x-1"
                aria-label="Dil seçimi"
              >
                <Globe size={20} />
                <span className="text-base font-medium">Az</span>
              </button>
            </div>

            {/* Əsas Düymə (Vebsaytınızı Yaradın) */}
            <button className="px-5 py-2.5 font-semibold rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition duration-300 whitespace-nowrap">
              Vebsaytınızı Yaradın
            </button>
          </div>

          {/* Mobil Menyu İkonu */}
          <div className="flex lg:hidden items-center">
            {/* İkonlar (Mobil üçün) */}
            <div className="flex items-center space-x-4 mr-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 hover:text-[#081a4b] transition duration-150"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              <button
                className="p-2 rounded-full text-gray-600 hover:text-[#081a4b] transition duration-150 flex items-center space-x-1"
                aria-label="Dil seçimi"
              >
                <Globe size={20} />
                <span className="text-base font-medium">Az</span>
              </button>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-md text-gray-600 hover:text-[#081a4b] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Menyuya keçid et</span>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu (açıq olduqda görünür) */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // Menyu bağlamaq üçün
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#081a4b] transition duration-150"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobil Menyu Düyməsi */}
            <div className="pt-4 px-3">
              <button className="w-full px-5 py-2.5 font-semibold rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition duration-300 whitespace-nowrap">
                Vebsaytınızı Yaradın
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
