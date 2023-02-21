import React, { useEffect, useRef } from 'react'

//Pass in the layout e.g(--center-4, etc)
const GirdContent = ({ children, layout }) => {
  // Here we add the SVG brand shape vertically running down column-start: 3
  // We get the height of the content object
  const content = useRef(null)
  const hourglass = useRef(null)
  // We need a pagination object on right

  useEffect(() => {
    // We need svg brand mark on left
    const contentBounds = content.current.getBoundingClientRect()

    window.requestAnimationFrame(() => {
      hourglass.current.style.top = `${contentBounds.top}px`
      hourglass.current.style.height = `${contentBounds.height}px`
    })
  }, [content, hourglass])
  return (
    <div className="grid-column-12">
      <div className="hourglass" ref={hourglass}></div>
      <div className={`grid-content ${layout}`} ref={content}>
        {children}
      </div>
    </div>
  )
}

export default GirdContent
