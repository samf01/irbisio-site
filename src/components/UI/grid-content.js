import React, { useRef, useEffect, useState } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import useMediaQuery from '../Hooks/MatchMedia'
import Hourglass from './hourglass/hourglass'
//Pass in the layout e.g(--center-4, etc)
const GridContent = ({ children, layout, background, mode, id, hide }) => {
  // We get the height of the content object
  const content = useRef(null)
  const containerRef = useRef(null)
  const [styles, setStyles] = useState({ backgroundImage: 'none' })
  const mobile = useMediaQuery('(max-width: 990px)')

  useEffect(() => {
    switch (mode) {
      case 'light-mode':
        background
          ? setStyles({
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background.publicURL})`,
            })
          : setStyles({ backgroundImage: 'none' })
        break
      case 'dark-mode':
        setStyles({ backgroundImage: 'none' })
        break
      case 'snow-mode':
        setStyles({
          backgroundImage: `url(${background.publicURL})`,
        })
        break
    }
  }, [mode])

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
    const move = -40
    if (!mobile) {
      document.addEventListener('mousemove', event => {
        imageMove(event)
      })
    }
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
      style={styles}
    >
      <div className="container-shape">
        <BackgroundShape />
      </div>
      <div className="grid-column-12">
        <Hourglass content={content} hide={hide} />
        <div className={`grid-content ${layout}`} ref={content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default GridContent
