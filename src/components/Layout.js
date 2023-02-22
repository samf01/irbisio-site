import React, { useRef } from 'react'
import './Layout.css'
import Pagination from './UI/paginator'

import Footer from './UI/footer'
import NavBar from './UI/nav'

const Layout = ({ children }) => {
  const layoutRef = useRef(null)

  return (
    <>
      <NavBar layoutRef={layoutRef} />
      <div className="paginator">
        <Pagination layoutRef={layoutRef} />
      </div>
      <div className="layout" ref={layoutRef}>
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
