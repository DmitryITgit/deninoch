import { useEffect, useState } from "react"

import ApartmentCard from "../components/ApartmentCard"

import { getApartments } from "../api/apartments"

import "./Apartments.css"

function Apartments() {

  const [apartments, setApartments] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {

    async function load() {

      const data = await getApartments()

      console.log("Квартиры с Supabase:", data)

      setApartments(data || [])

    }

    load()

  }, [])

  const filteredApartments = apartments.filter((item) => {

    return item.address

      ?.toLowerCase()

      .includes(search.toLowerCase())

  })

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

        {

          filteredApartments.length > 0 ? (

            filteredApartments.map((item) => (

              <ApartmentCard

                key={item.id}

                apartment={item}

              />

            ))

          ) : (

            <p className="no-result">

              Квартиры загружаются или не найдены

            </p>

          )

        }

      </div>

    </main>

  )

}

export default Apartments