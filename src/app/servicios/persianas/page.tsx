import React from 'react';
import { FaWindowMaximize, FaCog, FaTools, FaShieldAlt, FaSun } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

export default function PersianasPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaWindowMaximize className="text-4xl text-blue-600" />
          Persianas
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Instalación y mantenimiento de persianas de alta calidad. Ofrecemos soluciones 
            modernas y eficientes para el control de luz y temperatura en tu hogar o negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaWindowMaximize className="text-3xl text-blue-600" />
              Persianas Enrollables
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Instalación de persianas enrollables de aluminio y PVC. 
              Sistemas manuales o motorizados con aislamiento térmico y 
              acústico. Ideal para viviendas y comercios.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaSun className="text-3xl text-blue-600" />
              Persianas de Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Persianas reforzadas para máxima seguridad en comercios y 
              viviendas. Sistemas anti-intrusión con materiales de alta 
              resistencia y cerraduras de seguridad.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaCog className="text-3xl text-blue-600" />
              Motorización
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Automatización de persianas existentes y nuevas instalaciones. 
              Control remoto, programación horaria y conexión con sistemas 
              domóticos. Máximo confort y eficiencia energética.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Reparación y Mantenimiento
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio técnico especializado en reparación y mantenimiento 
              de todo tipo de persianas. Sustitución de piezas, ajustes y 
              revisiones periódicas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Beneficios de Nuestras Persianas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Seguridad</h3>
              <p className="text-gray-600">
                Sistemas de seguridad avanzados para proteger tu hogar o negocio.
              </p>
            </div>
            <div className="text-center">
              <FaSun className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Eficiencia Energética</h3>
              <p className="text-gray-600">
                Control térmico y lumínico para mayor ahorro energético.
              </p>
            </div>
            <div className="text-center">
              <FaCog className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Automatización</h3>
              <p className="text-gray-600">
                Sistemas inteligentes para mayor comodidad y control.
              </p>
            </div>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
} 