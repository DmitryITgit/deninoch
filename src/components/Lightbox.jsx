import { useEffect, useRef } from "react"
import "./Lightbox.css"

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const startX = useRef(0)

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onNext()
      if (event.key === "ArrowLeft") onPrev()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose, onNext, onPrev])

  function onTouchStart(event) {
    startX.current = event.changedTouches[0].clientX
  }

  function onTouchEnd(event) {
    const delta = event.changedTouches[0].clientX - startX.current
    if (delta > 50) onPrev()
    if (delta < -50) onNext()
  }

  return (
    <div
      className="lightbox"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фотографий"
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Закрыть"
      >
        Закрыть
      </button>

      <button
        type="button"
        className="lightbox-nav prev"
        onClick={(event) => {
          event.stopPropagation()
          onPrev()
        }}
        aria-label="Предыдущее фото"
      >
        ←
      </button>

      <img
        src={photos[index]}
        alt={`Фото ${index + 1}`}
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        className="lightbox-nav next"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
        aria-label="Следующее фото"
      >
        →
      </button>

      <p className="lightbox-count">
        {index + 1} / {photos.length}
      </p>
    </div>
  )
}

export default Lightbox
