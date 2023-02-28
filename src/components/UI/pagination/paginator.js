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

    function homeStyles() {
      const line = pageSpot.current.childNodes[nodes.length]
      line.classList.add('--hide')
      line.childNodes[0].classList.add('--hide')
    }

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
          homeStyles()
          middleOfList()
        }, 66)
      })

    return () => {
      if (layoutRef.current)
        layoutRef.current.removeEventListener('scroll', () => {
          homeStyles()
          middleOfList()
        })
    }
  }, [])

  const PageDots = sections.map((element, i) => {
    return (
      <a href={`#${element.id}`} key={i}>
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
        <div className="paginator-home-line">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-line-icon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-5.24537e-07 12.8C-8.1423e-07 19.4275 5.37258 24.8 12 24.8C18.6274 24.8 24 19.4275 24 12.8C24 6.17263 18.6274 0.800049 12 0.800048C5.37258 0.800048 -2.34843e-07 6.17263 -5.24537e-07 12.8ZM7.15023 10L12 18.4L16.8497 10L7.15023 10Z"
              fill="var(--irbisio-off-white)"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Pagination
