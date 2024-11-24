"use client";
import React, { useState } from 'react';
import TerminosCompletos from './TerminosCompletos';

interface TerminosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TerminosModal: React.FC<TerminosModalProps> = ({ isOpen, onClose }) => {
  const [mostrarTerminosCompletos, setMostrarTerminosCompletos] = useState(false);

  if (!isOpen) return null;

  const handleTerminosCompletosClose = () => {
    setMostrarTerminosCompletos(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Política de Privacidad</h2>
          <div className="mb-4 max-h-60 overflow-y-auto text-gray-700">
            <p className="mb-2">
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, le informamos de lo siguiente:
            </p>
            <ul className="list-disc list-inside mb-2">
              <li>
                <strong className="text-gray-900">Responsable del tratamiento:</strong> [Nombre de tu empresa o responsable].
              </li>
              <li>
                <strong className="text-gray-900">Finalidad:</strong> Gestionar y responder a las consultas realizadas a través del formulario de contacto.
              </li>
              <li>
                <strong className="text-gray-900">Legitimación:</strong> Consentimiento del interesado al enviar el formulario.
              </li>
              <li>
                <strong className="text-gray-900">Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.
              </li>
              <li>
                <strong className="text-gray-900">Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.
              </li>
            </ul>
            <p className="mb-2">
              Puede consultar la información adicional y detallada sobre Protección de Datos en nuestra{' '}
              <button
                onClick={() => setMostrarTerminosCompletos(true)}
                className="text-primary underline hover:text-primary/90"
              >
                política de privacidad completa
              </button>.
            </p>
          </div>
          <button
            onClick={onClose}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
          >
            Cerrar
          </button>
        </div>
      </div>

      <TerminosCompletos 
        isOpen={mostrarTerminosCompletos}
        onClose={handleTerminosCompletosClose}
        onBack={() => setMostrarTerminosCompletos(false)}
      />
    </>
  );
};

export default TerminosModal;
