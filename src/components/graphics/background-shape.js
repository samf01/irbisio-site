import React from 'react'

export const BackgroundShape = () => {
  return (
    <svg
      width="100%"
      height="1116"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        maxHeight: '100vh',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <path d="M0 0H100V30L50 100L0 30Z" fill="var(--irbisio-grey)" />
    </svg>
  )
}
