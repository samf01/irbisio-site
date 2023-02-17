import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import * as NavStyles from './nav.module.css'
import { Hamburger } from '../graphics/Hamburgers'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import _ from 'lodash'

import useMediaQuery from '../Hooks/MatchMedia'
import Logo from '../graphics/logo'

const MenuItems = () => {
  return (
    <div className="nav-list">
      <a className="nav-item" href="/#about">
        ABOUT
      </a>
      <a className="nav-item" href="/#projects">
        News
      </a>
      <a className="nav-item" href="/#contact">
        case studies
      </a>
      <a className="nav-item" href="/#contact">
        strategy
      </a>
      <a className="nav-item" href="/#contact">
        team
      </a>
      <a className="nav-item" href="/#contact">
        partners
      </a>
      <a className="nav-item" href="/#contact">
        wild cat rescue
      </a>
      <a className="nav-item" href="/#contact">
        contact
      </a>
    </div>
  )
}

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  let mobile = useMediaQuery('(min-width: 991px)')
  const [scrollPosY, prevScrollPosY] = useState(0)

  useEffect(() => {
    const scrollFunction = _.debounce(() => {
      setNavbarOpen(false)
      let currentScrollPosY = window.scrollY
      if (scrollPosY > currentScrollPosY) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-60px'
      }
      prevScrollPosY(currentScrollPosY)
    }, 12)

    window.addEventListener('scroll', () => {
      scrollFunction()
    })

    return () => {
      window.removeEventListener('scroll', scrollFunction)
    }
  }, [scrollPosY])

  const appear = useTransition(navbarOpen, {
    from: { right: '-100%' },
    enter: { right: '0%' },
    leave: { right: '-100%' },
  })

  return (
    <nav id="navbar">
      <div className="nav-bar">
        <div>
          <Link to="/#">
            <Logo />
          </Link>
        </div>
        {mobile ? (
          <MenuItems />
        ) : (
          <button
            aria-label="button"
            className="toggle"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Hamburger open={navbarOpen} id={NavStyles.navicon2} />
          </button>
        )}
      </div>
      {appear(
        (appear, item) =>
          item && (
            <animated.div
              className="mobile-menu"
              aria-label={'menu'}
              onClick={() => setNavbarOpen(!navbarOpen)}
              style={appear}
            >
              <MenuItems />
            </animated.div>
          )
      )}
    </nav>
  )
}

NavBar.propTypes = {
  navbarOpen: PropTypes.bool,
}

export default NavBar
