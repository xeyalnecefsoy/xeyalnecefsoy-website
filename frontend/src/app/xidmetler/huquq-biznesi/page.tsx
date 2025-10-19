"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, Linkedin } from "lucide-react";
import HeroSection from "@/components/HuquqBiznesi/HeroSection";
import Services from "@/components/HuquqBiznesi/Services";
import ProjectsSlider from "@/components/HuquqBiznesi/ProjectsSlider";
import Elevation from "@/components/HuquqBiznesi/Elevation";
import AboutSection from "@/components/About";
import BlogSection from "@/components/HuquqBiznesi/BlogSection";
import Navbar from "@/components/Navbar";

export default function HuquqBiznesLanding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const layiheler = [
    { id: 1, baslik: "Layihə 1", description: "Video əlavə olundu - Dizayn" },
    { id: 2, baslik: "Layihə 2", description: "Video əlavə olundu - Dizayn" },
    { id: 3, baslik: "Layihə 3", description: "Rəsm əlavə olundu" },
  ];

  const bloqContent = [
    {
      id: 1,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % layiheler.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + layiheler.length) % layiheler.length);

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Xidmətlər Section */}
      <Services />

      {/* Layihələr Slider */}
      <ProjectsSlider />

      {/* Yüksəltmə Section */}
      <Elevation />

      {/* Haqqımda Section */}
      <AboutSection />

      {/* Blog Section */}
      <BlogSection />

      {/* İletişim Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            ƏLAQƏ
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            <input
              type="text"
              placeholder="Adınız"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
            />
            <textarea
              placeholder="Mesajınız"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
            ></textarea>
            <button className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-950 transition">
              Göndər
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">LOGO</h3>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                Link
                <br />
                Link
                <br />
                Link
                <br />
                Link
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">
                Link
                <br />
                Link
                <br />
                Link
                <br />
                Link
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
                <Phone className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Xəyal Nəcəfsoy. Bütün Hüquqlar Saxlanılmışdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
