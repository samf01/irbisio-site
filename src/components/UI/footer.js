import React from 'react'
import { Link } from 'gatsby'
import GridContent from './grid-content'
import Form from './contact/form'

const Footer = ({ background }) => {
  const year = new Date()
  return (
    <div id="footer">
      <GridContent
        layout="--center-4"
        mode="light-mode"
        background={background}
      >
        <h4>Contact</h4>
        <Form />
      </GridContent>
      <footer id="footer">
        <Link to="/" style={{ textTransform: 'unset', fontWeight: 'normal' }}>
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
    </div>
  )
}

export default Footer
