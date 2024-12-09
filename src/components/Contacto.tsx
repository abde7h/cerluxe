"use client";

import React, { useEffect, useState } from 'react';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import TerminosModal from './ui/TerminosModal';

const Contacto: React.FC = () => {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [formError, setFormError] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Esto se ejecutará solo en el lado del cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // O puedes retornar un loading spinner
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceptaTerminos) {
      setFormError('Debes aceptar los términos y condiciones para continuar.');
      return;
    }
    setFormError('');
    // Aquí va la lógica de envío del formulario
  };

  return (
    <section
      id="contacto"
      className="py-8 sm:py-12 md:py-16 bg-gray-100"
      style={{
        scrollMarginTop: window?.location?.pathname === '/' ? '80px' : '0',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te ayudaremos a hacerlas realidad. 
            Nuestro equipo está listo para ofrecerte la mejor solución.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="order-2 md:order-1">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Nombre" required />
              <Input type="email" placeholder="Correo electrónico" required />
              <Input type="tel" placeholder="Número de teléfono" />
              <Textarea 
                placeholder="Descripción del proyecto" 
                required 
                className="min-h-[100px] sm:min-h-[120px] resize-none"
              />
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Adjuntar imagen (opcional):</p>
                <Input 
                  type="file" 
                  accept="image/*"
                  className="cursor-pointer file:cursor-pointer" 
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terminos"
                  checked={aceptaTerminos}
                  onChange={(e) => setAceptaTerminos(e.target.checked)}
                  className="mt-1 cursor-pointer"
                />
                <label 
                  htmlFor="terminos" 
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Acepto los{' '}
                  <button
                    type="button"
                    onClick={() => setModalAbierto(true)}
                    className="text-primary underline hover:text-primary/90 cursor-pointer"
                  >
                    términos y condiciones
                  </button>
                </label>
              </div>

              {formError && (
                <p className="text-red-500 text-sm">{formError}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Enviar Mensaje
              </Button>
            </form>
          </div>

          <div className="order-1 md:order-2 h-[250px] sm:h-[300px] md:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      <TerminosModal 
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />
    </section>
  );
};

export default Contacto;
