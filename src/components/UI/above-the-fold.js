import React, { useState, useRef } from 'react'
import { BackgroundShape } from '../graphics/background-shape'
import { Close, Fullscreen, Pause, Play } from '../graphics/video-controls'
import ReactModal from 'react-modal'
import video from '../../../static/assets/video-1.mp4'
import useScrollBlock from '../Hooks/useScrollBlock'
import { TopShape, BottomShape } from '../graphics/landing-shape'
import Logo from '../graphics/logo'

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

  function handlePlay() {
    isPlaying(!playing)
    playing ? videoRef.current.play() : videoRef.current.pause()
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
    <div className={`container dark-mode`} id="atf">
      <div className="container-shape">
        <video ref={videoRef} autoPlay loop muted className="video-cutter">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        <div className="video-controls">
          <button onClick={handlePlay}>{playing ? <Play /> : <Pause />}</button>
          <button onClick={handleOpen}>
            <Fullscreen />
          </button>
        </div>
      </div>
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
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            style={{ position: 'relative', top: ' 85px', right: '105px' }}
            onClick={handleClose}
          >
            <Close />
          </div>
        </div>
      </ReactModal>
    </div>
  )
}

export default Landing
