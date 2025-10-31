// src/app/[lang]/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import LawBusiness from "@/components/LawBusiness";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

// ✅ params-ı birbaşa await edirik
export default async function LocaleHomePage(props: {
  params: Promise<{ lang: string }>;
}) {
  // ✅ Əvvəlcə await, sonra destructure
  const params = await props.params;
  const { lang } = params;

  return (
    <main>
      <Hero lang={lang} />
      <About lang={lang} />
      <LawBusiness lang={lang} />
      <Projects lang={lang} />
      <Blog lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
