"use client";

import { ReactNode, useState } from 'react';

interface CarouselProps {
  children: ReactNode[];
}

export const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const previous = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={previous}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-2 py-1"
      >
        Anterior
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-2 py-1"
      >
        Siguiente
      </button>
    </div>
  );
};

export const CarouselItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
