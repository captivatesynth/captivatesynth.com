import { useLayoutEffect, useRef, useState } from 'react'

export default function useBounds() {
  const ref = useRef(null)
  const [bounds, boundsUpdated] = useState(null)

  useLayoutEffect(() => {
    function updateBounds() {
      if (ref !== null) {
        let rect = ref.current.getBoundingClientRect()
        boundsUpdated(rect)
      }
    }
    updateBounds()
    window.addEventListener('resize', updateBounds)
    return () => window.removeEventListener('resize', updateBounds)
  }, [])

  return [ref, bounds]
}
