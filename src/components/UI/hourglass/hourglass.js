import React, { useEffect, useRef, useState } from 'react'
import './hourglass.css'

const Hourglass = ({ content, hide }) => {
  const hourglass = useRef(null)
  // Set the 0% keyframe dimensions based on the height of the content
  const [knockin, setKnockin] = useState()

  useEffect(() => {
    // We need svg brand mark on left
    const contentBounds = content.current.getBoundingClientRect()
    // The difference between the top and bottom of the knockin, should be
    setKnockin((75 / contentBounds.height) * 100)

    //Get the parent relative position
    const parentBounds = content.current.parentElement.getBoundingClientRect()
    window.requestAnimationFrame(() => {
      if (hourglass.current) {
        //The actual top is subtracted from the parent top
        const relativeTop = contentBounds.top - parentBounds.top
        hourglass.current.style.top = `${relativeTop}px`
        hourglass.current.style.height = `${contentBounds.height}px`
      }
    })
  }, [content, hourglass])

  return (
    <div
      className="hourglass"
      ref={hourglass}
      style={hide && { display: 'none' }}
    >
      <div className="hourglass-container">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points=""
            className="hourglass-polygon"
            fill="var(--irbisio-off-white)"
          >
            <animate
              attributeName="points"
              repeatCount="indefinite"
              dur="4s"
              fill="freeze"
              values={` 0 0,
                    100 0,
                    100 ${5 - knockin / 3},
                    50 5,
                    100 ${5 + knockin / 3},
                    100 100,
                    0 100,
                    0 ${5 + knockin / 3},
                    50 5,
                    0 ${5 - knockin / 3};
                    0 0,
                    100 0,
                    100 ${95 - knockin / 3},
                    50 95,
                    100 ${95 + knockin / 3},
                    100 100,
                    0 100,
                    0 ${95 + knockin / 3},
                    50 95,
                    0 ${95 - knockin / 3}`}
              keyTimes="0; 1"
            />
          </polygon>
        </svg>
      </div>
    </div>
  )
}

export default Hourglass
