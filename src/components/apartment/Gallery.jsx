import "./Gallery.css"

function Gallery({ photos = [], onOpen }) {
  const preview = photos.slice(0, 8)

  if (!photos.length) return null

  return (
    <section className="object-gallery wrap">
      {preview.map((photo, i) => (
        <button type="button" key={`${photo}-${i}`} onClick={() => onOpen(i)}>
          <img
            src={photo}
            alt={`Фото ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </button>
      ))}
      {photos.length > 8 && (
        <button type="button" className="more" onClick={() => onOpen(8)}>
          Все {photos.length} фото
        </button>
      )}
    </section>
  )
}

export default Gallery
