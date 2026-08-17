import "./LocationMap.css"

function mapSrc(address) {
  const query = `Ульяновск, ${address}`
  return `https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent(query)}&z=16`
}

function LocationMap({ address }) {
  if (!address) return null

  const query = `Ульяновск, ${address}`
  const mapsLink = `https://yandex.ru/maps/?text=${encodeURIComponent(query)}`

  return (
    <section className="object-map wrap">
      <p className="kicker">На карте</p>
      <div className="object-map-head">
        <h2>{address}</h2>
        <a href={mapsLink} target="_blank" rel="noreferrer">
          Открыть в Яндекс Картах
        </a>
      </div>
      <div className="object-map-frame" data-lenis-prevent>
        <iframe
          title={`Карта: ${address}`}
          src={mapSrc(address)}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default LocationMap
