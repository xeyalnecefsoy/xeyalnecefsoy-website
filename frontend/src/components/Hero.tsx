// components/HeroSection.tsx

import React from "react";

// Sizin şəkilinizdəki kimi rəngarəng fon gradienti üçün (rəng kodlarını daha dəqiq tənzimləmək lazım gələ bilər)
const Hero: React.FC = () => {
  return (
    // Ümumi konteyner: Qara (və ya tünd göy) fon və responsiv padding
    <section className="bg-gradient-to-br from-[#0a1945] to-[#04081c] text-white py-16 md:py-28 lg:py-36 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Sol tərəf: Mətn və Düymələr */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 text-center lg:text-left">
          {/* Başlıq (Hero Title) */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight mb-6">
            RƏQƏMSAL İDEYALARI <br /> GERÇƏYƏ ÇEVİRİRƏM
          </h1>

          {/* Mətn (Sub-text) */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
            Sürətlə rəqəmsallaşmaqda olan dünyamızda, bu prosesi öz lehinizə
            çevirərək daha çox insana çata və daha çox gəlir əldə bilərsiniz!
            Sizi rəqiblərinizdən fərqləndirəcək peşəkar dəstək təqdim edirəm.
          </p>

          {/* Düymələr */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Əsas Düymə (Vebsaytınızı Yaradın) */}
            <button className="px-8 py-3 font-semibold rounded-lg text-[#04081c] bg-[#FFD700] hover:bg-[#e6c200] transition duration-300 shadow-lg shadow-yellow-500/50">
              Vebsaytınızı Yaradın
            </button>

            {/* İkinci Düymə (Ödənişsiz Konsultasiya) */}
            <button className="px-8 py-3 font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#04081c] transition duration-300">
              Ödənişsiz Konsultasiya
            </button>
          </div>
        </div>

        {/* Sağ tərəf: 3D İllüstrasiya */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* Qeyd: Şəkli burada bir <img> etiketi ilə əlavə etməlisiniz. 
            Mən Tailwind-də onu yerləşdirmək üçün sadə bir div saxlayıram.
            Next.js ilə ən yaxşı nəticə üçün 'next/image' istifadə edin.
          */}
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square">
            {/* Sizin şəklinizdəki 3D illüstrasiyanın kodu:
                
                <Image 
                    src="/images/tech-illustration.png" // Şəkilin yolunu dəyişin
                    alt="Rəqəmsal Texnologiya İllüstrasiyası"
                    layout="fill"
                    objectFit="contain"
                    priority
                /> 
            */}

            {/* Placeholder - Şəkli əvəz etmək üçün sadə bir göy kub */}
            <div className="bg-[#1e3a8a] w-full h-full rounded-3xl opacity-80 shadow-2xl flex items-center justify-center">
              <span className="text-8xl font-mono opacity-60">&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
