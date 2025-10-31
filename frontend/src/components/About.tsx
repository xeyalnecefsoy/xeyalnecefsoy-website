// components/AboutSection.tsx

import React from "react";
import Image from "next/image";
import SkillCard from "./SkillCard";
// Lucide ikonları (siz başqa ikon dəstləri də istifadə edə bilərsiniz)
import { Code, Server, PenTool, Search, Share2, Layout } from "lucide-react";
import Photo from "../../public/images/xeyal-necefsoy.jpg";

interface AboutSectionProps {
  // ✅ Yeni propu əlavə edirik:
  lang: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  // ✅ Qəbul edilən propların arasına `lang` əlavə edilir:
  lang,
}) => {
  // Bacarıq məlumatlarının massivi
  const skills = [
    {
      title: "Front-End Development",
      icon: <Code />,
    },
    {
      title: "Back-End Development",
      icon: <Server />,
    },
    {
      title: "Qrafik Dizayn",
      icon: <PenTool />,
    },
    {
      title: "SEO",
      icon: <Search />,
    },
    {
      title: "SMM",
      icon: <Share2 />,
    },
    {
      title: "UI/UX Dizayn",
      icon: <Layout />,
    },
  ];

  return (
    // Ümumi konteyner: Ağ fon, responsiv padding və mərkəzləşdirilmiş məzmun
    <section className="bg-white py-16 md:py-24 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === HAQQIMDA Bölməsi === */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-wide">
          HAQQIMDA
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-4xl mx-auto gap-8 md:gap-12 mb-20">
          {/* Şəkil */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            {/* Şəklinizin rəng effektlərini dəstəkləmək üçün xüsusi bir CSS sinifi istifadə olunur */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden relative shadow-xl">
              <Image
                src={Photo} // Şəkil faylının yolunu dəyişin
                alt="Xəyal Nəcəfsoy portret şəkli"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="image-effect" // Xüsusi CSS sinifi (Aşağıda izah olunur)
              />
            </div>
          </div>

          {/* Mətn */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Xəyal Nəcəfsoy
            </h3>
            <p className="text-blue-600 font-semibold mb-6">
              Full-Stack Developer | Creative Specialist
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yaradıcılığımla texnologiya biliklərimi birləşdirərək funksional
              və gözoxşayan məhsullar ortaya çıxarıram. Çoxşaxəli dünyagörüşüm,
              durumlara rasional və emosional yanaşma bacarığım, eləcə də sonsuz
              araşdırıb-öyrənmə istəyim insanlara fayda verən, dəyərli
              təcrübələr yaratmağıma imkan yaradır.
            </p>
          </div>
        </div>

        {/* === BACARIQLAR Bölməsi === */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
          BACARIQLAR
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
