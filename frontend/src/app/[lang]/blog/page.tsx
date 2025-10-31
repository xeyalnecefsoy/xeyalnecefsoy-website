import Link from "next/link";

export const metadata = {
  title: "Bloq | Xəyal Nəcəfsoy",
  description: "Müxtəlif mövzularda yazılar və düşüncələr.",
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Rəqəmsallaşma dövründə dizaynın rolu",
      excerpt:
        "Texnologiyanın inkişafı ilə dizayn anlayışı necə dəyişir? Bu yazıda müasir dizaynın rolu və trendləri haqqında fikirlərimi bölüşürəm.",
      date: "12 Oktyabr 2025",
      slug: "reqemsallasma-dovrundə-dizayn",
    },
    {
      id: 2,
      title: "Freelance dizayner kimi uğurlu başlanğıc",
      excerpt:
        "Frilans karyerasına yeni başlayanlar üçün təcrübələrim və real məsləhətlər.",
      date: "5 Oktyabr 2025",
      slug: "freelance-dizayner-baslangic",
    },
  ];

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-b from-[#001F3F] to-[#000814] text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bloq Yazılarım</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Müxtəlif mövzularda paylaşdığım fikirlər, təcrübələr və rəqəmsal
            dünyaya dair yazılar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:scale-[1.02] transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Yazını oxu →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
