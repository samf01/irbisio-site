import React, { useRef, useEffect } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import useMediaQuery from '../Hooks/MatchMedia'
import Hourglass from './hourglass/hourglass'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

//Pass in the layout e.g(--center-4, etc)
const GridContent = ({ children, layout, background, mode, id, hide }) => {
  // We get the height of the content object
  const content = useRef(null)
  const containerRef = useRef(null)

  const mobile = useMediaQuery('(max-width: 990px)')

  const image = getImage(background)

  useEffect(() => {
    const gatsbyImageBackground = containerRef.current.childNodes[0]

    const imageMove = event => {
      window.requestAnimationFrame(() => {
        //Percentage of width
        let posX = ((event.clientX - width / 200) / width) * -move
        let posY = ((event.clientY - height / 200) / height) * -move
        if (gatsbyImageBackground)
          gatsbyImageBackground.style.top = -posY + 'px '
        gatsbyImageBackground.style.left = -posX + 'px '
      })
    }
    const width = window.innerWidth
    const height = window.innerHeight

    //Amount the image can move (px)
    const move = -40
    if (!mobile || mode !== 'dark-mode') {
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
    <div className={`container ${mode}`} ref={containerRef} id={id}>
      {mode !== 'dark-mode' ? (
        <GatsbyImage
          image={image}
          alt=""
          style={{
            position: 'absolute',
            height: '110%',
          }}
        />
      ) : (
        <div />
      )}
      <BackgroundShape mode={mode} />

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
