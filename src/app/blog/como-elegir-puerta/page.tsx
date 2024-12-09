import React from 'react';
import Image from 'next/image';

const ComoElegirPuerta = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 mt-20">Cómo elegir la puerta perfecta para tu hogar</h1>
        <Image
          src="/assets/blog/puerta.jpg"
          alt="Puerta perfecta"
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6 rounded-lg shadow-lg"
        />
        <p className="text-gray-700 mb-4">
          Elegir la puerta adecuada para tu hogar es una decisión importante que puede afectar tanto la estética como la seguridad de tu casa. Aquí te presentamos algunos factores clave a considerar al seleccionar la puerta perfecta.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">1. Material de la Puerta</h2>
            <p className="text-gray-700 mb-4">
              Las puertas pueden estar hechas de diferentes materiales, como madera, acero, o fibra de vidrio. Cada material tiene sus propias ventajas y desventajas. Por ejemplo, las puertas de madera son estéticamente agradables, pero requieren más mantenimiento.
            </p>
            <Image
              src="/assets/blog/materiales.jpg"
              alt="Materiales de puertas"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">2. Estilo y Diseño</h2>
            <p className="text-gray-700 mb-4">
              El estilo de la puerta debe complementar la arquitectura de tu hogar. Considera si prefieres un diseño moderno, clásico o rústico. También puedes personalizar la puerta con diferentes acabados y colores.
            </p>
            <Image
              src="/assets/blog/estilos.jpg"
              alt="Estilos de puertas"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">3. Seguridad</h2>
        <p className="text-gray-700 mb-4">
          La seguridad es un factor crucial al elegir una puerta. Asegúrate de que la puerta tenga buenas cerraduras y, si es posible, considera puertas reforzadas o de seguridad.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">4. Aislamiento Térmico y Acústico</h2>
        <p className="text-gray-700 mb-4">
          Una buena puerta debe ofrecer aislamiento térmico y acústico. Esto no solo mejora la eficiencia energética de tu hogar, sino que también reduce el ruido exterior.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-800">Conclusión</h2>
        <p className="text-gray-700 mb-4">
          Elegir la puerta perfecta para tu hogar requiere considerar varios factores, desde el material hasta la seguridad. Tómate tu tiempo para investigar y seleccionar la opción que mejor se adapte a tus necesidades y estilo.
        </p>

        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Ver más opciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoElegirPuerta; 