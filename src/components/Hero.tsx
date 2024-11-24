"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link"; // Importamos Link para la navegación a /contacto

const images = [
  "/assets/hero/hero-section1.jpg",
  "/assets/hero/hero-section2.jpg",
  "/assets/hero/hero-section3.jpg",
  // Añade más imágenes si es necesario
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambio de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicios");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden z-0"
    >
      {/* Fondo dinámico */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}

      {/* Superposición de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 flex flex-col items-center justify-center text-white z-20 px-6">
        {/* Título */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center mb-4 drop-shadow-md">
          Soluciones Personalizadas en Cerrajería y Carpintería Metálica
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8 max-w-3xl">
          Elevamos la seguridad y diseño de tu espacio con acabados de calidad
          y atención al detalle.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={scrollToServices} // Llamada a la función de scroll suave
            className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-black font-semibold px-6 py-3 rounded-lg shadow-lg"
          >
            Ver Servicios
          </Button>
          <Link href="/contacto">
            <Button
              size="lg"
              className="bg-gray-700 hover:bg-gray-800 transition-colors duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
            >
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
