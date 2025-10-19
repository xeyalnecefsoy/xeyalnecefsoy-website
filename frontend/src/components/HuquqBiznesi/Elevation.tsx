import React from "react";

interface ElevationProps {
  title?: string;
  buttonText?: string;
}

export default function Elevation({ title, buttonText }: ElevationProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          HÜQUQ BİZNESİNİZİ YÜKSƏLTDIN
        </h2>
        <p className="text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="bg-blue-800 p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            {title || "Banner Sloqanı Burada"}
          </h3>
          <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-950 transition">
            {buttonText || "Hələ Konsultasiya Al"}
          </button>
        </div>
      </div>
    </section>
  );
}
