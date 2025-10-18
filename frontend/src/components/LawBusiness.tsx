import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Sadəcə oxlar üçün

// Komponent üçün TypeScript interfeysi (props olmasa da gələcək üçün faydalıdır)
// interface LawBusinessProps {
//   // Əlavə props-lar gələ bilər
// }

const LawBusiness: React.FC = () => {
  return (
    // Arxa plan, ölçü və mərkəzləşdirmə
    <section className="relative bg-dark-blue min-h-[600px] flex items-center justify-center py-20 overflow-hidden">
      {/* Şəkil kimi qaranlıq, mürəkkəb fon effekti (sadə bir rənglə əvəz edilir) */}
      {/* Əslində bu hissədə arxa fon şəkli (background-image) və ya video istifadə olunmalıdır. */}
      {/* Sadəcə rəng ilə: */}
      <div className="absolute inset-0 bg-[#0A1938]/90"></div>

      {/* Kontent konteyneri */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Başlıq */}
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 tracking-wider">
          HÜQUQ BİZNESİNİZİ YÜKSƏLDİN
        </h1>

        {/* Alt Başlıq/Məlumat */}
        <p className="text-gray-300 text-lg mb-12">
          Hüquq sahəsində daha çox tanına və daha çox müştəri əldə edə
          bilərsiniz
        </p>

        {/* Məzmun Bloku (Sarı/Göy qutu) */}
        <div className="flex items-center justify-center space-x-4 mb-10">
          {/* Sol Ox */}
          <button
            className="text-white hover:text-yellow-400 p-2 rounded-full transition duration-300"
            aria-label="Əvvəlki"
          >
            <ChevronLeft size={36} strokeWidth={3} />
          </button>

          {/* Əsas Reklam Qutusu */}
          <div className="relative w-full max-w-xl h-40 bg-white shadow-xl overflow-hidden rounded-lg transform transition-all duration-300">
            {/* Sarı Hissə */}
            <div className="absolute left-0 top-0 h-full w-2/3 bg-yellow-400 p-6 flex flex-col justify-center text-left">
              <p className="text-2xl font-extrabold text-[#0A1938] leading-tight mb-2">
                HÜQUQ BİZNESİNİZƏ ÖZƏL VEBSAYT
              </p>
              <a
                href="http://xeyalnecefsoy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#0A1938] hover:text-gray-700 transition"
              >
                xeyalnecefsoy.com
              </a>
            </div>

            {/* Tünd Göy Hissə - Üçbucaq Forması üçün bir div daha lazımdır */}
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[#0A1938]">
              {/* Üçbucaq forması üçün Tailwind CSS sinifləri ilə bir hack */}
              <div className="absolute left-[-40px] top-0 h-full w-12 bg-yellow-400 [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>

              {/* Daxildəki Göy Üçbucaq */}
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 [clip-path:polygon(50%_0%,_100%_100%,_0%_100%)] text-[#0A1938] p-2">
                {/* Sadəcə yerini tutmaq üçün */}
              </div>
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-10 h-10 bg-yellow-400 [clip-path:polygon(50%_0%,_100%_100%,_0%_100%)]"></div>

              {/* Üst Kənarındakı Kiçik Göy Üçbucaq */}
              <div className="absolute top-4 right-6 w-8 h-8 bg-white [clip-path:polygon(50%_0%,_100%_100%,_0%_100%)] transform rotate-45"></div>
            </div>
          </div>

          {/* Sağ Ox */}
          <button
            className="text-white hover:text-yellow-400 p-2 rounded-full transition duration-300"
            aria-label="Növbəti"
          >
            <ChevronRight size={36} strokeWidth={3} />
          </button>
        </div>

        {/* Knapp (Button) */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition duration-300 shadow-lg tracking-wide">
          Hüquq Xidmətlərinə Bax
        </button>
      </div>
    </section>
  );
};

export default LawBusiness;
