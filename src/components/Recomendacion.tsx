"use client";

import Image from 'next/image';

const Recomendacion = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="text-center p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        Pide un presupuesto con nosotros y te asesoraremos en materiales, diseño, precio, etc.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4 relative w-16 h-16 mx-auto">
            <Image 
              src="/assets/iconos/piggy-bank.png" 
              alt="Icono de presupuesto gratis" 
              fill
              sizes="(max-width: 64px) 100vw"
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Es Gratis</h3>
          <p className="text-gray-600">
            Si quieres un presupuesto para una reja, puerta, etc. te daremos un <strong>presupuesto Gratis</strong> en pocas horas.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4 relative w-16 h-16 mx-auto">
            <Image 
              src="/assets/iconos/handshake.png" 
              alt="Icono de asesoramiento" 
              fill
              sizes="(max-width: 64px) 100vw"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Te asesoramos</h3>
          <p className="text-gray-600">
            ¿Tienes dudas? Te ayudaremos a elegir el material, diseño y te daremos alternativas en precios.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center mb-4 relative w-16 h-16 mx-auto">
            <Image 
              src="/assets/iconos/check.png" 
              alt="Icono de calidad" 
              fill
              sizes="(max-width: 64px) 100vw"
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Calidad 10</h3>
          <p className="text-gray-600">
            Utilizamos materiales de primera calidad, asegurando un trabajo duradero para todos nuestros clientes.
          </p>
        </div>
      </div>
      <button 
        onClick={scrollToContact}
        className="mt-8 bg-yellow-600 text-white py-3 px-8 rounded-lg hover:bg-yellow-700 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg"
        aria-label="Solicitar presupuesto"
      >
        Pide presupuesto gratis
      </button>
    </section>
  );
};

export default Recomendacion;
