import React, { useState, useEffect, useRef } from "react";
import "../style/globalStyle.css";

const AppCarousel = ({ items, autoPlay = true, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsCount = items.length;
  const autoPlayRef = useRef();

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsCount);
    console.log("itemCount", itemsCount, currentIndex);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = nextSlide;
    }
  }, [autoPlay]);

  useEffect(() => {
    const play = () => autoPlayRef.current && autoPlayRef.current();
    const timer = setInterval(play, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="carousel">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={item}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default AppCarousel;
