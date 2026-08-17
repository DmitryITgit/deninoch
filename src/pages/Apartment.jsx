import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MapPin, BedDouble, Bath, Wifi, CookingPot } from "lucide-react"
import "./Apartment.css"
import { getApartmentById } from "../api/apartments"
import Gallery from "../components/apartment/Gallery"
import Booking from "../components/apartment/Booking"
import Instructions from "../components/apartment/Instructions"
import Lightbox from "../components/Lightbox"

function Apartment() {
  const { id } = useParams()
  const [apartment, setApartment] = useState(null)
  const [loading, setLoading] = useState(true)
  const [light, setLight] = useState(null)

  useEffect(() => {
    async function loadApartment() {
      setLoading(true)
      const found = await getApartmentById(id)
      setApartment(found)
      setLoading(false)
      setLight(null)
    }
    loadApartment()
  }, [id])

  if (loading) {
    return <p className="page-status">Загрузка...</p>
  }

  if (!apartment) {
    return <p className="page-status">Квартира не найдена</p>
  }

  const photos = apartment.photos?.map((photo) => photo.url) || []
  const count = photos.length

  return (
    <main className="object-page">
      {photos[0] && (
        <section className="object-hero">
          <button type="button" onClick={() => setLight(0)}>
            <img
              src={photos[0]}
              alt={apartment.title}
              fetchPriority="high"
              decoding="async"
            />
          </button>
        </section>
      )}

      <header className="wrap object-head">
        <p className="kicker">
          <MapPin size={14} /> {apartment.address}
        </p>
        <div className="object-title-row">
          <h1>{apartment.title}</h1>
          <p>
            {apartment.price} ₽
            <span> / сутки</span>
          </p>
        </div>
      </header>

      <Gallery photos={photos} onOpen={setLight} />

      <section className="wrap object-body">
        <div>
          <h2>О квартире</h2>
          <p>{apartment.description}</p>
        </div>
        <ul>
          <li><BedDouble size={18} /> Удобная кровать</li>
          <li><Bath size={18} /> Чистая ванная комната</li>
          <li><Wifi size={18} /> Wi-Fi</li>
          <li><CookingPot size={18} /> Посуда и техника</li>
        </ul>
      </section>

      <Instructions instructions={apartment.instructions} />
      <Booking price={apartment.price} />

      {light !== null && count > 0 && (
        <Lightbox
          photos={photos}
          index={light}
          onClose={() => setLight(null)}
          onPrev={() => setLight((light - 1 + count) % count)}
          onNext={() => setLight((light + 1) % count)}
        />
      )}
    </main>
  )
}

export default Apartment
