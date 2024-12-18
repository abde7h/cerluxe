import React from 'react';
import { FaLock, FaTools, FaExchangeAlt, FaShieldAlt, FaDoorOpen } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

export default function CerrajeriaPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaLock className="text-4xl text-blue-600" />
          Servicios de Cerrajería
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Ofrecemos servicios profesionales de cerrajería con más de 15 años de experiencia. 
            Garantizamos calidad, seguridad y atención personalizada en cada trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaShieldAlt className="text-3xl text-blue-600" />
              Instalación de Cerraduras
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Instalamos cerraduras de alta seguridad para todo tipo de puertas. 
              Trabajamos con las mejores marcas del mercado para garantizar la máxima 
              protección de tu hogar o negocio.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Reparación de Cerraduras
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio profesional de reparación de cerraduras disponible 24/7. 
              Solucionamos cualquier problema con rapidez y eficacia, garantizando 
              la seguridad de tu cerradura.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaExchangeAlt className="text-3xl text-blue-600" />
              Mantenimiento Preventivo
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Realizamos mantenimiento preventivo para extender la vida útil de tus 
              cerraduras. Un mantenimiento regular evita problemas futuros y 
              garantiza el correcto funcionamiento.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaDoorOpen className="text-3xl text-blue-600" />
              Apertura de Emergencia
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio de apertura de puertas disponible las 24 horas. Utilizamos 
              técnicas no destructivas para garantizar la integridad de tu puerta 
              y cerradura.
            </p>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
}