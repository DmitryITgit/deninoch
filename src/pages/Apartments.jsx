import { useState } from "react"
import ApartmentCard from "../components/ApartmentCard"
import apartments from "../data/apartments"
import "./Apartments.css"

function Apartments() {

  const [search, setSearch] = useState("")

  const filteredApartments = apartments.filter((item) =>
    item.address
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (

    <main className="apartments">

      <h1>
        Наши квартиры
      </h1>

      <div className="search-mobile">

        <input

          type="text"

          placeholder="Поиск по адресу..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

        />

      </div>

      <div className="apartments-list">

        {filteredApartments.length > 0 ? (

          filteredApartments.map((item) => (

            <ApartmentCard

              key={item.id}

              apartment={item}

            />

          ))

        ) : (

          <p className="no-result">

            Квартира не найдена

          </p>

        )}

      </div>

    </main>

  )

}

export default Apartments