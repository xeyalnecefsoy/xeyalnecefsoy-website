import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, Github, Mail } from "lucide-react"; // Sosial media ikonları üçün

// Footer linkləri üçün TypeScript interfeysi
interface FooterLink {
  href: string;
  label: string;
}

// Məlumat sütunları (Mock Data)
const linkColumns: FooterLink[][] = [
  [
    { href: "/about", label: "Haqqımızda" },
    { href: "/services", label: "Xidmətlər" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/team", label: "Komandamız" },
  ],
  [
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Şərtlər" },
    { href: "/privacy", label: "Məxfilik" },
    { href: "/careers", label: "Karyera" },
  ],
];

// Sosial Media Linkləri (Mock Data)
const socialLinks = [
  {
    href: "https://linkedin.com/in/xeyalnecefsoy",
    icon: Linkedin,
    label: "linkedin",
  },
  {
    href: "https://instagram.com/xeyalnecefsoy",
    icon: Instagram,
    label: "instagram",
  },
  { href: "https://github.com/xeyalnecefsoy", icon: Github, label: "github" },
  // Başqa bir sosial media simvolu əlavə edilə bilər
];

const Footer: React.FC = () => {
  // Şəkildəki tünd göy fon rəngi üçün təxmin
  const navyBlue = "#14213d";

  // Hazırki il (Next.js client-side rendering üçün useEffect və ya sadəcə new Date())
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white" style={{ backgroundColor: navyBlue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Əsas Footer Kontenti */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-8 border-b border-gray-700 pb-12">
          {/* 1. Loqo Hissəsi */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="text-4xl font-extrabold tracking-wider hover:text-blue-400 transition-colors"
            >
              LOQO
            </Link>
            {/* Əgər loqo yanında qısa mətn olarsa bura əlavə edilir */}
          </div>

          {/* 2. Link Sütunları */}
          {linkColumns.map((column, colIndex) => (
            <div key={colIndex}>
              <ul className="space-y-2 text-gray-300">
                {column.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="hover:text-blue-400 transition-colors text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 3. CTA və Sosial Media */}
          <div className="space-y-6">
            {/* CTA Düyməsi */}
            <a
              href="/consultation" // Konsultasiya səhifəsinə link
              className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
            >
              Ödənişsiz Konsultasiya
            </a>

            {/* Sosial Media Linkləri */}
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon; // İkon komponenti
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright Hissəsi */}
        <div className="pt-6 text-center text-gray-400 text-sm">
          &copy; {currentYear} Xəyal Nəcəfsoy. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
