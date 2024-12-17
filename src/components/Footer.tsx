import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-12 mb-8 md:mb-12">
          {/* Enlaces Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="hover:text-gray-300 text-gray-400 hover:translate-x-1 transform transition duration-200"
              >
                Inicio
              </Link>
              <Link 
                href="/servicios" 
                className="hover:text-gray-300 text-gray-400 hover:translate-x-1 transform transition duration-200"
              >
                Servicios
              </Link>
              <Link 
                href="/galeria" 
                className="hover:text-gray-300 text-gray-400 hover:translate-x-1 transform transition duration-200"
              >
                Galería
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className="hover:text-gray-300 text-gray-400 hover:translate-x-1 transform transition duration-200"
              >
                Sobre Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="hover:text-gray-300 text-gray-400 hover:translate-x-1 transform transition duration-200"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Información de Contacto */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Contacto</h3>
            <div className="space-y-4">
              <p className="flex items-center justify-center sm:justify-start gap-3 text-gray-400 hover:text-gray-300 transition-colors duration-200">
                <MapPin size={20} className="flex-shrink-0" />
                <span>Calle Trencat 26 Bajo izquierda Rafelbunyol 46138</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={20} className="flex-shrink-0 text-gray-400" />
                <a 
                  href="tel:+34 624 32 10 60" 
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  +34 624 32 10 60
                </a>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <Mail size={20} className="flex-shrink-0 text-gray-400" />
                <a 
                  href="mailto:info@cerluxe.es" 
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 break-all"
                >
                  info@cerluxe.es
                </a>
              </p>
            </div>
          </div>

          {/* Redes Sociales */}
          {/* 
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Síguenos</h3>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300 transition-all duration-200 p-2 hover:bg-gray-700 rounded-full transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-300 transition-all duration-200 p-2 hover:bg-gray-700 rounded-full transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>
          */}
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-8">
          {/* Logo y Copyright */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-[120px] h-24 sm:h-28 md:h-32">
              <Image
                src="/assets/Logo.png"
                alt="Logo"
                fill
                className="transition-transform duration-300 hover:scale-105 object-contain"
                priority
              />
            </div>
            <p className="text-center text-sm md:text-base text-gray-400">
              &copy; {new Date().getFullYear()} Carpintero Metálico
              <span className="block sm:inline sm:ml-1">
                Todos los derechos reservados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
