"use client";

import React from 'react';

interface TerminosCompletosProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

export default function TerminosCompletos({ isOpen, onClose, onBack }: TerminosCompletosProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative max-h-[80vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          aria-label="Cerrar modal"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button
          onClick={onBack}
          className="absolute top-2 left-2 text-gray-600 hover:text-gray-800"
          aria-label="Volver"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="mt-8 text-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Política de Privacidad Completa</h2>
          
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Información General</h3>
            <p className="mb-4">
              Esta política de privacidad establece la forma en que se gestionan los datos personales en [Nombre de la empresa].
            </p>

          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Datos que Recopilamos</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Nombre y apellidos</li>
              <li>Información de contacto (email, teléfono)</li>
              <li>Detalles del proyecto o consulta</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Uso de los Datos</h3>
            <p className="mb-4">
              Sus datos personales serán utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Responder a sus consultas</li>
              <li>Gestionar sus proyectos</li>
              <li>Enviar información relevante sobre nuestros servicios</li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Sus Derechos</h3>
            <p className="mb-4">
              Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactándonos en [email de contacto].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 