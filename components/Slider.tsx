"use client";

import { useEffect, useState } from "react";

interface SliderProps {
  totalSlides: number;
  initialSlide: number;
  slideDuration: number;
  children: (
    currentSlide: number,
    changeSlide: (index: number) => void
  ) => React.ReactNode;
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

  const changeSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return <>{children(currentSlide, changeSlide)}</>;
};

export default Slider;
