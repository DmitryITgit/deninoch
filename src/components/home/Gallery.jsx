import { useEffect, useRef, useState } from "react"
import Lightbox from "../Lightbox"
import "./Gallery.css"

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg"
]

const pairs = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7]
]

function SwapPair({ left, right, onOpen, delay = 0 }) {
  const ref = useRef(null)
  const [lucky] = useState(() => Math.random() < 0.28)
  const settled = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-in")
          observer.disconnect()
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  function finishLuckySwap() {
    if (!lucky || settled.current) return
    settled.current = true
    ref.current?.classList.add("is-settled")
  }

  return (
    <div
      className={`atmosphere-swap${lucky ? " is-lucky" : ""}`}
      ref={ref}
      style={{ "--swap-delay": `${delay}ms` }}
    >
      <button type="button" className="atmosphere-tile" onClick={() => onOpen(left)}>
        <img src={images[left]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
      </button>
      <button
        type="button"
        className="atmosphere-tile"
        onClick={() => onOpen(right)}
        onAnimationEnd={finishLuckySwap}
      >
        <img src={images[right]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
      </button>
    </div>
  )
}

function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <section className="atmosphere">
      <div className="wrap atmosphere-head reveal">
        <p className="kicker">Интерьеры</p>
        <h2>Атмосфера наших квартир</h2>
      </div>

      <div className="wrap atmosphere-lead reveal reveal-from-right">
        <p>Пространства, собранные для отдыха и работы. Без случайных деталей.</p>
      </div>

      <div className="atmosphere-stage wrap">
        {pairs.slice(0, 2).map(([left, right], i) => (
          <SwapPair
            key={`${left}-${right}`}
            left={left}
            right={right}
            onOpen={setIndex}
            delay={i * 80}
          />
        ))}
      </div>

      <p className="atmosphere-note wrap reveal reveal-from-right">
        Каждая квартира готовится заново. Вы входите в чистое, готовое место.
      </p>

      <div className="atmosphere-stage wrap">
        {pairs.slice(2).map(([left, right], i) => (
          <SwapPair
            key={`${left}-${right}`}
            left={left}
            right={right}
            onOpen={setIndex}
            delay={i * 80}
          />
        ))}
      </div>

      {index !== null && (
        <Lightbox
          photos={images}
          index={index}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((index - 1 + images.length) % images.length)}
          onNext={() => setIndex((index + 1) % images.length)}
        />
      )}
    </section>
  )
}

export default Gallery
