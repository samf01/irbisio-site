import React from 'react'
import { Link } from 'gatsby'
import { useAdmin } from '../Hooks/useAdmin'

const Footer = ({ footer }) => {
  const admin = useAdmin()
  const year = new Date()
  return (
    <div style={{ height: '100%' }}>
      {admin ? (
        <footer id="footer">
          <a href="/" className="copywrite">
            Irbisio Ltd is regulated by the Financial Conduct Authority. All
            rights reserved. © Irbisio Ltd {year.getFullYear()} Irbisio
            Investments Ltd
          </a>
          <a href="/cookie-policy">Cookie Policy</a>
          <a href="/#about">About</a>
          <a href="/#projects">News</a>
          <a href="/#projects">Strategy</a>
          <a href="/#contact">Contact Us</a>
        </footer>
      ) : (
        <div id="footer">
          <Link to="/" className="copywrite">
            Iribisio Management Ltd. c/o M Q Services Ltd. Victoria Place, 31
            Victoria Street, Hamilton HM10. Bermuda. All rights reserved. ©{' '}
            {year.getFullYear()} Irbisio Investments Ltd
          </Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/#about">About</Link>
          <Link to="/#projects">News</Link>
          <Link to="/#projects">Strategy</Link>
          <Link to="/#contact">Contact Us</Link>
        </div>
      )}
    </div>
  )
}

export default Footer
