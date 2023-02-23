import React, { useEffect, useRef } from 'react'
import './Layout.css'
import Pagination from './UI/pagination/paginator'

import Footer from './UI/footer'
import NavBar from './UI/navigation/nav'

const Layout = ({ children }) => {
  const layoutRef = useRef(null)

  // useEffect(() => {
  //   const length = layoutRef.current.childNodes.length
  //   console.log(length)
  // }, [])

  return (
    <>
      <NavBar layoutRef={layoutRef} />

      <Pagination layoutRef={layoutRef} />

      <div className="layout" ref={layoutRef}>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
