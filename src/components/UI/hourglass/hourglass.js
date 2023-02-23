import React, { useEffect, useRef } from 'react'
import './hourglass.css'

const Hourglass = ({ content, hide }) => {
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
      className="hourglass"
      ref={hourglass}
      style={hide && { display: 'none' }}
    />
  )
}

export default Hourglass
