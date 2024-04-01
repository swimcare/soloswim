"use client";

import { useEffect, useState } from "react";

interface SliderProps {
  totalSlides: number;
  initialSlide: number;
  slideDuration: number;
  children: (currentSlide: number) => React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({
  totalSlides,
  initialSlide,
  slideDuration,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    const slideID = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, slideDuration);
    return () => {
      clearTimeout(slideID);
    };
  }, [currentSlide, totalSlides, slideDuration]);

  return <>{children(currentSlide)}</>;
};

export default Slider;
