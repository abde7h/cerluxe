import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Cargar OwlCarousel dinámicamente para evitar problemas con SSR
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const testimonials = [
  {
    name: 'EMILIANO AQUILANI',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'ANNA ITURBE',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'LARA ATKINSON',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'IAN OWEN',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
  {
    name: 'MICHAEL TEDDY',
    image: 'http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg',
    text: 'Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.',
  },
];

const Testimonials = () => {
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-12">
            <OwlCarousel className="owl-theme" {...options}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="transition-transform duration-300 ease-in-out transform scale-90 opacity-50 text-center py-12 px-4 mb-20"
                >
                  <div className="bg-white p-5 rounded shadow-lg border border-gray-200">
                    <img
                      className="rounded-full mx-auto mb-4 max-w-[90px]"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-[-1rem] mx-auto inline-block bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md text-center">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
