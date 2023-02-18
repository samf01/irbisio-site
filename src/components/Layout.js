import React, { useRef, useEffect } from 'react'
import './Layout.css'
import Footer from './UI/footer'
import NavBar from './UI/nav'

const Layout = ({ children }) => {
  const ref = useRef(null)

  return (
    <>
      <NavBar layoutRef={ref} />
      <div className="layout" ref={ref}>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
