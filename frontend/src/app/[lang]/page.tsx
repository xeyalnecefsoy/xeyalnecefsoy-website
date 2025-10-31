// src/app/[lang]/page.tsx

import Hero from "@/components/Hero";
import About from "@/components/About";
import LawBusiness from "@/components/LawBusiness";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
// Navbar və Footer-i, əgər layout-a köçürmürüksə, burada saxlayırıq.
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// İndi bu funksiya dinamik [lang] parametrini qəbul edir
export default async function LocaleHomePage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // lang dəyərini istifadə etməzdən əvvəl problem qalmayacaq
  // Məsələn: const data = await fetchData(lang); // artıq await istifadə edə bilərsiniz

  return (
    <main>
      {" "}
      {/* div yerinə semantik olaraq main istifadə edin */}
      <Hero lang={lang} /> {/* Komponentlərə dil kodunu ötürün */}
      <About lang={lang} />
      <LawBusiness lang={lang} />
      <Projects lang={lang} />
      <Blog lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
