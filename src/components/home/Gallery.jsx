import "./Gallery.css"

function Gallery() {
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

  const reverse = [...images].reverse()

  function row(list, extraClass) {
    return (
      <div className={`gallery-track ${extraClass}`}>
        {[0, 1].map((copy) =>
          list.map((image, index) => (
            <img
              key={`${extraClass}-${copy}-${index}`}
              src={image}
              alt="Интерьер квартиры"
              loading="lazy"
              decoding="async"
              className={copy === 1 ? "gallery-clone" : undefined}
            />
          ))
        )}
      </div>
    )
  }

  return (
    <section className="gallery">
      <div className="gallery-head">
        <p className="section-kicker">Интерьеры</p>
        <h2>Атмосфера наших квартир</h2>
        <p>Пространства, собранные для тихого отдыха и работы.</p>
      </div>

      <div className="gallery-marquee">
        {row(images, "track-a")}
        {row(reverse, "track-b")}
      </div>
    </section>
  )
}

export default Gallery
