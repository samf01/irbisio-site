import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import './form.css'
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Form = () => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
    thanks: false,
  })
  const reCaptcha = useRef()

  const [thanks, setThanks] = useState(false)

  const [errors, setErrors] = useState({
    errorName: '',
    errorEmail: '',
    errorMessage: '',
    errorCaptcha: '',
  })

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value })

    setErrors({
      errorName: '',
      errorEmail: '',
      errorMessage: '',
      errorCaptcha: '',
    })
  }

  function handleValidation() {
    let formIsValid = true
    let name = details.name
    let email = details.email
    let message = details.message
    let lastAtPos = details.email.lastIndexOf('@')
    let lastDotPos = details.email.lastIndexOf('.')
    const recaptchValue = reCaptcha.current.getValue()

    if (!recaptchValue) {
      formIsValid = false
      setErrors({
        errorCaptcha: 'You have not passed ReCaptcha security checks',
      })
    }

    if (!name) {
      formIsValid = false
      setErrors({ errorName: 'This cannot be empty' })
    }

    if (!message) {
      formIsValid = false
      setErrors({ errorName: 'Please let us know what you are interested in?' })
    }

    if (!email) {
      formIsValid = false
      setErrors({ errorEmail: 'This cannot be empty' })
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        details.email.indexOf('@@') === -1 &&
        lastDotPos > 2 &&
        details.email.length - lastDotPos > 2
      )
    ) {
      formIsValid = false
      setErrors({ errorEmail: 'Email is not valid' })
    }

    return formIsValid
  }

  const handleSubmit = e => {
    e.preventDefault()
    reCaptcha.current.execute()

    if (handleValidation()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...details }),
      })
        .then(() => setThanks(!thanks))
        .catch(error => alert(error))
    }
  }

  return (
    <>
      {thanks ? (
        <div className="thanks">
          <h1>Thank you, someone will be in touch.</h1>
        </div>
      ) : (
        <>
          <h1>We’re here to answer all your questions.</h1>
          <form data-netlify="true" name="contact" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <ReCAPTCHA
              sitekey={process.env.SITE_RECAPTCHA_KEY}
              size="invisible"
              ref={reCaptcha}
              onChange={handleValidation}
              badge="bottomright"
            />

            <div className="input-box" style={{ gridArea: 'name' }}>
              <input
                type="text"
                name="name"
                placeholder="Name:"
                onChange={handleChange}
              />
              <label>{errors.errorName}</label>
            </div>
            <div className="input-box" style={{ gridArea: 'email' }}>
              <input
                type="text"
                name="email"
                placeholder="Email:"
                onChange={handleChange}
              />
              <label>{errors.errorEmail}</label>
            </div>
            <div className="input-box" style={{ gridArea: 'message' }}>
              <textarea
                type="text"
                name="message"
                placeholder="Message:"
                rows="5"
                onChange={handleChange}
              />
              <label>{errors.errorMessage}</label>
            </div>

            <button role="button" aria-label="Submit" className="submit">
              <h4>Submit</h4>
            </button>
          </form>
          <label>{errors.errorCaptcha}</label>
        </>
      )}
    </>
  )
}

export default Form
