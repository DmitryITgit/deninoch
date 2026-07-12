import { Link } from "react-router-dom"

import "./ApartmentCard.css"

function ApartmentCard({ apartment }) {

  return (

    <Link

      to={`/apartments/${apartment.id}`}

      className="apartment-card"

    >

      <img

        src={apartment.photos[0]}

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

          {apartment.price} ₽ / сутки

        </strong>

      </div>

    </Link>

  )

}

export default ApartmentCard