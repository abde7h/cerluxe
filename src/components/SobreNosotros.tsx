import { Award, Users, Wrench, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const SobreNosotros = () => {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Experiencia Comprobada",
      description: "Más de una década transformando ideas en realidades metálicas, con cientos de proyectos exitosos completados."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Equipo Especializado",
      description: "Profesionales altamente cualificados y en constante formación para ofrecer las últimas innovaciones del sector."
    },
    {
      icon: <Wrench className="h-6 w-6 text-primary" />,
      title: "Tecnología Avanzada",
      description: "Utilizamos maquinaria de última generación y técnicas innovadoras para garantizar acabados perfectos."
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Calidad Garantizada",
      description: "Compromiso total con la excelencia, utilizando solo materiales de primera calidad y ofreciendo garantía en todos nuestros trabajos."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado de la sección */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestra Historia de Excelencia
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Desde 2013, nos hemos dedicado a transformar espacios y crear soluciones 
              metálicas innovadoras que superan las expectativas de nuestros clientes.
            </p>
          </div>

          {/* Contenido principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Compromiso con la Calidad
              </h3>
              <p className="text-gray-300">
                En cada proyecto que emprendemos, volcamos nuestra pasión por la 
                artesanía metálica y nuestro compromiso con la excelencia. Nuestro 
                equipo de expertos combina técnicas tradicionales con tecnología 
                moderna para crear soluciones duraderas y estéticamente impresionantes.
              </p>
              <p className="text-gray-300">
                Nos enorgullece mantener los más altos estándares de calidad en 
                cada aspecto de nuestro trabajo, desde la selección de materiales 
                hasta el acabado final. Cada proyecto es una oportunidad para 
                demostrar nuestra dedicación a la artesanía y la innovación.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-300">Años de Experiencia</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-300">Proyectos Completados</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] w-full">
              <Image
                src="/assets/about/team.jpg"
                alt="Nuestro equipo trabajando"
                fill
                className="rounded-lg shadow-xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
  