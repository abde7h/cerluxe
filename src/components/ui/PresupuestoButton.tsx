import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

interface PresupuestoButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export default function PresupuestoButton({ children, className }: PresupuestoButtonProps) {
  return (
    <div className="mt-16 text-center max-w-xs mx-auto">
      <Link 
        href="/contacto" 
        className={`flex bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors duration-300 items-center gap-2 justify-center w-full ${className || ''}`}
      >
        <FaQuestionCircle className="text-lg" />
        {children || 'Solicitar Presupuesto'}
      </Link>
    </div>
  );
}