import React from 'react';
import { FaDoorOpen, FaWindowMaximize, FaShieldAlt, FaTools, FaHome } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

export default function PuertasVentanasPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaDoorOpen className="text-4xl text-blue-600" />
          Puertas y Ventanas
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Suministro e instalación de puertas y ventanas de alta calidad. 
            Soluciones personalizadas que combinan seguridad, eficiencia 
            energética y diseño para tu hogar o negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaDoorOpen className="text-3xl text-blue-600" />
              Puertas de Aluminio
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Puertas de aluminio con diseños modernos y funcionales. 
              Diferentes acabados y sistemas de apertura. Alta resistencia 
              y mínimo mantenimiento. Ideal para exteriores e interiores.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaWindowMaximize className="text-3xl text-blue-600" />
              Ventanas Térmicas
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ventanas con rotura de puente térmico y doble acristalamiento. 
              Máximo aislamiento térmico y acústico. Diferentes sistemas de 
              apertura adaptados a cada necesidad.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaShieldAlt className="text-3xl text-blue-600" />
              Sistemas de Seguridad
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Puertas y ventanas con sistemas de seguridad avanzados. 
              Cerraduras multipunto, cristales de seguridad y herrajes 
              anti-palanca. Máxima protección para tu hogar.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Mantenimiento
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicio completo de mantenimiento y reparación. Ajustes, 
              cambio de herrajes, sustitución de cristales y reparación 
              de mecanismos. Respuesta rápida y eficaz.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Ventajas de Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Seguridad</h3>
              <p className="text-gray-600">
                Sistemas de seguridad avanzados y materiales resistentes.
              </p>
            </div>
            <div className="text-center">
              <FaHome className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Eficiencia</h3>
              <p className="text-gray-600">
                Máximo aislamiento térmico y acústico garantizado.
              </p>
            </div>
            <div className="text-center">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl text-gray-800 font-semibold mb-2">Durabilidad</h3>
              <p className="text-gray-600">
                Materiales de primera calidad con garantía extendida.
              </p>
            </div>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
} 