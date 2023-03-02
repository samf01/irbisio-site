import { useEffect } from 'react'
import { isInViewport } from './ViewFunctions'

//pass in a ref and get a return true when it enters viewport
export function useLayoutScroll(ref) {
  useEffect(() => {
    const layout = document.getElementById('layout')

    layout.addEventListener('scroll', () => {
      if (isInViewport(ref.current)) return true
    })

    return () => {
      layout.removeEventListener('scroll', () => {
        if (isInViewport(ref.current)) return true
      })
    }
  }, [])
}
