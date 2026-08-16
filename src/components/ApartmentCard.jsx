import { Link } from "react-router-dom"
import "./ApartmentCard.css"

function ApartmentCard({ apartment }) {
  const photo =
    apartment.photos?.find((item) => item.is_main)?.url ||
    apartment.photos?.[0]?.url ||
    apartment.main_photo ||
    "/no-photo.jpg"

  return (
    <Link to={`/apartments/${apartment.id}`} className="apartment-card">
      <div className="card-image">
        <img
          src={photo}
          alt={apartment.title}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="card-info">
        <p className="card-address">{apartment.address}</p>
        <h2>{apartment.title}</h2>
        <strong>от {apartment.price} ₽ / сутки</strong>
      </div>
    </Link>
  )
}

export default ApartmentCard
