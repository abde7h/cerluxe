"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const servicios = [
  { nombre: "Cerrajería", url: "/servicios/cerrajeria" },
  { nombre: "Puertas", url: "/servicios/puertas" },
  { nombre: "Ventanas", url: "/servicios/ventanas" },
  { nombre: "Rejas", url: "/servicios/rejas" },
  { nombre: "Escaleras", url: "/servicios/escaleras" },
  { nombre: "Estructuras", url: "/servicios/estructuras" },
  { nombre: "Instalación y Mantenimiento", url: "/servicios/mantenimiento" },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setIsServiciosOpen(false);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    const menuMobile = document.getElementById('mobile-menu');
    if (menuMobile) {
      menuMobile.style.opacity = '0';
      menuMobile.style.transform = 'translateY(-10px)';
    }

    setTimeout(() => {
      closeMenu();
      if (href) {
        if (href === '/#contacto') {
          if (window.location.pathname === '/') {
            const element = document.querySelector('#contacto');
            element?.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/contacto';
          }
        } else {
          window.location.href = href;
        }
      }
    }, 300);
  }, [closeMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [closeMenu]);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <img
                src="/assets/Logo.png"
                alt="Logo"
                width={70}
                height={70}
                className="mr-4"
              />
            </Link>
          </div>

          {/* Navegación principal */}
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink href="/">Inicio</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="primary"
                  className="hover:bg-gray-700 inline-flex items-center px-4 py-2 text-sm font-medium transition duration-200"
                >
                  Servicios
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="z-50 py-2 w-48 bg-gray-800 text-white border border-gray-700 shadow-lg"
              >
                {servicios.map((servicio) => (
                  <DropdownMenuItem key={servicio.url} asChild>
                    <Link
                      href={servicio.url}
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-150"
                    >
                      {servicio.nombre}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/galeria">Galería de Trabajos</NavLink>
            <NavLink href="/sobre-nosotros">Sobre Nosotros</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/#contacto">Contacto</NavLink>
          </div>

          {/* Botón menú móvil */}
          <div className="flex items-center sm:hidden">
            <Button
              variant="primary"
              size="icon"
              className="p-2 rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`sm:hidden bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        style={{
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink href="/" onClick={handleNavClick}>
            Inicio
          </MobileNavLink>
          
          <div className="pl-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsServiciosOpen(!isServiciosOpen);
              }}
              className="w-full text-left py-2 flex items-center justify-between hover:bg-gray-700 rounded-md px-3"
            >
              Servicios
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                  isServiciosOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isServiciosOpen ? '1000px' : '0',
                opacity: isServiciosOpen ? 1 : 0,
              }}
            >
              <div className="ml-4 space-y-2 py-2">
                {servicios.map((servicio) => (
                  <MobileNavLink
                    key={servicio.url}
                    href={servicio.url}
                    onClick={handleNavClick}
                  >
                    {servicio.nombre}
                  </MobileNavLink>
                ))}
              </div>
            </div>
          </div>

          <MobileNavLink href="/galeria" onClick={handleNavClick}>
            Galería de Trabajos
          </MobileNavLink>
          <MobileNavLink href="/sobre-nosotros" onClick={handleNavClick}>
            Sobre Nosotros
          </MobileNavLink>
          <MobileNavLink href="/blog" onClick={handleNavClick}>
            Blog
          </MobileNavLink>
          <MobileNavLink href="/#contacto" onClick={handleNavClick}>
            Contacto
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-gray-300 inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 hover:bg-gray-700 rounded-md"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium transition-colors duration-150 hover:bg-gray-700 rounded-md"
    >
      {children}
    </Link>
  );
}
