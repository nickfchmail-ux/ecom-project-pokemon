import { useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
function Carousel({ isLoading, error }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    "akin-cakiner-9cIkK-hLD9k-unsplash.jpg",
    "connor-dickson-A1I8g8NccNg-unsplash.jpg",
    "halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg",
    "guillermo-diaz-fs6zYhHyzvI-unsplash.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading cabins: {error.message}</div>;
  return (
    <>
      <div
        className={`${styles.wrapper} mx-auto h-[25vh] w-[65vw] md:h-[45vh]`}
      >
        <div
          className={styles.wrapper_holder}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div id="slider_image_1" />
          <div id="slider_image_2" />
          <div id="slider_image_3" />
          <div id="slider_image_4" />
        </div>
      </div>

      <div className={styles.buttonHolder}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.button} ${activeIndex === index ? styles.active : ""} h-2 w-2`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default Carousel;
