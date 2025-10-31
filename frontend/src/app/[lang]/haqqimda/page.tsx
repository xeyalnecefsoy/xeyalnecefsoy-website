import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Figma", "VS Code", "Webpack"],
    },
  ];

  const experiences = [
    {
      year: "2023-2024",
      title: "Senior Full-Stack Developer",
      company: "Tech Company",
      description:
        "Böyük layihələrdə frontend və backend tərəfində işlədim, performans optimallaşdırması apardım.",
    },
    {
      year: "2022-2023",
      title: "Full-Stack Developer",
      company: "Innovation Studio",
      description:
        "Müxtəlif veb tətbiqləri hazırladım, client tələblərinə uyğun həllər təqdim etdim.",
    },
    {
      year: "2021-2022",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Frontend səkəsində öyrənildim, ilk layihələrimə başladım.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Haqqımda</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-2xl blur-2xl opacity-40"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center border-2 border-blue-300 border-opacity-30">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Salam! Mən{" "}
                <span className="text-yellow-300 font-semibold">
                  Full-Stack Developer
                </span>
                -am və müasır veb texnologiyalarında ixtisaslaşmışam.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Next.js, React, TypeScript və Tailwind CSS istifadə edərək
                yüksək keyfiyyətli, skalabel veb tətbiqləri hazırlayıram. Hər
                layihədə istifadəçi təcrübəsini və performansı prioritet edirəm.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Mənim məqsədim biznes problemlərini texniki həllər vasitəsilə
                həll etmək və davamlı öyrənmə prosesinə daxil olmaqdir.
              </p>

              <div className="flex gap-4">
                <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all flex items-center gap-2">
                  Bizə Yazın
                  <ArrowRight size={18} />
                </button>
                <button className="border-2 border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
                  CV-mi Yüklə
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Bacarıqlar
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500 to-blue-600 bg-opacity-10 border border-blue-400 border-opacity-30 rounded-2xl p-8 hover:border-blue-300 transition-all"
              >
                <h3 className="text-xl font-bold text-yellow-300 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <span className="text-blue-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            İş Təcrübəsi
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-10 border-l-4 border-yellow-400 p-8 rounded-lg hover:bg-opacity-20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <span className="text-yellow-300 font-semibold text-sm">
                    {exp.year}
                  </span>
                </div>
                <p className="text-blue-200 font-medium mb-2">{exp.company}</p>
                <p className="text-blue-100 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black bg-opacity-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Tamamlanmış Layihə" },
              { number: "30+", label: "Məmnun Müştəri" },
              { number: "5+", label: "İl Təcrübə" },
              { number: "100%", label: "Dedikasiya" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 bg-opacity-10 border border-blue-400 border-opacity-20"
              >
                <div className="text-4xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bizimlə Əlaqə Saxlayın
          </h2>
          <p className="text-blue-100 mb-8">
            Haqqınızda biraz ətraflı danışmaq istərdiniz?
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Mail size={24} />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full transition-all transform hover:scale-110">
              <Github size={24} />
            </button>
          </div>

          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-12 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all">
            Hazır Layihə Alış
            <ArrowRight className="inline-block ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
