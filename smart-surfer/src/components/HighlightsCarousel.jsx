import { useEffect, useState } from "react";
import "./HighlightsCarousel.css";

const highlightImages = Object.entries(
  import.meta.glob("../public/images/Highlights/*.jpg", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([firstPath], [secondPath]) => {
    const firstNumber = Number(firstPath.match(/Highlights (\d+)\.jpg$/)?.[1]);
    const secondNumber = Number(
      secondPath.match(/Highlights (\d+)\.jpg$/)?.[1],
    );
    return firstNumber - secondNumber;
  })
  .map(([, image]) => image);

function HighlightsCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = highlightImages.length;

  useEffect(() => {
    if (slideCount < 2 || isPaused) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slideCount);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, slideCount]);

  const moveSlide = (direction) => {
    setActiveSlide(
      (currentSlide) => (currentSlide + direction + slideCount) % slideCount,
    );
  };

  if (slideCount === 0) {
    return null;
  }

  return (
    <section className="highlights-section" aria-labelledby="highlights-heading">
      <div className="section-heading">
        <p className="eyebrow">Together for safer spaces</p>
        <h2 id="highlights-heading">Highlights</h2>
      </div>
      <div
        className="highlights-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Highlights slideshow"
      >
        <button
          className="highlight-arrow highlight-arrow-previous"
          type="button"
          onClick={() => moveSlide(-1)}
          aria-label="View previous highlight"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <div className="highlight-slide">
          <img
            src={highlightImages[activeSlide]}
            alt={`Highlight ${activeSlide + 1}`}
          />
        </div>
        <button
          className="highlight-arrow highlight-arrow-next"
          type="button"
          onClick={() => moveSlide(1)}
          aria-label="View next highlight"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="highlight-dots" aria-label="Highlight slides">
        {highlightImages.map((_, index) => (
          <button
            className={`highlight-dot ${
              index === activeSlide ? "active" : ""
            }`}
            type="button"
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show highlight slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default HighlightsCarousel;
