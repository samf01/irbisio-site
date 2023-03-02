import React from 'react'
import { useInView, useSpring, animated, springValue } from 'react-spring'

export const AnimatedStatistic = ({ stat }) => {
  const { type, value, description } = stat
  const symbol = () => {
    if (type === 'percentage') return '%'
    else if (type === 'euro') return '€'
    else return '$'
  }

  const [ref, isInView] = useInView({})

  const springs = useSpring({
    delay: 600,
    //if the value is less the 15 it will be to short to contain the number, so min = 15
    width: isInView ? `${value < 15 ? 15 : value}%` : '0%',
    val: isInView ? Math.floor(value) : 0,
    type: type,
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <animated.div ref={ref} style={springs} className="statistics-arrow">
        <div className="arrow" />
        <animated.h1
          style={{ ...springs.val, marginLeft: '24px', position: 'relative' }}
        >
          {springs.val.to(val => Math.floor(val) + symbol())}
        </animated.h1>
      </animated.div>
      <h4 className="description">{description}</h4>
    </div>
  )
}
