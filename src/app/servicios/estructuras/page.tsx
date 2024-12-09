import React from 'react';
import { FaIndustry, FaHardHat, FaWarehouse, FaTools, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';
import PresupuestoButton from '@/components/ui/PresupuestoButton';

export default function EstructurasPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900 flex items-center justify-center gap-4">
          <FaIndustry className="text-4xl text-blue-600" />
          Estructuras Metálicas
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            Diseñamos y fabricamos estructuras metálicas de alta calidad para todo tipo de proyectos. 
            Combinamos innovación técnica con durabilidad y seguridad para crear soluciones 
            que superan las expectativas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaWarehouse className="text-3xl text-blue-600" />
              Naves Industriales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Construcción de naves industriales a medida, optimizando espacios y 
              garantizando la máxima resistencia. Diseños personalizados según las 
              necesidades específicas de cada proyecto industrial.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaHardHat className="text-3xl text-blue-600" />
              Estructuras Comerciales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Desarrollo de estructuras para espacios comerciales, incluyendo 
              entreplantas, escaleras y refuerzos estructurales. Soluciones 
              que combinan funcionalidad y estética.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaIndustry className="text-3xl text-blue-600" />
              Proyectos Especiales
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Fabricación de estructuras especiales para proyectos únicos. 
              Desde pasarelas industriales hasta estructuras arquitectónicas 
              complejas, adaptándonos a cualquier requerimiento técnico.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out p-8 transform hover:-translate-y-1">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-3">
              <FaTools className="text-3xl text-blue-600" />
              Mantenimiento Industrial
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Servicios completos de mantenimiento y reparación de estructuras 
              metálicas. Inspecciones periódicas, refuerzos estructurales y 
              soluciones preventivas.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Ventajas de Nuestras Estructuras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Máxima Resistencia</h3>
              <p className="text-gray-600">
                Estructuras calculadas y diseñadas para garantizar la máxima 
                seguridad y durabilidad.
              </p>
            </div>
            <div className="text-center">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profesionalidad</h3>
              <p className="text-gray-600">
                Equipo técnico especializado con amplia experiencia en el sector.
              </p>
            </div>
            <div className="text-center">
              <FaIndustry className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalización</h3>
              <p className="text-gray-600">
                Adaptamos cada proyecto a las necesidades específicas del cliente.
              </p>
            </div>
          </div>
        </div>

        <PresupuestoButton />
      </div>
    </div>
  );
} 