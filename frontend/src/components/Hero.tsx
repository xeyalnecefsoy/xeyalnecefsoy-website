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

interface HeroSectionProps {
  onContactClick?: () => void;
  onConsultationClick?: () => void;
}

const Hero: React.FC<HeroSectionProps> = ({
  onContactClick,
  onConsultationClick,
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-600 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

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
            {/* Central cube with glow */}
            <div className="relative w-64 h-64 perspective">
              {/* Animated central cube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative w-48 h-48 animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  {/* Cube faces */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl transform -rotate-45 opacity-80"></div>
                </div>

                {/* Central icon - 3 stacked layers */}
                <div
                  className="absolute z-10 text-blue-300 text-6xl font-bold animate-bounce"
                  style={{ animationDuration: "2s" }}
                >
                  ⚡
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0">
                {/* Database */}
                <div className="absolute top-0 right-8 animate-pulse">
                  <Database className="w-12 h-12 text-blue-300" />
                </div>

                {/* Cloud */}
                <div className="absolute top-12 left-4 animate-float">
                  <Cloud className="w-10 h-10 text-blue-200" />
                </div>

                {/* Lock/Security */}
                <div
                  className="absolute bottom-8 right-4 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Lock className="w-12 h-12 text-purple-300" />
                </div>

                {/* Globe */}
                <div className="absolute bottom-16 left-8">
                  <Globe
                    className="w-14 h-14 text-cyan-300 animate-spin"
                    style={{ animationDuration: "8s" }}
                  />
                </div>

                {/* Settings */}
                <div
                  className="absolute top-1/2 right-0 animate-spin"
                  style={{ animationDuration: "4s" }}
                >
                  <Settings className="w-12 h-12 text-orange-400" />
                </div>

                {/* Server/Laptop */}
                <div
                  className="absolute bottom-0 left-1/4 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <Server className="w-11 h-11 text-blue-300" />
                </div>

                {/* Wifi */}
                <div className="absolute top-1/3 left-0 animate-pulse">
                  <Wifi className="w-10 h-10 text-cyan-300" />
                </div>
              </div>
            </div>

            {/* Floating cards background */}
            <div className="absolute top-8 right-12 opacity-70 animate-float">
              <div className="w-24 h-16 bg-white/10 backdrop-blur rounded-lg border border-white/20"></div>
            </div>
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
