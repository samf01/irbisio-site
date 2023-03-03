import React from 'react'

export const BackgroundShape = ({ mode }) => {
  return (
    <svg
      width="100%"
      height="1116"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="var(--irbisio-grey)"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxHeight: '100vh',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill={mode === 'light-mode' ? 'rgba(0, 0, 0, 0.4)' : 'none'}
        style={{ mixBlendMode: 'multiply' }}
      />
      <path
        d="M0 0H100V30L50 100L0 30Z"
        fill={
          mode === 'light-mode' ? 'rgba(0, 0, 0, 0.4)' : 'var(--irbsisio-grey)'
        }
        style={{ mixBlendMode: 'multiply' }}
      />
    </svg>
  )
}
