import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'gatsby'
import * as NavStyles from './nav.module.css'
import { Hamburger } from './hamburgers'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import _ from 'lodash'

import useMediaQuery from '../../Hooks/MatchMedia'
import Logo from '../../graphics/logo'

const NavBar = ({ layoutRef }) => {
  const [isStart, setIsStart] = useState(true)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const mobile = useMediaQuery('(max-width: 990px)')
  const [scrollPosY, prevScrollPosY] = useState(0)

  const scrollFunction = useCallback(
    _.debounce(() => {
      const checkType = _.once(() => {
        if (scrollPosY > 10 && !mobile) setIsStart(!isStart)
      })
      setNavbarOpen(false)
      //It is no longer window. that is scrolling > need to ref() the layout div...
      //let currentScrollPosY = window.scrollY
      let currentScrollPosY = layoutRef.current.scrollTop

      if (scrollPosY > currentScrollPosY) {
        document.getElementById('navbar').style.top = '0'
        checkType()
      } else {
        document.getElementById('navbar').style.top = '-60px'
      }
      prevScrollPosY(currentScrollPosY)
    }, 12),
    [prevScrollPosY]
  )

  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     scrollFunction()
  //   })

  //   return () => {
  //     document.removeEventListener('scroll', () => {
  //       scrollFunction()
  //     })
  //   }
  // }, [scrollPosY])

  const appear = useTransition(navbarOpen, {
    from: { right: '-100%' },
    enter: { right: '0%' },
    leave: { right: '-100%' },
  })

  const NavList = () => {
    return (
      <div className="nav-list">
        <a className="nav-item pos-start" href="/about">
          ABOUT
        </a>
        <a className="nav-item pos-start" href="/#news">
          News
        </a>
        <a className="nav-item pos-start" href="/case-studies">
          case studies
        </a>
        <a className="nav-item pos-start" href="/strategy">
          strategy
        </a>
        <a className="nav-item pos-start" href="/about/#team">
          team
        </a>
        <a className="nav-item pos-start" href="/about/#partners">
          partners
        </a>
        <a className="nav-item pos-start" href="/#snow-leopard">
          wild cat rescue
        </a>
        <a className="nav-item pos-start" href="#contact">
          contact
        </a>
      </div>
    )
  }

  return (
    <nav id="navbar">
      <div className="nav-bar">
        <Link to="/" style={{ height: '16px' }}>
          <Logo />
        </Link>

        {isStart && !mobile ? (
          <NavList />
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
              <NavList />
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
