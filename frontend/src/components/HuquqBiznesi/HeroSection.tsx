import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          HÜQUQ BİZNESİNİZİ DAHA
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-yellow-400">TANINAN</span> və{" "}
          <span className="text-yellow-400">GƏLİRLİ</span> EDƏK
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Qvral rəqəmsal marketinq ilə biznəsinizin potensialını maksimum
          səviyyəyə qaldırın.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition">
            Videoyunun Yaragdağ
          </button>
          <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition">
            Ödəniş Konsultasiyası
          </button>
        </div>
      </div>
    </section>
  );
}
