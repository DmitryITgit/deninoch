import { useEffect, useState } from "react"

import "./ApartmentList.css"

import {
  getAdminApartments,
  deleteApartment
} from "../../api/admin"

import ApartmentEdit from "./ApartmentEdit"

import AddApartment from "./AddApartment"

function ApartmentList() {

  const [apartmentList, setApartmentList] = useState([])

  const [selectedApartment, setSelectedApartment] = useState(null)

  const [addMode, setAddMode] = useState(false)

  useEffect(() => {

    async function fetchApartments() {

      const data = await getAdminApartments()

      setApartmentList(data)

    }

    fetchApartments()

  }, [])

  async function refreshApartments() {

    const data = await getAdminApartments()

    setApartmentList(data)

  }

  async function removeApartment(id) {

    const confirmDelete = window.confirm(

      "Удалить эту квартиру?"

    )

    if (!confirmDelete) return

    await deleteApartment(id)

    refreshApartments()

  }

  return (

    <div className="apartment-list">

      <h1>

        Квартиры

      </h1>

      <button

        className="add-button"

        onClick={() => setAddMode(true)}

      >

        + Добавить квартиру

      </button>

      <div className="admin-apartments">

        {

          apartmentList.map((apartment) => (

            <div

              className="admin-card"

              key={apartment.id}

            >

              <h3>

                {apartment.title}

              </h3>

              <p>

                📍 {apartment.address}

              </p>

              <p>

                💰 {apartment.price} ₽

              </p>

              <button

                onClick={() => setSelectedApartment(apartment)}

              >

                Редактировать

              </button>

              <button

                onClick={() => removeApartment(apartment.id)}

              >

                Удалить

              </button>

            </div>

          ))

        }

      </div>

      {

        selectedApartment && (

          <div className="edit-overlay">

            <ApartmentEdit

              apartment={selectedApartment}

              close={() => setSelectedApartment(null)}

            />

          </div>

        )

      }

      {

        addMode && (

          <div className="edit-overlay">

            <AddApartment

              close={() => setAddMode(false)}

              refresh={refreshApartments}

            />

          </div>

        )

      }

    </div>

  )

}

export default ApartmentList