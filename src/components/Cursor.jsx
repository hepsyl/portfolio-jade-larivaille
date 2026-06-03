import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
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
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-bright-green pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full border border-bright-green/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-200"
      />
    </>
  )
}
