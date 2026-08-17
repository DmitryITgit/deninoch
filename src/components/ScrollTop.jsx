import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"
import { useLenis } from "lenis/react"
import "./ScrollTop.css"

function ScrollTop() {
  const [visible, setVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 280)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function scrollToTop() {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.35, lerp: 0.08 })
      return
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      className={`scroll-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Наверх"
      tabIndex={visible ? 0 : -1}
    >
      <ChevronUp size={20} strokeWidth={1.6} />
    </button>
  )
}

export default ScrollTop
