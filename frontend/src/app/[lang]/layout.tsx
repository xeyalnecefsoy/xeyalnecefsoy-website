// src/app/[lang]/layout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // ✅ Promise olaraq təyin edirik
}) {
  // ✅ params-ı await edirik
  const { lang } = await props.params;

  return (
    <html lang={lang}>
      <body>
        <Navbar lang={lang} />
        <main>{props.children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
