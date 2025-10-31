// components/Navbar.tsx

"use client"; // Bu komponentdə interaktivlik (mobil menyu, tema) olduğu üçün

import React, { useState, useEffect } from "react";
import Link from "next/link";
// İkonlar üçün lucide-react istifadə olunur
import { Sun, Moon, Menu, X, Globe, ChevronDown } from "lucide-react";

// Cari marşrutu (path)-ı almaq üçün Next.js hook-u istifadə etməliyik (usePathname)
import { usePathname } from "next/navigation";

// 1. NavbarProps interfeysini yaradırıq
interface NavbarProps {
  lang: string; // [lang]/layout.tsx tərəfindən ötürülür
}

// Navigasiya linkləri (Aşağıda dinamik təyin edəcəyik, lakin interfeyslərini saxlayaq)
interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

// ... (servicesDropdown və navLinks-i silirik, çünki onları komponent daxilində dinamik yaradacağıq 👇)

// // Navigasiya linkləri
// const navLinks = [
//   { name: "Ana Səhifə", href: "/" },
//   { name: "Xidmətlər", href: "/xidmetler", hasDropdown: true },
//   { name: "Haqqımda", href: "/haqqimda" },
//   { name: "Bloq", href: "/blog" },
// ];

// // Xidmətlər dropdown linkləri
// const servicesDropdown = [
//   { name: "Hüquq Biznesi", href: "/xidmetler/huquq-biznesi" },
//   { name: "Bütün Xidmətlər", href: "/xidmetler" },
// ];

const Navbar: React.FC<NavbarProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobil menyu vəziyyəti
  const [isDarkMode, setIsDarkMode] = useState(false); // Tema vəziyyəti
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Dropdown vəziyyəti (mobil)
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Hover vəziyyəti (masaüstü)

  // Mobil menyunun açılıb-bağlanmasını idarə edir
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Xidmətlər dropdown toggle (mobil)
  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Tema dəyişdirmə funksiyası
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Real tətbiqdə: document.documentElement.classList.toggle('dark');
  };

  // Dil dəyişdirici
  const targetLang = lang === "az" ? "en" : "az";
  const pathname = usePathname(); // Cari URL-i alırıq
  // URL-də dil seqmentini dəyişdirmək üçün funksiya
  const getTargetHref = () => {
    // Cari URL-dən (məsələn: /az/xidmetler) yalnız slug-ı alırıq (/xidmetler)
    const slug = pathname.replace(`/${lang}`, "");
    // Yeni dil seqmenti ilə birləşdiririk (məsələn: /en/services)
    // **Qeyd:** Əgər marşrut adları dildən asılı olaraq dəyişirsə (xidmetler -> services),
    // bu məntiq mürəkkəbləşməlidir. Lakin sadəlik üçün bu nümunəni veririk.
    return `/${targetLang}${slug}`;
  };

  // Dil seçiminə uyğun link və mətnləri təyin edirik
  const AZ_LINKS: NavLink[] = [
    { name: "Ana Səhifə", href: "/az" },
    { name: "Xidmətlər", href: "/az/xidmetler", hasDropdown: true },
    { name: "Haqqımda", href: "/az/haqqimda" },
    { name: "Bloq", href: "/az/blog" },
  ];

  const EN_LINKS: NavLink[] = [
    { name: "Home", href: "/en" },
    { name: "Services", href: "/en/services", hasDropdown: true },
    { name: "About", href: "/en/about" },
    { name: "Blog", href: "/en/blog" },
  ];

  const AZ_DROPDOWN: NavLink[] = [
    { name: "Hüquq Biznesi", href: "/az/xidmetler/huquq-biznesi" },
    { name: "Bütün Xidmətlər", href: "/az/xidmetler" },
  ];

  const EN_DROPDOWN: NavLink[] = [
    { name: "Law Business", href: "/en/services/law-business" },
    { name: "All Services", href: "/en/services" },
  ];

  // İstifadə olunacaq massivləri seçirik
  const navLinks = lang === "az" ? AZ_LINKS : EN_LINKS;
  const servicesDropdown = lang === "az" ? AZ_DROPDOWN : EN_DROPDOWN;

  // Düymə Mətnləri
  const contactButtonText =
    lang === "az" ? "Vebsaytınızı Yaradın" : "Create Your Website";

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
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-base font-medium text-gray-700 hover:text-[#081a4b] transition duration-150 flex items-center space-x-1"
                    onMouseEnter={() =>
                      link.hasDropdown && setIsServicesHovered(true)
                    }
                    onMouseLeave={() =>
                      link.hasDropdown && setIsServicesHovered(false)
                    }
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={18}
                        className={`transition duration-300 ${
                          isServicesHovered ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menü (Masaüstü) */}
                  {link.hasDropdown && isServicesHovered && (
                    <div
                      className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#081a4b] transition duration-150"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Dil Dəyişdirici */}
              <Link
                className="text-black"
                href={getTargetHref()} // ✅ Dinamik link
                // ... (digər atributlar)
              >
                <Globe size={20} />
                <span className="text-base font-medium uppercase">
                  {targetLang}
                </span>{" "}
                {/* Əks dili göstər */}
              </Link>
            </div>

            {/* Əsas Düymə */}
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
              aria-expanded={isOpen}
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
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={() => !link.hasDropdown && setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#081a4b] transition duration-150 flex-1"
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown Toggle Düyməsi (Mobil) */}
                  {link.hasDropdown && (
                    <button
                      onClick={toggleServicesDropdown}
                      className="px-3 py-2 text-gray-600 hover:text-[#081a4b]"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition duration-300 ${
                          isServicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown İçeriği (Mobil) */}
                {link.hasDropdown && isServicesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#081a4b] transition duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
