import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import LawBusiness from "@/components/LawBusiness";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LawBusiness />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
