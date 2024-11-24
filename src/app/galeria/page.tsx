"use client";

import React, { useState } from "react";

const GaleriaPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17,
  ].map((item) => `/assets/galeria/project-${item}.webp`);

  const openModal = (index: number) => {
    setActiveImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Galería de Proyectos
        </h2>
        <div
          className="grid gap-2 sm:gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-auto object-cover rounded-md transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl sm:text-4xl"
          >
            &times;
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 text-white text-2xl sm:text-3xl"
          >
            &#9664;
          </button>
          <img
            src={images[activeImageIndex]}
            alt={`Imagen ${activeImageIndex + 1}`}
            className="max-w-[95%] max-h-[80%] rounded-lg"
          />
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 text-white text-2xl sm:text-3xl"
          >
            &#9654;
          </button>
        </div>
      )}
    </section>
  );
};

export default GaleriaPage;
