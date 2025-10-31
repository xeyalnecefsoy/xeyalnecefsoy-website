import React from "react";
import { ArrowRight } from "lucide-react";

// Komponent üçün TypeScript interfeysi
interface BlogCTAProps {
  // ✅ Yalnız lang propunu saxlayırıq (xətanı aradan qaldırmaq üçün)
  lang: string;

  // title, description, buttonText proplarını silirik, çünki onları
  // aşağıdakı kimi birbaşa komponentin içində tərcümə edəcəyik.
  // buttonLink isə hər dil üçün fərqli ola bilər, onu saxlayırıq.
  buttonLink?: string;
}

const Blog: React.FC<BlogCTAProps> = ({
  // ✅ lang propunu proplardan çıxarırıq:
  lang,

  buttonLink = "/blog",
}) => {
  // Şəkildəki tünd göy və açıq göy rənglər üçün təxminlər
  const darkBlue = "#14365d"; // Başlıq və gradientin tünd hissəsi
  const lightBlue = "#3b82f6"; // Gradientin açıq hissəsi

  // Tərcümə edilmiş mətnləri təyin edirik
  const blogTitle = lang === "az" ? "BLOQ" : "BLOG";
  const blogDescription =
    lang === "az"
      ? "Müxtəlif mövzulardakı yazılarıma nəzər yetir"
      : "Take a look at my articles on various topics";
  const blogButtonText = lang === "az" ? "Yazıları Oxu" : "Read Articles";

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Başlıq */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 uppercase tracking-widest"
          style={{ color: darkBlue }}
        >
          {blogTitle}
        </h2>

        {/* Məzmun Bloku (Gradient fonlu qutu) */}
        <div
          className="relative p-16 sm:p-20 rounded-2xl shadow-2xl overflow-hidden text-center"
          // Tünddən açığa doğru gradient fon
          style={{
            background: `linear-gradient(135deg, ${darkBlue} 0%, ${lightBlue} 100%)`,
          }}
        >
          {/* Arxa plan şəklinin təqlidi (kod görünüşü) */}
          {/* Əslində bu hissədə bir arxa fon şəkli (background-image) istifadə olunmalıdır. 
              Sadəcə gradient və rəng ilə daha təmiz yanaşma təmin edilir. */}

          {/* Məlumat Mətni */}
          <p className="text-white text-3xl sm:text-4xl font-semibold mb-8 relative z-10 max-w-lg mx-auto leading-tight">
            {blogDescription}
          </p>

          {/* Knapp (Button) */}
          <a
            href={buttonLink}
            className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-full transition duration-300 shadow-lg relative z-10"
          >
            {blogButtonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
