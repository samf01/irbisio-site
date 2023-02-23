import React from 'react'
import { Link } from 'gatsby'
import GridContent from './grid-content'
import MockForm from '../graphics/contact-form-mockup'

const Footer = () => {
  const year = new Date()
  return (
    <div>
      <GridContent id="footer" layout="--center-4" mode="light-mode">
        <h4>Contact</h4>
        <h1>We’re here to answer all your questions.</h1>
        <MockForm />
      </GridContent>
      <footer id="footer">
        <Link to="/">
          <small>
            Irbisio Ltd is regulated by the Financial Conduct Authority. All
            rights reserved. © Irbisio Ltd {year.getFullYear()} Irbisio
            Investments Ltd
          </small>
        </Link>
        <Link to="/cookie-policy">Cookie Policy</Link>
        <a href="/#about">About</a>
        <a href="/#projects">News</a>
        <a href="/#projects">Strategy</a>
        <a href="/#contact">Contact Us</a>
      </footer>
    </div>
  )
}

export default Footer
