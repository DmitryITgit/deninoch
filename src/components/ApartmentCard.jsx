import { Link } from "react-router-dom"

import "./ApartmentCard.css"

function ApartmentCard({ apartment }) {

  return (

    <Link

      to={`/apartments/${apartment.id}`}

      className="apartment-card"

    >

      <img

  src={
    apartment.photos?.find(
      photo => photo.is_main
    )?.url
    ||
    apartment.photos?.[0]?.url
    ||
    "/no-photo.jpg"
  }

  alt={apartment.title}

/>

      <div className="card-info">

        <h2>

          {apartment.title}

        </h2>

        <p>

          {apartment.address}

        </p>

        <strong>

          от {apartment.price} ₽ / сутки

        </strong>

      </div>

    </Link>

  )

}

export default ApartmentCard