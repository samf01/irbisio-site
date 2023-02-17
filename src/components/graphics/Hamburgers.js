import React, { useEffect, useRef } from 'react'
import * as NavStyles from '../UI/nav.module.css'

export const Hamburger = ({ open, id }) => {
  const icon = useRef(null)
  useEffect(() => {
    if (open) icon.current.classList.add(NavStyles.open)
    else icon.current.classList.remove(NavStyles.open)
    return
  }, [open])

  return (
    <div ref={icon} id={id}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
