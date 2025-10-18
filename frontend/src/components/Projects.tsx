"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Layihə məlumatları üçün TypeScript interfeysi
interface Project {
  id: number;
  title: string;
  description: string;
  imageStyle: string; // Təqlidi arxa plan şəkilləri üçün
}

// Layihə verilənləri (Statik Məlumatlar)
const mockProjects: Project[] = [
  {
    id: 1,
    title: "Layihə Adı",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.",
    imageStyle: 'bg-[url("/images/project-bg-1.jpg")]', // Siz bunu öz şəkillərinizlə əvəz edin
  },
  {
    id: 2,
    title: "Layihə Adı",
    description: "Qısa təsvir.",
    imageStyle: 'bg-[url("/images/project-bg-2.jpg")]',
  },
  {
    id: 3,
    title: "Layihə Adı",
    description: "Qısa təsvir.",
    imageStyle: 'bg-[url("/images/project-bg-3.jpg")]',
  },
  // Daha çox layihə əlavə edə bilərsiniz
];

// Fərdi Layihə Kartı Komponenti
interface ProjectCardProps {
  project: Project;
  isActive: boolean; // Orta (aktiv) element üçün
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  // Aktiv layihəyə fərqli stil vermək olar (şəkildə hamısı eyni ölçüdədir)
  const cardClasses = isActive
    ? "transform scale-100 transition duration-300"
    : "transform scale-[0.95] opacity-100 transition duration-300";

  return (
    <div
      // Tailwind ilə dinamik arxa fon şəkli və tündləşdirmə
      className={`relative h-64 w-full md:w-[350px] p-6 rounded-lg shadow-xl overflow-hidden cursor-pointer flex items-end text-white 
                  bg-cover bg-center ${project.imageStyle}`}
      style={{
        // Gradient tündləşdirməni əlavə edir (şəkildəki kimi)
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), ${project.imageStyle
          .slice(4, -1)
          .replace(/"/g, "")}`,
      }}
    >
      {/* Təminat üçün tünd gradient örtüyü */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div className="relative z-10 text-left">
        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
        {/* Yalnız böyük (aktiv) kartda təsvir görünür */}
        {project.description && (
          <p
            className={`text-sm max-w-[250px] ${
              isActive ? "block" : "hidden md:block"
            }`}
          >
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
};

// Əsas Projects Komponenti
const Projects: React.FC = () => {
  // Karusel funksionallığı üçün state (hazırda statik olaraq 1-ci layihəni aktiv edir)
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Təxmini göy rəngini təyin edirəm
  const customBlue = "#14365d";
  const lightBlue = "#3b82f6";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlıq */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: customBlue }} // Xüsusi rəng
          >
            LAYİHƏLƏR
          </h2>
        </div>

        {/* Karusel Kontent Bloku */}
        <div className="relative flex items-center justify-center">
          {/* Sol Ox */}
          <button
            className={`absolute left-0 z-20 p-2 rounded-full transition duration-300 hidden sm:block`}
            style={{ color: lightBlue }}
            aria-label="Əvvəlki Layihə"
            // onClick funksiyası bura əlavə olunacaq
          >
            <ChevronLeft size={48} strokeWidth={3} />
          </button>

          {/* Layihə Kartlarının Yerləşdiyi Konteyner (Karusel təqlidi) */}
          <div className="flex space-x-4 overflow-x-auto justify-center">
            {mockProjects.map((project, index) => (
              // Orta element kimi göstərmək üçün index == 0 seçilir (statik olaraq)
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === 0}
              />
            ))}
          </div>

          {/* Sağ Ox */}
          <button
            className={`absolute right-0 z-20 p-2 rounded-full transition duration-300 hidden sm:block`}
            style={{ color: lightBlue }}
            aria-label="Növbəti Layihə"
            // onClick funksiyası bura əlavə olunacaq
          >
            <ChevronRight size={48} strokeWidth={3} />
          </button>
        </div>

        {/* Nöqtə Naviqasiyası (Pagination Dots) */}
        <div className="flex justify-center mt-12 space-x-3">
          {mockProjects.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 border-2 border-solid rounded-full transition-all duration-300 cursor-pointer 
                          ${
                            index === activeIndex
                              ? `bg-blue-600 border-blue-600` // Aktiv rəng
                              : `bg-transparent border-blue-400` // Passiv rəng
                          }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
