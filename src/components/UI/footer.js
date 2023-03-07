import React from 'react'
import { Link } from 'gatsby'
import GridContent from './grid-content'
import Form from './contact/form'
import MockForm from '../graphics/contact-form-mockup'
import { useAdmin } from '../Hooks/useAdmin'

const Footer = ({ footer }) => {
  const admin = useAdmin()
  const year = new Date()
  return (
    <div id="contact">
      <GridContent
        layout="--center-4"
        mode={footer.mode}
        background={footer.image}
      >
        <h4>Contact</h4>
        {admin ? <MockForm /> : <Form />}
      </GridContent>
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
        <footer id="footer">
          <Link to="/" className="copywrite">
            Irbisio Ltd is regulated by the Financial Conduct Authority. All
            rights reserved. © Irbisio Ltd {year.getFullYear()} Irbisio
            Investments Ltd
          </Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/#about">About</Link>
          <Link to="/#projects">News</Link>
          <Link to="/#projects">Strategy</Link>
          <Link to="/#contact">Contact Us</Link>
        </footer>
      )}
    </div>
  )
}

export default Footer
