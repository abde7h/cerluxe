"use client";

import { Card, CardContent } from '@/components/ui/Card';

const servicios = [
  {
    imageUrl: '/assets/servicios/puertas.webp',
    title: 'Fabricación y montaje de puertas y ventanas',
    description: 'Diseñamos y fabricamos puertas y ventanas a medida para tu hogar o negocio.',
  },
  {
    imageUrl:'/assets/servicios/cerrajeria.png',
    title: 'Instalación de cerrajería',
    description: 'Instalamos y reparamos todo tipo de cerraduras y sistemas de seguridad.',
  },
  {
    imageUrl: '/assets/servicios/mantenimiento.jpg',
    title: 'Fabricación y mantenimiento de estructuras',
    description: 'Fabricamos y realizamos mantenimiento preventivo y correctivo de estructuras metálicas.',
  },
  {
    imageUrl: '/assets/servicios/cerramiento.jpg',
    title: 'Cerramientos',
    description: 'Cerramientos de calidad para terrazas y patios.',
  },
  {
    imageUrl: '/assets/servicios/persiana.jpg',
    title: 'Persianas',
    description: 'Instalación y reparación de persianas.',
  },
  {
    imageUrl: '/assets/servicios/toldos.jpg',
    title: 'Toldos',
    description: 'Montaje de toldos resistentes y duraderos.',
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden bg-white"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
