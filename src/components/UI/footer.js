import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  const year = new Date()
  return (
    <footer id="footer">
      <Link to="/">© {year.getFullYear()} Irbisio Investments Ltd</Link>
      <Link to="/cookie-policy">Cookie Policy</Link>
      <a href="/#about">About</a>
      <a href="/#projects">News</a>
      <a href="/#projects">Strategy</a>
      <a href="/#contact">Contact Us</a>
    </footer>
  )
}

export default Footer
