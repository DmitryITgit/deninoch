import { useEffect, useState } from "react"
import "./LocationMap.css"

const CITY = "Ульяновск"

function yandexSrc(lat, lon) {
  const point = `${lon},${lat}`
  return `https://yandex.ru/map-widget/v1/?ll=${point}&z=17&pt=${point},pm2rdm&l=map`
}

function mapsLink(address, lat, lon) {
  if (lat && lon) {
    return `https://yandex.ru/maps/?pt=${lon},${lat}&z=17&l=map`
  }
  return `https://yandex.ru/maps/?text=${encodeURIComponent(`${CITY}, ${address}`)}`
}

async function geocodeAddress(address) {
  const query = `${address}, ${CITY}, Россия`

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=ru&q=${encodeURIComponent(query)}`,
      { headers: { Accept: "application/json" } }
    )
    if (response.ok) {
      const data = await response.json()
      if (data?.[0]) {
        return { lat: Number(data[0].lat), lon: Number(data[0].lon) }
      }
    }
  } catch {
    /* try photon */
  }

  const photon = await fetch(
    `https://photon.komoot.io/api/?limit=1&lat=54.3142&lon=48.3946&q=${encodeURIComponent(query)}`
  )
  if (!photon.ok) return null

  const json = await photon.json()
  const coords = json?.features?.[0]?.geometry?.coordinates
  if (!coords) return null

  return { lat: Number(coords[1]), lon: Number(coords[0]) }
}

function LocationMap({ address }) {
  const [coords, setCoords] = useState(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!address) return undefined

    let cancelled = false
    setCoords(null)
    setFailed(false)

    geocodeAddress(address)
      .then((point) => {
        if (cancelled) return
        if (point) setCoords(point)
        else setFailed(true)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
    }
  }, [address])

  if (!address) return null

  const src = coords ? yandexSrc(coords.lat, coords.lon) : null

  return (
    <section className="object-map wrap">
      <p className="kicker">На карте</p>
      <div className="object-map-head">
        <h2>{address}</h2>
        <a href={mapsLink(address, coords?.lat, coords?.lon)} target="_blank" rel="noreferrer">
          Открыть в Яндекс Картах
        </a>
      </div>
      <div className="object-map-frame" data-lenis-prevent>
        {src ? (
          <iframe title={`Карта: ${address}`} src={src} loading="lazy" />
        ) : (
          <p className="object-map-status">
            {failed ? "Адрес можно открыть в Яндекс Картах." : "Ищем дом на карте…"}
          </p>
        )}
      </div>
    </section>
  )
}

export default LocationMap
