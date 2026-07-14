import { useParams } from "react-router-dom"

import { 
  MapPin,
  BedDouble,
  Bath,
  Wifi,
  CookingPot
} from "lucide-react"

import "./Apartment.css"

import apartments from "../data/apartments"

import Gallery from "../components/apartment/Gallery"
import Booking from "../components/apartment/Booking"
import Instructions from "../components/apartment/Instructions"

function Apartment() {

  const { id } = useParams()

  const apartment = apartments.find(

    item => item.id === Number(id)

  )

  if (!apartment) {

    return (

      <h1>
        Квартира не найдена
      </h1>

    )

  }

  return (

    <main className="apartment-page">

      <section className="apartment-header">

        <h1>
          {apartment.title}
        </h1>

        <p className="apartment-address">

          <MapPin size={20}/>

          {apartment.address}

        </p>

      </section>

      <Gallery photos={apartment.photos} />

      <Instructions

        instructions={apartment.instructions}

      />

      <section className="description">

        <div className="description-text">

          <h2>
            О квартире
          </h2>

          <p>
            {apartment.description}
          </p>

        </div>

        <div className="features">

          <div className="feature">

            <BedDouble size={26}/>

            <span>
              Удобная кровать
            </span>

          </div>

          <div className="feature">

            <Bath size={26}/>

            <span>
              Чистая ванная комната
            </span>

          </div>

          <div className="feature">

            <Wifi size={26}/>

            <span>
              Wi-Fi
            </span>

          </div>

          <div className="feature">

            <CookingPot size={26}/>

            <span>
              Посуда и техника
            </span>

          </div>

        </div>

      </section>

      <Booking

        price={apartment.price}

      />

    </main>

  )

}

export default Apartment