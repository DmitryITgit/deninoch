import { Link } from "react-router-dom"
import "./ApartmentCard.css"

function ApartmentCard({ apartment, featured = false }) {
  const photo =
    apartment.photos?.find((item) => item.is_main)?.url ||
    apartment.photos?.[0]?.url ||
    apartment.main_photo ||
    "/no-photo.jpg"

  return (
    <Link
      to={`/apartments/${apartment.id}`}
      className={`look-card ${featured ? "is-featured" : ""}`}
    >
      <div className="look-photo">
        <img src={photo} alt={apartment.title} loading="lazy" decoding="async" />
        <span>Смотреть квартиру →</span>
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
