import { useEffect, useRef, useState } from "react"
import "./SmoothCursor.css"

function isFinePointer() {
  return window.matchMedia("(pointer: fine)").matches
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function SmoothCursor() {
  const houseRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return undefined
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const house = houseRef.current
    if (!house) return undefined

    document.documentElement.classList.add("has-smooth-cursor")

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { x: mouse.x, y: mouse.y }
    let hovering = false
    let visible = false
    let frame = 0

    function move(event) {
      mouse.x = event.clientX
      mouse.y = event.clientY
      if (!visible) {
        visible = true
        house.classList.add("is-on")
      }
    }

    function over(event) {
      hovering = Boolean(
        event.target.closest("a, button, label, input, textarea, select, [role='button']")
      )
    }

    function leave() {
      visible = false
      house.classList.remove("is-on")
    }

    function tick() {
      pos.x += (mouse.x - pos.x) * 0.22
      pos.y += (mouse.y - pos.y) * 0.22
      house.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -42%) scale(${hovering ? 1.18 : 1})`
      house.classList.toggle("is-hover", hovering)
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
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="smooth-cursor" aria-hidden="true">
      <svg
        className="smooth-cursor-house"
        ref={houseRef}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M3.5 11.2 12 4.2l8.5 7" />
        <path d="M6 10.8V19.5h12V10.8" />
        <path d="M10.2 19.5v-5.2h3.6v5.2" />
      </svg>
    </div>
  )
}

export default SmoothCursor
