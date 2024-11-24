"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const Galeria = () => {
  const images = [1, 2, 3, 4, 5, 6].map(
    (item) => `/assets/galeria/project-${item}.webp`
  );

  return (
    <section id="galeria" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Galería de Proyectos
        </h2>

        {/* Modo galería para desktop */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Carrusel para móvil */}
        <div className="block sm:hidden">
          <Swiper
            spaceBetween={15}
            slidesPerView={1.3} // Aumenta el tamaño de las fotos en móvil
            centeredSlides={true}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          <Link href="/galeria">
            <button className="bg-gray-800 text-white py-2 px-4 sm:py-2 sm:px-6 text-sm sm:text-base rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-md">
              Ver Más Proyectos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
