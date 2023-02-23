import React, { useRef, useEffect, useState } from 'react'
import { closestItem } from '../../Hooks/closestTo'
import './paginator.css'

const Pagination = ({ layoutRef }) => {
  const [sections, setSections] = useState([])
  const pageSpot = useRef()

  // //On scroll see which section is in view
  useEffect(() => {
    const nodes = Array.from(layoutRef.current.childNodes)
    const tempArr = new Array()
    //Create an array of objects linking the childNodes to the pageSpots
    nodes.map(node => {
      tempArr.push({ rect: node.getBoundingClientRect(), id: node.id })
    })

    setSections(tempArr)

    function middleOfList() {
      // Create an array of the tops of each element
      const tops = []
      for (const item of nodes) {
        tops.push(
          //this should be the center??
          item.getBoundingClientRect().top +
            item.getBoundingClientRect().height / 2
        )
      }
      //Check which element is closest to the middle of the screen (only one!) and return its index
      const middleItemIndex = closestItem(window.innerHeight / 2, tops)

      //Check if the index is the same as the middle item
      nodes.forEach((node, i) => {
        //Add expand to the middle item
        //changed to in viewport, to restore (i === middleItemIndex)

        //slice the array of spots
        if (i === middleItemIndex) {
          pageSpot.current.childNodes[i].classList.add('grow')
        } else
          pageSpot.current.childNodes.forEach((child, idx) => {
            if (idx === i) child.classList.remove('grow')
          })
      })
    }
    if (layoutRef.current)
      layoutRef.current.addEventListener('scroll', () => {
        //if any of the sections are in the current screen space add a class to them...
        window.clearTimeout(isScrolling)
        const isScrolling = setTimeout(() => {
          middleOfList()
        }, 66)
      })

    return () => {
      if (layoutRef.current)
        layoutRef.current.removeEventListener('scroll', () => {
          middleOfList()
        })
    }
  }, [])

  const PageDots = sections.map((element, i) => {
    return (
      <a href={`/#${element.id}`} key={i}>
        <svg
          className="dot"
          width="4"
          height="4"
          viewBox="0 0 4 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="var(--irbisio-off-white)" />
        </svg>
      </a>
    )
  })

  return (
    <div className="paginator">
      <div className="spot-column" ref={pageSpot}>
        {PageDots}
      </div>
    </div>
  )
}

export default Pagination
