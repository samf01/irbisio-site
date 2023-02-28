import React, { useRef } from 'react'
import './carousel.css'

//Simple Carousel Slider without any infinte repeat or auto-slide back to start. Make sure each child has className="slide"

const Carousel = ({ children }) => {
  const slideRef = useRef(null)

  function nextSlide() {
    const slidesContainer = slideRef.current.childNodes[0]
    const slideWidth = slidesContainer.clientWidth
    slidesContainer.scrollLeft += slideWidth
  }

  function prevSlide() {
    const slidesContainer = slideRef.current.childNodes[0]
    const slideWidth = slidesContainer.clientWidth
    slidesContainer.scrollLeft -= slideWidth
  }

  return (
    <>
      <section class="slider-wrapper" ref={slideRef}>
        <ul class="slides-container" id="slides-container">
          {children}
        </ul>

        <span className="team-controls">
          <button onClick={prevSlide}>
            <h4>Prev</h4>
          </button>
          <button onClick={nextSlide}>
            <h4>Next</h4>
          </button>
        </span>
      </section>
    </>
  )
}

export default Carousel
