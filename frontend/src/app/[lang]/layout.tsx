// src/app/[lang]/layout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params, // params propunu qəbul edirik
}: {
  children: React.ReactNode;
  params: { lang: string }; // lang parametrinə çıxış əldə edirik
}) {
  const { lang } = params;

  return (
    <>
      {/* 1. HTML lang atributunu dinamik olaraq təyin edin */}
      <html lang={lang}>
        <body>
          {/* 2. Navbar və Footer-i lang propu ilə ötürün */}
          <Navbar lang={lang} />
          <main>{children}</main> {/* Əsas səhifə məzmunu */}
          <Footer lang={lang} />
        </body>
      </html>
    </>
  );
}
