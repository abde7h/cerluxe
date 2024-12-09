"use client";

import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Galeria from '@/components/Galeria';
import SobreNosotros from '@/components/SobreNosotros';
import Contacto from '@/components/Contacto';
import Recomendacion from '@/components/Recomendacion';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Servicios />
      <Recomendacion /> 
      <Galeria />
      <SobreNosotros />
      <Contacto />
    </>
  );
}
