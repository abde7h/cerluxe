import React from 'react';
import { FaHome, FaBuilding, FaIndustry, FaTools, FaShieldAlt } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';
export default function CerramientosPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaHome className="text-4xl text-blue-600" />
          Cerramientos Metálicos
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Especialistas en diseño, fabricación e instalación de cerramientos metálicos 
            de alta calidad. Más de dos décadas creando espacios seguros y estéticos 
            para hogares y negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaHome className="text-3xl text-blue-600" />
              Cerramientos Residenciales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Diseñamos e instalamos cerramientos para terrazas, jardines y porches. 
              Soluciones elegantes que combinan privacidad y luminosidad, adaptadas 
              al estilo arquitectónico de tu hogar. Materiales de primera calidad 
              con acabados personalizados.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaBuilding className="text-3xl text-blue-600" />
              Cerramientos Comerciales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Soluciones específicas para locales comerciales, oficinas y espacios 
              públicos. Maximizamos la seguridad sin comprometer la estética, 
              creando ambientes atractivos para tus clientes. Sistemas de cierre 
              automatizados disponibles.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaIndustry className="text-3xl text-blue-600" />
              Cerramientos Industriales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Cerramientos robustos para entornos industriales, diseñados para 
              resistir condiciones exigentes. Opciones de alta seguridad con 
              materiales anticorrosivos y sistemas de acceso controlado. 
              Mantenimiento incluido.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Mantenimiento y Reparación
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio completo de mantenimiento y reparación para todo tipo de 
              cerramientos. Atención rápida para emergencias y programas de 
              mantenimiento preventivo personalizados.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Utilizamos materiales de primera calidad y ofrecemos garantía en 
                todos nuestros trabajos.
              </p>
            </div>
            <div className="text-center">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experiencia</h3>
              <p className="text-gray-600">
                Más de 20 años en el sector nos avalan. Personal altamente cualificado.
              </p>
            </div>
            <div className="text-center">
              <FaHome className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalización</h3>
              <p className="text-gray-600">
                Diseños a medida adaptados a tus necesidades y preferencias.
              </p>
            </div>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
}
