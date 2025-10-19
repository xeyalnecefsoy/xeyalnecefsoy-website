"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface ProjectsSliderProps {
  projects?: Project[];
}

export default function ProjectsSlider({ projects }: ProjectsSliderProps) {
  const defaultProjects = [
    { id: 1, title: "Layihə 1", description: "Video əlavə olundu - Dizayn" },
    { id: 2, title: "Layihə 2", description: "Video əlavə olundu - Dizayn" },
    { id: 3, title: "Layihə 3", description: "Rəsm əlavə olundu" },
  ];

  const data = projects || defaultProjects;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
          LAYİHƏLƏR
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-blue-900" />
            </button>

            <div className="w-full max-w-2xl overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {data.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-blue-900 text-white p-8 rounded-lg text-center h-64 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-2 hover:bg-gray-200 rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-blue-900" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition ${
                  i === currentSlide ? "bg-blue-900 w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
