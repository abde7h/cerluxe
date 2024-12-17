"use client";

import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import Image from 'next/image';

interface Servicio {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const servicios: Servicio[] = [
  {
    id: 1,
    imageUrl: '/assets/servicios/puertas.webp',
    title: 'Fabricación y montaje de puertas y ventanas',
    description: 'Diseñamos y fabricamos puertas y ventanas a medida para tu hogar o negocio.',
    link: '/servicios/puertas-ventanas',
  },
  {
    id: 2,
    imageUrl:'/assets/servicios/cerrajeria.png',
    title: 'Instalación de cerrajería',
    description: 'Instalamos y reparamos todo tipo de cerraduras y sistemas de seguridad.',
    link: '/servicios/cerrajeria',
  },
  {
    id: 3,
    imageUrl: '/assets/servicios/mantenimiento.jpg',
    title: 'Fabricación y mantenimiento de estructuras',
    description: 'Fabricamos y realizamos mantenimiento preventivo y correctivo de estructuras metálicas.',
    link: '/servicios/estructuras',
  },
  {
    id: 4,
    imageUrl: '/assets/servicios/cerramiento.jpg',
    title: 'Cerramientos',
    description: 'Cerramientos de calidad para terrazas y patios.',
    link: '/servicios/cerramientos',
  },
  {
    id: 5,
    imageUrl: '/assets/servicios/persiana.jpg',
    title: 'Persianas',
    description: 'Instalación y reparación de persianas.',
    link: '/servicios/persianas',
  },
  {
    id: 6,
    imageUrl: '/assets/servicios/toldos.jpg',
    title: 'Toldos',
    description: 'Montaje de toldos resistentes y duraderos.',
    link: '/servicios/toldos',
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-100 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((service) => (
            <Link key={service.id} href={service.link}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-white h-full flex flex-col transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    width={500}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
