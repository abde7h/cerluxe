import React from 'react';
import { FaUmbrella, FaSun, FaCog, FaTools, FaShieldAlt } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

export default function ToldosPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaUmbrella className="text-4xl text-blue-600" />
          Toldos y Pérgolas
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Soluciones de protección solar para exterior con diseños modernos y funcionales. 
            Creamos espacios confortables para disfrutar de tu terraza o jardín 
            en cualquier época del año.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaUmbrella className="text-3xl text-blue-600" />
              Toldos Extensibles
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Toldos de brazo extensible con diferentes sistemas de apertura. 
              Ideales para terrazas y balcones. Amplia gama de tejidos y 
              colores. Opciones de motorización y control remoto.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaSun className="text-3xl text-blue-600" />
              Pérgolas Bioclimáticas
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Pérgolas de lamas orientables motorizadas. Control total de luz 
              y ventilación. Resistentes a la lluvia y al viento. Perfectas 
              para crear espacios exteriores habitables todo el año.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaCog className="text-3xl text-blue-600" />
              Automatización
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Sistemas de motorización y control inteligente. Sensores de 
              viento, lluvia y sol. Integración con domótica. Control desde 
              smartphone y programación horaria.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Mantenimiento
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio técnico especializado en mantenimiento y reparación. 
              Limpieza profesional, ajustes mecánicos y sustitución de 
              componentes. Garantía en todos nuestros servicios.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Beneficios de Nuestros Toldos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protección UV</h3>
              <p className="text-gray-600">
                Tejidos de alta calidad con protección solar certificada.
              </p>
            </div>
            <div className="text-center">
              <FaCog className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automatización</h3>
              <p className="text-gray-600">
                Sistemas inteligentes para máximo confort y eficiencia.
              </p>
            </div>
            <div className="text-center">
              <FaUmbrella className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Versatilidad</h3>
              <p className="text-gray-600">
                Soluciones adaptadas a cada espacio y necesidad.
              </p>
            </div>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
} 