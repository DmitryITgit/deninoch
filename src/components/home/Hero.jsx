import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import "./Hero.css"

function Hero() {
  const imageRef = useRef(null)

  useEffect(() => {
    const image = imageRef.current
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined
    }

    function onScroll() {
      const offset = Math.min(window.scrollY * 0.18, 140)
      image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.06)`
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="hero">
      <picture>
        <source media="(max-width: 700px)" srcSet="/hero-mobile.jpg" />
        <img
          ref={imageRef}
          className="hero-image"
          src="/hero.jpg"
          alt="Интерьер элитной квартиры"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero-veil" />

      <div className="hero-copy">
        <p className="kicker hero-delay-1">Premium apartments · Ульяновск</p>
        <h1 className="hero-delay-2">
          Квартиры,
          <br />
          <em>в которых хочется</em>
          <br />
          остаться
        </h1>
        <p className="hero-lead hero-delay-3">
          Тихие интерьеры, свежее бельё и заселение по коду —
          без ожидания ключей.
        </p>
        <div className="hero-cta hero-delay-4">
          <Link to="/apartments" className="btn btn-light btn-fill">
            Выбрать квартиру
          </Link>
          <a href="tel:+79539836853" className="btn btn-light">
            Позвонить
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
