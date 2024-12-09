import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function PresupuestoButton() {
  return (
    <div className="mt-16 text-center max-w-xs mx-auto">
      <a 
        href="/contacto" 
        className="flex bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300 items-center gap-2 justify-center w-full"
      >
        <FaQuestionCircle className="text-lg" />
        Solicitar Presupuesto
      </a>
    </div>
  );
}