import React, { useEffect, useRef } from 'react'
//Pass in the layout e.g(--center-4, etc)
const GridContent = ({ children, layout, background, mode, id }) => {
  // We get the height of the content object
  const content = useRef(null)
  const hourglass = useRef(null)
  // We need a pagination object on right

  //Set background and colour scheme of content

  // Here we add the SVG brand shape vertically running down column-start: 3
  useEffect(() => {
    // We need svg brand mark on left
    const contentBounds = content.current.getBoundingClientRect()
    //Get the parent relative position
    const parentBounds = content.current.parentElement.getBoundingClientRect()
    window.requestAnimationFrame(() => {
      //The actual top is subtracted from the parent top
      const relativeTop = contentBounds.top - parentBounds.top
      hourglass.current.style.top = `${relativeTop}px`
      hourglass.current.style.height = `${contentBounds.height}px`
    })
  }, [content, hourglass])
  return (
    <div
      className={`container ${mode}`}
      id={id}
      style={
        mode === 'light-mode'
          ? {
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
            }
          : { backgroundImage: 'none' }
      }
    >
      <div className="container-shape">
        <svg
          width="100%"
          height="1116"
          viewBox="0 0 1728 1116"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxHeight: '100vh' }}
        >
          <path
            d="M-8.7112e-05 498.223L0 0L1728 0.000302133L1728 498.223L864 1116L-8.7112e-05 498.223Z"
            fill="#F3F3F3"
            style={{ mixBlendMode: 'multiply' }}
          />
        </svg>
      </div>
      <div className="grid-column-12">
        <div className="hourglass" ref={hourglass} />
        <div className={`grid-content ${layout}`} ref={content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GridContent
