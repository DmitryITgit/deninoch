import { useEffect, useRef } from "react"
import "./SmoothCursor.css"

function isFinePointer() {
  return window.matchMedia("(pointer: fine)").matches
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function SmoothCursor() {
  const ringRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return undefined

    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return undefined

    document.documentElement.classList.add("has-smooth-cursor")

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { x: mouse.x, y: mouse.y }
    let hovering = false
    let visible = false
    let frame = 0

    function move(event) {
      mouse.x = event.clientX
      mouse.y = event.clientY
      if (!visible) {
        visible = true
        ring.classList.add("is-on")
        dot.classList.add("is-on")
      }
    }

    function over(event) {
      hovering = Boolean(
        event.target.closest("a, button, label, input, textarea, select, [role='button']")
      )
    }

    function leave() {
      visible = false
      ring.classList.remove("is-on")
      dot.classList.remove("is-on")
    }

    function tick() {
      ringPos.x += (mouse.x - ringPos.x) * 0.16
      ringPos.y += (mouse.y - ringPos.y) * 0.16

      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%) scale(${hovering ? 1.7 : 1})`
      ring.classList.toggle("is-hover", hovering)

      frame = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    document.addEventListener("mouseleave", leave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
      document.removeEventListener("mouseleave", leave)
      document.documentElement.classList.remove("has-smooth-cursor")
    }
  }, [])

  return (
    <div className="smooth-cursor" aria-hidden="true">
      <span className="smooth-cursor-ring" ref={ringRef} />
      <span className="smooth-cursor-dot" ref={dotRef} />
    </div>
  )
}

export default SmoothCursor
