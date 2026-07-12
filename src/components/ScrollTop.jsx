import { useEffect, useState } from "react"
import "./ScrollTop.css"

function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 250) {
        setVisible(true)
      } else {
        setVisible(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  if (!visible) {
    return null
  }

  return (
    <button 
      className="scroll-top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  )
}

export default ScrollTop