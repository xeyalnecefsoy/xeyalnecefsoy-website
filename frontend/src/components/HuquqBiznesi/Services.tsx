import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface ServicesProps {
  services?: Service[];
}

export default function Services({ services }: ServicesProps) {
  const defaultServices = [
    {
      id: 1,
      title: "Başlıq",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Başlıq",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Başlıq",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const data = services || defaultServices;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          XİDMƏTLƏR
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((service) => (
            <div
              key={service.id}
              className="bg-blue-900 text-white p-8 rounded-lg hover:shadow-lg transition cursor-pointer group"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-200 mb-6">{service.description}</p>
              <div className="flex items-center text-yellow-400 group-hover:translate-x-2 transition">
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
