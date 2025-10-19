import React from "react";

interface BlogPost {
  id: number;
  baslik: string;
  desc: string;
}

interface BlogSectionProps {
  posts?: BlogPost[];
  title?: string;
  subtitle?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
}

export default function BlogSection({
  posts,
  title,
  subtitle,
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
}: BlogSectionProps) {
  const defaultPosts = [
    {
      id: 1,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      baslik: "Başlıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const data = posts || defaultPosts;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          {title || "BLOQ"}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {subtitle ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="border-4 border-blue-900 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="bg-gray-200 h-40 rounded mb-4"></div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.baslik}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-4">
            {ctaTitle || "Hüquq biznəsinizi böyütmək istəyirsiniz?"}
          </h3>
          <p className="mb-6">{ctaSubtitle || "Bloq yazılarımızı oxuyun"}</p>
          <button className="bg-white text-blue-900 font-bold px-6 py-2 rounded hover:bg-gray-100 transition">
            {ctaButtonText || "Bütün Oxu →"}
          </button>
        </div>
      </div>
    </section>
  );
}
