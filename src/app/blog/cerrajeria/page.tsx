import React from 'react';
import Image from 'next/image';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

const CerrajeriaBlog = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-20">Todo lo que necesitas saber sobre cerrajería</h1>
        <Image
          src="/assets/blog/puerta.jpg"
          alt="Cerrajería"
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg"
        />
        <p className="text-gray-700 mb-4">
          La cerrajería es un aspecto crucial para la seguridad de tu hogar o negocio. En este artículo, exploraremos los diferentes servicios de cerrajería, cómo elegir un cerrajero de confianza y consejos para mantener tus cerraduras en óptimas condiciones.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">1. Servicios de Cerrajería</h2>
            <p className="text-gray-700 mb-4">
              Los cerrajeros ofrecen una amplia gama de servicios, desde la instalación de cerraduras de alta seguridad hasta la apertura de puertas en caso de emergencia. También pueden asesorarte sobre las mejores prácticas de seguridad para tu propiedad.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">2. Cómo Elegir un Cerrajero de Confianza</h2>
            <p className="text-gray-700 mb-4">
              Al elegir un cerrajero, es importante buscar referencias y verificar su experiencia y certificaciones. Un cerrajero confiable debe ofrecer un servicio rápido y eficiente.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">3. Mantenimiento de Cerraduras</h2>
            <p className="text-gray-700 mb-4">
              Mantener tus cerraduras en buen estado es esencial para garantizar su funcionamiento. Limpia regularmente las cerraduras y aplica lubricante para evitar que se atasquen. Además, revisa periódicamente el estado de las llaves y reemplázalas si están desgastadas.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">4. Innovaciones en Cerrajería</h2>
            <p className="text-gray-700 mb-4">
              La tecnología en cerrajería ha avanzado significativamente, con cerraduras electrónicas y sistemas de seguridad inteligentes que ofrecen mayor control y protección. Considera actualizar tus cerraduras a opciones más modernas para mejorar la seguridad de tu hogar.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Conclusión</h2>
        <p className="text-gray-700 mb-4">
          La cerrajería es un componente vital para la seguridad de cualquier propiedad. Al elegir un cerrajero de confianza y mantener tus cerraduras en buen estado, puedes asegurar la protección de tu hogar o negocio. Mantente informado sobre las últimas innovaciones para mejorar aún más tu seguridad.
        </p>
        <div className="text-center mt-8">
          <PresupuestoButton />
        </div>
      </div>
    </section>
  );
};

export default CerrajeriaBlog; 