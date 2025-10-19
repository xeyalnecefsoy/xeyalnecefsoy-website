"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  BarChart3,
  Shield,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  slug: string;
  features: string[];
}

export default function XidmetlerPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Briefcase className="w-12 h-12" />,
      title: "Hüquq Biznesi",
      shortDesc:
        "Hüquq firmanızı rəqəmsal dünyada güclü bir marka halına çevirin",
      fullDesc:
        "Profesional hüquq xidmətlərinin marketinqi ilə müştərilərə daha yaxşı çatın. SEO, sosial media və təqdimatlar aracılığı ilə itibarınızı artırın.",
      slug: "huquq-biznesi",
      features: [
        "SEO Optimallaşdırma",
        "Sosial Media Marketinq",
        "Kontent Yratma",
        "Branding Strategiyası",
        "Vebsəhifə Dizaynı",
      ],
    },
    {
      id: 2,
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Rəqəmsal Marketinq",
      shortDesc:
        "Biznəsinizi onlayn platformalarda maksimum görlülüyə çatdırın",
      fullDesc:
        "Google Ads, Facebook Ads, Instagram Ads və digər platformalarda sınaqlı kampaniyalar yaradıb nəticə əldə edin.",
      slug: "reqemsal-marketinq",
      features: [
        "PPC Kampaniyaları",
        "Email Marketing",
        "Analytics & Reportinq",
        "Conversya Optimallaşdırma",
        "A/B Testinq",
      ],
    },
    {
      id: 3,
      icon: <Shield className="w-12 h-12" />,
      title: "Branding & Identiklik",
      shortDesc: "Fərqəli və qatı bir marka kimliyi yaradın",
      fullDesc:
        "Logo dizaynından başlayıb tam branding paketinə qədər, biznəsinizin vizual identikliyini güclüləşdirin.",
      slug: "branding",
      features: [
        "Logo Dizaynı",
        "Rəng Paleti",
        "Tipografiya",
        "Brand Guidelines",
        "Stationary Design",
      ],
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "Vebsəhifə İnkişafı",
      shortDesc: "Sürətli, məhsuldur və müasır vebsəhiflər",
      fullDesc:
        "React, Next.js, TypeScript ilə qurulmuş yüksək performanslı vebsəhiflər inkişaf etdirilir.",
      slug: "vebsehife-inkisafi",
      features: [
        "Responsive Dizayn",
        "SEO Friendly",
        "Lightning Fast",
        "Mobile Optimized",
        "Cross-browser Compatible",
      ],
    },
    {
      id: 5,
      icon: <Users className="w-12 h-12" />,
      title: "Kontent Yratma",
      shortDesc: "Cəlbedici və faydalı məzmun hazırlayın",
      fullDesc:
        "Bloqunuz, sosial media postları, videolar və infografiklər üçün profesional kontent hazırlayırıq.",
      slug: "kontent-yratma",
      features: [
        "Blog Yazıları",
        "Sosial Media Kontenti",
        "Video Skriptləri",
        "Infografiklər",
        "Whitepaper & E-books",
      ],
    },
    {
      id: 6,
      icon: <TrendingUp className="w-12 h-12" />,
      title: "SEO Optimallaşdırma",
      shortDesc: "Arama motorlarında daha yüksək sıralamaya çatın",
      fullDesc:
        "On-page, off-page və teknik SEO strategiyaları ilə biznəsinizin aşkarlanmasını artırın.",
      slug: "seo-optimallasmasi",
      features: [
        "Açar Söz Araştırması",
        "On-Page SEO",
        "Link Building",
        "Technical SEO",
        "Monitoring & Reportinq",
      ],
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            XİDMƏTLƏRİMİZ
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Biznəsinizi rəqəmsal dünyada güclüləşdirmək üçün lazım olan bütün
            xidmətlər
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-blue-900 group cursor-pointer"
                onClick={() =>
                  setSelectedService(
                    selectedService === service.id ? null : service.id
                  )
                }
              >
                <div className="text-blue-900 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.shortDesc}
                </p>

                <a
                  href={`/xidmetler/${service.slug}`}
                  className="inline-flex items-center text-blue-900 font-bold hover:text-yellow-400 transition group/link"
                >
                  Daha Ətraflı
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-4">
            Nə Qədər Dərin Xidmət Göstəririk
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Hər bir xidmətdə məhsuldar nəticələr əldə etmək üçün ən yaxşı
            praktikalardan istifadə edirik
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Strateji Yanaşma
              </h3>
              <div className="space-y-4">
                {[
                  "Dərinə Analiz və Araştırma",
                  "Rəqabət Tədqiqi",
                  "Hədəf Auditoriya Xarakteristikası",
                  "Fərqələnmə Strategiyası",
                  "Ölçülə Bilən Hədəflər",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                İcraçılıq & Nəzarət
              </h3>
              <div className="space-y-4">
                {[
                  "Sürətli Tətbiqat",
                  "Cəld Feedback Dövrü",
                  "Real-Time Monitoring",
                  "Dəyişkən Optimizasiyalar",
                  "Geniş Hesabat & Transparency",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-4">
            Paket Seçimləri
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Hər böyüklükdə biznəs üçün uyğun paketlər
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Başlayanlar",
                price: "500₼+",
                items: [
                  "Konsultasiya",
                  "Strateji Hazırlama",
                  "Ay Sonu Hesabat",
                  "Email Dəstəyi",
                ],
              },
              {
                name: "Fəaliyyətdə",
                price: "1500₼+",
                items: [
                  "Tam Sürəti Xidmət",
                  "Haftalıq Raportu",
                  "Priority Dəstəyi",
                  "A/B Testinq",
                  "Optimizer Səbətləri",
                ],
                featured: true,
              },
              {
                name: "Enterpaz",
                price: "Qiymətləndir",
                items: [
                  "Tam Xidmət Paketi",
                  "24/7 Dəstək",
                  "Verilmiş Komanda",
                  "Custom Strategiyalar",
                  "Sınısız Revisions",
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 transition-all ${
                  pkg.featured
                    ? "bg-blue-900 text-white shadow-2xl scale-105"
                    : "bg-white shadow-lg border border-gray-200"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.featured ? "" : "text-blue-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xl font-bold mb-6 ${
                    pkg.featured ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold ${
                          pkg.featured
                            ? "bg-yellow-400 text-blue-900"
                            : "bg-blue-900 text-white"
                        }`}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-bold transition ${
                    pkg.featured
                      ? "bg-yellow-400 text-blue-900 hover:bg-yellow-500"
                      : "bg-blue-900 text-white hover:bg-blue-950"
                  }`}
                >
                  Seç
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Biznəsinizi Rəqəmsallaşdırmağa Hazır mısınız?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            İlk konsultasiyanız tamamilə pulsuz. Gəlin birgə nə əldə edə
            biləcəyimizi görək.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
              Sərbəst Konsultasiya
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition">
              Portfoyu Bax
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-900 mb-16">
            Tez-tez Soruşulan Suallar
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Xidmətlər neçə müddətə başlayır?",
                a: "Layihənin mürəkkəbliyindən asılı olaraq, ən qısa müddət 1 ay, uzun müddətli stratejilər isə 6-12 ay işləyir.",
              },
              {
                q: "Nəticələr nə zaman görünər?",
                a: "İlk 2-4 həftədə əsas göstəricilərdə yaxşılaşma görə bilərsiniz. SEO kimi daha uzun müddətli strategiyalar 3-6 ay zaman tələb edə bilər.",
              },
              {
                q: "Digər agentliklərdən fərqim nədir?",
                a: "Biz hər layihəyə cəld yanaşırıq, sorğu etdiyiniz ilə öyrənirik, real nəticə əldə etməyə fokuslanu ilə, transparentlikdən vəz keçmirik.",
              },
              {
                q: "Paket ortasında dəyişə biləm?",
                a: "Əlbəttə! Biznəsiniz böyüdükcə və ehtiyaclarınız dəyişdikdə, paketinizi yeniləşdirmə imkanı var.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Halkla Əlaqə</h3>
          <p className="text-gray-200 mb-8">
            Suallarınız var? Birbaşa yazın və ya zəng edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@example.com"
              className="hover:text-yellow-400 transition"
            >
              📧 info@example.com
            </a>
            <a
              href="tel:+994501234567"
              className="hover:text-yellow-400 transition"
            >
              📱 +994 50 123 45 67
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
