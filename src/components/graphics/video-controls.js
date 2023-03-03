import React from 'react'

export const Play = () => {
  return (
    <svg
      width="19"
      height="28"
      viewBox="0 0 19 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4374 14.25L3.4375 21.0775V7.42248L12.4374 14.25Z"
        stroke="var(--irbisio-drk-blue)"
        strokeWidth="6.875"
        opacity="0.5"
      />
    </svg>
  )
}

export const Pause = () => {
  return (
    <svg
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 0.5V28M22.125 0.5V28"
        stroke="var(--irbisio-drk-blue)"
        strokeWidth="6.875"
        opacity="0.5"
      />
    </svg>
  )
}

export const Fullscreen = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      className="fullscreen-button"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 10.5V5.5H10.5V0.5H5.5H0.5V5.5V10.5H5.5ZM5.5 18H0.5V23V28H5.5H10.5V23H5.5V18ZM18 23V28H23H28V23V18H23V23H18ZM23 10.5H28V5.5V0.5H23H18V5.5H23V10.5Z"
        fill="var(--irbisio-drk-blue)"
        opacity="0.5"
      />
    </svg>
  )
}

export const Close = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ mixBlendMode: 'luminosity' }}
    >
      <path
        d="M30.5 3L3 30.5M3 3L30.5 30.5"
        stroke="var(--irbisio-off-white)"
        strokeWidth="6.875"
      />
    </svg>
  )
}
