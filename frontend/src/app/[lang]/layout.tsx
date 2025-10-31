// src/app/[lang]/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // Promise əlavə edin
}) {
  const { lang } = await params; // params-ı await edin

  return (
    <>
      <html lang={lang}>
        <body>
          <Navbar lang={lang} />
          <main>{children}</main>
          <Footer lang={lang} />
        </body>
      </html>
    </>
  );
}
