import React from 'react'
import { Link } from 'gatsby'

const FoundationButton = () => {
  return (
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <svg
        viewBox="0 0 182 174"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: 'inherit' }}
      >
        <path
          d="M38.8091 0.132812L56.9625 19.3623L38.8091 38.5918H0.5V0.132812H38.8091Z"
          fill="#03222B"
        />
        <path
          d="M143.191 38.459L125.038 19.2295L143.191 0H181.5V38.3254H143.191V38.459Z"
          fill="#03222B"
        />
        <path
          d="M125.037 104.293L90.9995 129.933L56.9619 104.293V19.2295H125.037V104.293Z"
          fill="#03222B"
        />
        <path
          d="M48.2855 145.156L90.9994 129.799L135.716 145.156V174H48.2855V145.156Z"
          fill="#03222B"
        />
      </svg>

      <Link
        to="/snow-leopard"
        style={{
          width: 'fit-content',
          padding: '8px 24px',
          backgroundColor: 'var(--irbisio-drk-blue',
          color: 'var(--irbisio-off-white',
        }}
      >
        Track the Leopard
      </Link>
    </div>
  )
}

export default FoundationButton
