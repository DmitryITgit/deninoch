import { useState } from "react"
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

function Gallery() {
  const [index, setIndex] = useState(null)

  return (
    <section className="atmosphere">
      <div className="wrap atmosphere-head reveal">
        <p className="kicker">Интерьеры</p>
        <h2>Атмосфера наших квартир</h2>
      </div>

      <figure className="atmosphere-hero reveal">
        <button type="button" onClick={() => setIndex(0)}>
          <img src={images[0]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
          <span>Смотреть</span>
        </button>
        <figcaption>Свет, тишина и порядок — до вашего приезда.</figcaption>
      </figure>

      <div className="wrap atmosphere-split reveal">
        <p>Пространства, собранные для отдыха и работы. Без случайных деталей.</p>
        <button type="button" onClick={() => setIndex(1)}>
          <img src={images[1]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
        </button>
      </div>

      <div className="atmosphere-pair wrap reveal">
        <button type="button" onClick={() => setIndex(2)}>
          <img src={images[2]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
        </button>
        <button type="button" className="shift" onClick={() => setIndex(3)}>
          <img src={images[3]} alt="Интерьер квартиры" loading="lazy" decoding="async" />
        </button>
      </div>

      <p className="atmosphere-note wrap reveal">
        Каждая квартира готовится заново. Вы входите в чистое, готовое место.
      </p>

      <div className="atmosphere-mosaic wrap reveal">
        {images.slice(4).map((src, i) => (
          <button type="button" key={src} onClick={() => setIndex(i + 4)}>
            <img src={src} alt="Интерьер квартиры" loading="lazy" decoding="async" />
          </button>
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
