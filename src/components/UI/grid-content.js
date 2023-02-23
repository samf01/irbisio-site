import React, { useRef, useEffect } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import Hourglass from './hourglass'
//Pass in the layout e.g(--center-4, etc)
const GridContent = ({ children, layout, background, mode, id }) => {
  // We get the height of the content object
  const content = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const imageMove = event => {
      window.requestAnimationFrame(() => {
        //Percentage of width
        let posX = ((event.clientX - width / 200) / width) * move
        let posY = ((event.clientY - height / 200) / height) * move
        if (containerRef.current)
          containerRef.current.style.backgroundPosition =
            posX + 'px ' + posY + 'px'
      })
    }
    const width = window.innerWidth
    const height = window.innerHeight

    //Amount the image can move (px)
    const move = 40

    document.addEventListener('mousemove', event => {
      imageMove(event)
    })
    return () =>
      document.removeEventListener('mousemove', event => {
        imageMove(event)
      })
  }, [containerRef])

  return (
    <div
      className={`container ${mode}`}
      ref={containerRef}
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
        <BackgroundShape />
      </div>
      <div className="grid-column-12">
        <Hourglass content={content} />
        <div className={`grid-content ${layout}`} ref={content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GridContent
