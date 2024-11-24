"use client";

const ScrollButton = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToContact}
      className="mt-8 bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
    >
      Pide presupuesto gratis
    </button>
  );
};

export default ScrollButton; 