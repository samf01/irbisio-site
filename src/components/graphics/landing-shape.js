import React from 'react'

//Shapes spilt in two so they can fit around the logo and stay in the grid-component
export const TopShape = () => {
  return (
    <div
      style={{
        gridColumn: '6 / 8',
        transform: 'scaleX(1)',
        mixBlendMode: 'color',
      }}
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 50"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon id="left-hand-shape" points="" fill="var(--irbisio-blue)">
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="12s"
            fill="freeze"
            values="0 -10, 50 -10, 50 -10, 0 -20; 0 0, 50 -10, 50 110, 0 100; 0 120, 50 110, 50 110, 0 100"
            keyTimes="0; 0.5; 1"
          />
        </polygon>

        <polygon id="right-hand-shape" points="" fill="var(--irbisio-blue)">
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="12s"
            fill="freeze"
            values="50 -10, 100 0, 100 100, 50 110; 50 110, 100 120, 100 110, 50 120; 50 -10, 100 -20, 100 -20, 50 -10; 50 0, 100 -10, 100 100, 50 110"
            keyTimes="0; 0.5; 0.5; 1"
          />
        </polygon>
      </svg>
    </div>
  )
}

export const BottomShape = () => {
  return (
    <div
      style={{
        gridColumn: '6 / 8',
        gridRowStart: '3',
        transform: 'scaleX(1)',
        mixBlendMode: 'color',
      }}
    >
      <svg
        height="100%"
        width="100%"
        viewBox="0 50 100 50"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon id="left-hand-shape" points="" fill="var(--irbisio-blue)">
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="12s"
            fill="freeze"
            values="0 -10, 50 -10, 50 -10, 0 -20; 0 0, 50 -10, 50 110, 0 100; 0 120, 50 110, 50 110, 0 100"
            keyTimes="0; 0.5; 1"
          />
        </polygon>

        <polygon id="right-hand-shape" points="" fill="var(--irbisio-blue)">
          <animate
            attributeName="points"
            repeatCount="indefinite"
            dur="12s"
            fill="freeze"
            values="50 -10, 100 0, 100 100, 50 110; 50 110, 100 120, 100 110, 50 120; 50 -10, 100 -20, 100 -20, 50 -10; 50 0, 100 -10, 100 100, 50 110"
            keyTimes="0; 0.5; 0.5; 1"
          />
        </polygon>
      </svg>
    </div>
  )
}
