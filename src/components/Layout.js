import React from 'react'
import './Layout.css'
import Footer from './UI/footer'
import NavBar from './UI/nav'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
