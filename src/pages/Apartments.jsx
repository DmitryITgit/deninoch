import ApartmentCard from "../components/ApartmentCard"
import apartments from "../data/apartments"
import "./Apartments.css"

function Apartments() {
  return (
    <main className="apartments">

      <h1>
        Наши квартиры
      </h1>

      <div className="apartments-list">

        {apartments.map((item) => (
          <ApartmentCard
            key={item.id}
            apartment={item}
          />
        ))}

      </div>

    </main>
  )
}

export default Apartments