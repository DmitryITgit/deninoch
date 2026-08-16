import { useEffect } from "react"
import Hero from "../components/home/Hero"
import Advantages from "../components/home/Advantages"
import Gallery from "../components/home/Gallery"
import CheckIn from "../components/home/CheckIn"
import Services from "../components/home/Services"

function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <div className="reveal">
        <Advantages />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <CheckIn />
      </div>
      <div className="reveal">
        <Services />
      </div>
    </>
  )
}

export default Home
