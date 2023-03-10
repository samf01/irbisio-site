import { useState, useEffect } from 'react'

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  //JS Media Query function - call from component and pass in the breakpoint. Use like a ternary operator.
  //For example: let isPageWide = useMediaQuery("(min-width: 1024px)") then use it in a ternary or as a truthy value
  //The query has to match an media-query in CSS value.

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    window.addEventListener('DOMContentLoaded', listener)
    return () => window.removeEventListener('DOMContentLoaded', listener)
  }, [matches, query])

  return matches
}
