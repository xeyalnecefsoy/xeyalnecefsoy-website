"use client";

import React from "react";
import {
  Cloud,
  Globe,
  Database,
  Lock,
  Zap,
  Server,
  Settings,
  Wifi,
} from "lucide-react";
import Image from "next/image";
import HeroIllustration from "../../public/images/hero-illustration.webp";

interface HeroSectionProps {
  onContactClick?: () => void;
  onConsultationClick?: () => void;
}

const Hero: React.FC<HeroSectionProps> = ({
  onContactClick,
  onConsultationClick,
}) => {
  return (
    <div
      className="relative min-h-screen 
    bg-[#0A2472]
     overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                RƏQƏMSAL İDEYALARI
                <br />
                GERÇƏYƏ ÇEVİRİRƏM
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
                Sürətli reqqemsallaşmaqda olan dünyamızda, bu prosesin əz
                ləhinizə çevrilərəк daha çox insana qata və daha çox qalir aidə
                ədə bilərsiniz! Sizi rəqiblərinizdan fərqləndirəcəк pəşəkar
                dəstək təqdim edirik.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Vebsaytınızı Yaradaḍ
              </button>
              <button
                onClick={onConsultationClick}
                className="px-8 py-4 border-2 border-white hover:border-blue-200 text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                Ödənişsiz Konsultasiya
              </button>
            </div>
          </div>

          {/* Right Section - 3D Isometric Illustration */}
          <div className="relative h-full flex items-center justify-center">
            <Image
              src={HeroIllustration} // Şəkil faylının yolunu dəyişin
              alt="Hero Section 3D Illustration"
            />
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
