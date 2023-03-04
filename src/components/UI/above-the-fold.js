import React, { useState, useRef } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import { Close, Fullscreen, Pause, Play } from '../graphics/video-controls'
import ReactModal from 'react-modal'
import video from '../../../static/assets/video-1.mp4'
import useScrollBlock from '../Hooks/useScrollBlock'
import { TopShape, BottomShape } from '../graphics/landing-shape'
import Logo from '../graphics/logo'
import poster from '../../../static/assets/poster.jpg'
import useMediaQuery from '../Hooks/MatchMedia'

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
  },
}

const Landing = () => {
  const [playing, isPlaying] = useState(true)
  const videoRef = useRef(null)
  const [fullscreen, makeFullscreen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  const mobile = useMediaQuery('(max-width: 768px)')

  function handlePlay() {
    console.log(playing)
    playing ? videoRef.current.pause() : videoRef.current.play()
    isPlaying(!playing)
  }

  function handleClose() {
    makeFullscreen(false)
    //videoRef.current.pause()
  }

  function handleOpen() {
    makeFullscreen(!fullscreen)
    setTimeout(() => {
      videoRef.current.play()
    }, 700)
  }

  console.log(mobile)

  return (
    <div className="container" id="atf">
      <div className="container-shape">
        {!mobile && (
          <video
            ref={videoRef}
            autoPlay
            loop
            preload="none"
            muted
            playsInline
            className="video-cutter"
            poster={poster}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <BackgroundShape />
      </div>
      <div
        className="grid-column-12"
        style={{
          height: '100vh',
          gridTemplateRows: '1fr auto 1fr',
          rowGap: '24px',
        }}
      >
        <TopShape />
        <div className="landing-content-center">
          <Logo />
        </div>
        <BottomShape />
        {!mobile && (
          <div className="video-controls">
            <button role="button" aria-label="Play/Pause" onClick={handlePlay}>
              {playing ? <Pause /> : <Play />}
            </button>
            <button role="button" aria-label="Fullscreen" onClick={handleOpen}>
              <Fullscreen />
            </button>
          </div>
        )}
      </div>
      {!mobile && (
        <ReactModal
          isOpen={fullscreen}
          onAfterOpen={blockScroll}
          onRequestClose={allowScroll()}
          contentLabel="Video Viewer"
          style={customStyles}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <video
              width="100%"
              height="100%"
              controls
              playsInline
              id="video-block"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              rotate-to-fullscreen
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button
              aria-label="Close"
              role="button"
              style={{ position: 'relative', top: ' 85px', right: '105px' }}
              onClick={handleClose}
            >
              <Close />
            </button>
          </div>
        </ReactModal>
      )}
    </div>
  )
}

export default Landing
