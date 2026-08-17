import "./Gallery.css"

function Gallery({ photos = [], onOpen }) {
  const rest = photos.slice(1, 5)

  if (!photos.length) return null

  return (
    <section className="object-gallery wrap">
      {rest.map((photo, i) => (
        <button
          type="button"
          key={photo}
          className={i === 0 ? "wide" : ""}
          onClick={() => onOpen(i + 1)}
        >
          <img src={photo} alt={`Фото ${i + 2}`} loading="lazy" decoding="async" />
        </button>
      ))}
      {photos.length > 5 && (
        <button type="button" className="more" onClick={() => onOpen(5)}>
          Все {photos.length} фото
        </button>
      )}
    </section>
  )
}

export default Gallery
