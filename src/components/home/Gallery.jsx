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

  return (
    <section className="gallery">
      <div className="gallery-head">
        <p className="section-kicker">Интерьеры</p>
        <h2>Атмосфера наших квартир</h2>
        <p>Пространства, собранные для тихого отдыха и работы.</p>
      </div>

      <div className="gallery-mosaic">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Интерьер квартиры"
            loading="lazy"
            decoding="async"
            className={index === 0 || index === 5 ? "wide" : ""}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
