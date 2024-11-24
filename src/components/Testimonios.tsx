"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "EMILIANO AQUILANI",
  },
  {
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "ANNA ITURBE",
  },
  {
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "LARA ATKINSON",
  },
  {
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
    text: "Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.",
    name: "IAN OWEN",
  },
  {
    img: "http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg",
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
                <img
                  className="img-circle w-20 h-20 mx-auto rounded-full mb-3"
                  src={testimonial.img}
                  alt={`Testimonial from ${testimonial.name}`}
                />
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
