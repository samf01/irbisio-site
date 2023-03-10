import React, { useState, useRef, useEffect } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import { Close, Fullscreen, Pause, Play } from '../graphics/video-controls'
import ReactModal from 'react-modal'
import videoMp4 from '../../../static/assets/video-1.mp4'
import videoWebM from '../../../static/assets/video-1.webm'
import useScrollBlock from '../Hooks/useScrollBlock'
import { TopShape, BottomShape } from '../graphics/landing-shape'
import Logo from '../graphics/logo'
import poster from '../../../static/assets/poster.jpg'
import useMediaQuery from '../Hooks/MatchMedia'
import { useInView } from 'react-spring'

const customStyles = {
  content: {
    top: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    padding: '0',
    border: 'none',
  },
}

const Landing = () => {
  const [playing, isPlaying] = useState(true)
  const videoRef = useRef(null)
  const [containerRef, isInView] = useInView({})
  const [fullscreen, makeFullscreen] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()

  const mobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (videoRef.current)
      isInView ? videoRef.current.play() : videoRef.current.pause()
  }, [isInView])

  function handlePlay() {
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

  return (
    <div className="container" id="atf" ref={containerRef}>
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
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebM} type="video/webM" />
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
          ariaHideApp={false}
        >
          <div
            style={{
              position: 'relative',
              top: 0,
              left: 0,
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
              rotate-to-fullscreen="true"
            >
              <source src={videoMp4} type="video/mp4" />
              <source src={videoWebM} type="video/webM" />
              Your browser does not support the video tag.
            </video>
            <button
              aria-label="Close"
              role="button"
              style={{ position: 'absolute', top: ' 12%', right: '6%' }}
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
