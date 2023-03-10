import React from 'react'
import { useInView, useSpring, animated } from 'react-spring'

export const AnimatedStatistic = ({ stat }) => {
  const { suffix, prefix, value, description } = stat

  const [ref, isInView] = useInView({})

  const springs = useSpring({
    delay: 600,
    //if the value is less the 15 it will be to short to contain the number, so min = 15
    width: isInView ? `${value < 15 ? 15 : value}%` : '0%',
    val: isInView ? Math.floor(value) : 0,
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <animated.div ref={ref} style={springs} className="statistics-arrow">
        <div className="arrow" />
        <animated.h1
          style={{ ...springs.val, marginLeft: '24px', position: 'relative' }}
        >
          {springs.val.to(
            val => (prefix && prefix) + Math.floor(val) + (suffix && suffix)
          )}
        </animated.h1>
      </animated.div>
      <h4 className="description">{description}</h4>
    </div>
  )
}

export const AnimatedTextBlock = ({ children, direction }) => {
  const [ref, isInView] = useInView({})
  //Negative direction = animate down. E.g. -120px
  const springs = useSpring({
    delay: Math.random() * 600,

    y: isInView ? '0px' : direction,
  })

  return (
    <div style={{ overflow: 'hidden', position: 'relative' }} ref={ref}>
      <animated.div
        style={{ ...springs, position: 'relative', marginLeft: '24px' }}
      >
        {children}
      </animated.div>
    </div>
  )
}
