"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image';

const testimonials = [
  {
    img: "/assets/testimonials/testimonial1.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "EMILIANO AQUILANI",
  },
  {
    img: "/assets/testimonials/testimonial2.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "ANNA ITURBE",
  },
  {
    img: "/assets/testimonials/testimonial3.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "LARA ATKINSON",
  },
  {
    img: "/assets/testimonials/testimonial4.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "IAN OWEN",
  },
  {
    img: "/assets/testimonials/testimonial5.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "MICHAEL TEDDY",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials py-16 bg-gray-100 relative">
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1170: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-effect bg-white p-6 rounded-lg border border-gray-200 text-center transition-transform transform scale-90 hover:scale-95">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.img}
                    alt={`Testimonial from ${testimonial.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-3">{testimonial.text}</p>
                <div className="testimonial-name text-white bg-blue-600 px-4 py-1 text-sm rounded-full shadow-md inline-block">
                  {testimonial.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Contenedor con margen adicional */}
        <div className="mt-6 swiper-pagination-wrapper">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
