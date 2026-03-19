import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to elements with class "reveal"
 * inside the given container ref, adding "visible" when they enter viewport.
 */
export function useReveal(containerRef) {
  useEffect(() => {
    const container = containerRef?.current ?? document

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const els = container.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [containerRef])
}
