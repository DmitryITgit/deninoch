import { useEffect, useState } from "react"

import ApartmentCard from "../components/ApartmentCard"
import { getApartments } from "../api/apartments"
import "./Apartments.css"

function Apartments() {
  const [apartments, setApartments] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getApartments()
      setApartments(data || [])
      setLoading(false)
    }

    load()
  }, [])

  const filteredApartments = apartments.filter((item) =>
    item.address?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="apartments">
      <header className="apartments-head">
        <p className="section-kicker">Каталог</p>
        <h1>Наши квартиры</h1>
        <p>Тихие пространства в удобных районах Ульяновска.</p>
      </header>

      <div className="apartments-search">
        <input
          type="text"
          placeholder="Поиск по адресу"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="no-result">Загрузка...</p>
      ) : filteredApartments.length > 0 ? (
        <div className="apartments-list">
          {filteredApartments.map((item) => (
            <ApartmentCard key={item.id} apartment={item} />
          ))}
        </div>
      ) : (
        <p className="no-result">Квартиры не найдены</p>
      )}
    </main>
  )
}

export default Apartments
