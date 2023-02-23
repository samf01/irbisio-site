import React, { useRef } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import Hourglass from './hourglass'
//Pass in the layout e.g(--center-4, etc)
const GridContent = ({ children, layout, background, mode, id }) => {
  // We get the height of the content object
  const content = useRef(null)

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
