import { Link } from "react-router-dom"
import "./ApartmentCard.css"

function ApartmentCard({ apartment, index = 0 }) {
  const photos = apartment.photos || []
  const main =
    photos.find((item) => item.is_main)?.url ||
    photos[0]?.url ||
    apartment.main_photo ||
    "/no-photo.jpg"
  const extra = photos.find((item) => item.url && item.url !== main)?.url
  const number = String(index + 1).padStart(2, "0")

  return (
    <Link to={`/apartments/${apartment.id}`} className="look-card">
      <div className="look-photo">
        <img src={main} alt={apartment.title} loading="lazy" decoding="async" />
        {extra && (
          <img
            className="look-alt"
            src={extra}
            alt=""
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="look-shade">
          <span className="look-num">{number}</span>
          <span className="look-open">Смотреть</span>
        </div>
      </div>
      <div className="look-meta">
        <p>{apartment.address}</p>
        <h2>{apartment.title}</h2>
        <strong>от {apartment.price} ₽ / сутки</strong>
      </div>
    </Link>
  )
}

export default ApartmentCard
