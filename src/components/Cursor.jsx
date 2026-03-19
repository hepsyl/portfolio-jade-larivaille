import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top  = my + 'px'
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    loop()

    const orangeEls = document.querySelectorAll(
      '[data-cursor="orange"]'
    )
    orangeEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('orange')
        ring.classList.add('orange')
      })
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('orange')
        ring.classList.remove('orange')
      })
    })

    const whiteEls = document.querySelectorAll(
      '[data-cursor="white"]'
    )
    whiteEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('white')
        ring.classList.add('white')
      })
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('white')
        ring.classList.remove('white')
      })
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 rounded-full bg-bright-green pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors duration-100 [&.orange]:bg-bright-orange [&.white]:bg-white"
        id="cursor"
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border border-bright-green pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-colors duration-200 [&.orange]:border-bright-orange [&.white]:border-almost-white"
        id="cursor-ring"
      />
    </>
  )
}
