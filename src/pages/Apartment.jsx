import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  MapPin,
  BedDouble,
  Bath,
  Wifi,
  CookingPot
} from "lucide-react"

import "./Apartment.css"

import { getApartmentById } from "../api/apartments"

import Gallery from "../components/apartment/Gallery"
import Booking from "../components/apartment/Booking"
import Instructions from "../components/apartment/Instructions"

function Apartment() {

  const { id } = useParams()

  const [apartment, setApartment] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadApartment() {
      setLoading(true)
      const foundApartment = await getApartmentById(id)
      setApartment(foundApartment)
      setLoading(false)
    }

    loadApartment()
  }, [id])

  if (loading) {
    return (
      <h1>
        Загрузка...
      </h1>
    )
  }

  if (!apartment) {
    return (
      <h1>
        Квартира не найдена
      </h1>
    )
  }

  const photos = apartment.photos?.map(

    photo => photo.url

  ) || []

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

      <Gallery

        photos={photos}

      />

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