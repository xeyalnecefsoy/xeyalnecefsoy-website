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
  // ✅ Tərcümə məlumatları
  const translations = {
    az: {
      aboutTitle: "HAQQIMDA",
      name: "Xəyal Nəcəfsoy",
      role: "Full-Stack Developer | Creative Specialist",
      description:
        "Yaradıcılığımla texnologiya biliklərimi birləşdirərək funksional və gözoxşayan məhsullar ortaya çıxarıram. Çoxşaxəli dünyagörüşüm, durumlara rasional və emosional yanaşma bacarığım, eləcə də sonsuz araşdırıb-öyrənmə istəyim insanlara fayda verən, dəyərli təcrübələr yaratmağıma imkan yaradır.",
      skillsTitle: "BACARIQLAR",
      skills: {
        frontend: "Front-End Development",
        backend: "Back-End Development",
        graphic: "Qrafik Dizayn",
        seo: "SEO",
        smm: "SMM",
        uiux: "UI/UX Dizayn",
      },
    },
    en: {
      aboutTitle: "ABOUT ME",
      name: "Khayal Najafov",
      role: "Full-Stack Developer | Creative Specialist",
      description:
        "I combine my creativity with technological knowledge to create functional and aesthetically pleasing products. My multifaceted worldview, ability to approach situations rationally and emotionally, as well as my endless desire to research and learn, allow me to create valuable experiences that benefit people.",
      skillsTitle: "SKILLS",
      skills: {
        frontend: "Front-End Development",
        backend: "Back-End Development",
        graphic: "Graphic Design",
        seo: "SEO",
        smm: "SMM",
        uiux: "UI/UX Design",
      },
    },
  };

  // ✅ Aktiv dili seç (default: az)
  const t = translations[lang as keyof typeof translations] || translations.az;

  // ✅ Bacarıqlar massivi - artıq dinamik
  const skills = [
    { title: t.skills.frontend, icon: <Code /> },
    { title: t.skills.backend, icon: <Server /> },
    { title: t.skills.graphic, icon: <PenTool /> },
    { title: t.skills.seo, icon: <Search /> },
    { title: t.skills.smm, icon: <Share2 /> },
    { title: t.skills.uiux, icon: <Layout /> },
  ];
  return (
    // Ümumi konteyner: Ağ fon, responsiv padding və mərkəzləşdirilmiş məzmun
    <section className="bg-white py-16 md:py-24 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* === HAQQIMDA Bölməsi === */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center tracking-wide">
          {t.aboutTitle}
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-4xl mx-auto gap-8 md:gap-12 mb-20">
          {/* Şəkil */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            {/* Şəklinizin rəng effektlərini dəstəkləmək üçün xüsusi bir CSS sinifi istifadə olunur */}
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-xl overflow-hidden relative shadow-xl">
              <Image
                src={Photo} // Şəkil faylının yolunu dəyişin
                alt={`${t.name} portret şəkli`}
                fill
                style={{ objectFit: "cover" }}
                priority
                className="image-effect" // Xüsusi CSS sinifi (Aşağıda izah olunur)
              />
            </div>
          </div>

          {/* Mətn */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{t.name}</h3>
            <p className="text-blue-600 font-semibold mb-6">{t.role}</p>
            <p className="text-gray-600 leading-relaxed">{t.description}</p>
          </div>
        </div>

        {/* === BACARIQLAR Bölməsi === */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center tracking-wide">
          {t.skillsTitle}
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
