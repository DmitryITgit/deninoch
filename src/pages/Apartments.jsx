import { useEffect, useState } from "react"
import ApartmentCard from "../components/ApartmentCard"
import { getApartments } from "../api/apartments"
import useReveal from "../hooks/useReveal"
import "./Apartments.css"

function Apartments() {
  const [apartments, setApartments] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useReveal()

  useEffect(() => {
    async function load() {
      const data = await getApartments()
      setApartments(data || [])
      setLoading(false)
    }
    load()
  }, [])

  const filtered = apartments.filter((item) =>
    item.address?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="catalog">
      <header className="wrap catalog-head">
        <p className="kicker">Каталог</p>
        <h1>Наши квартиры</h1>
        <p>Тихие пространства в удобных районах Ульяновска.</p>
        <label className="catalog-search">
          <span>Поиск по адресу</span>
          <input
            type="search"
            placeholder="Кашубы, Тюленева, Латышева…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </header>

      {loading ? (
        <p className="wrap catalog-empty">Загрузка...</p>
      ) : filtered.length > 0 ? (
        <div className="wrap catalog-grid">
          {filtered.map((item, index) => (
            <ApartmentCard
              key={item.id}
              apartment={item}
              featured={index === 0 && !search}
            />
          ))}
        </div>
      ) : (
        <p className="wrap catalog-empty">Квартиры не найдены</p>
      )}
    </main>
  )
}

export default Apartments
