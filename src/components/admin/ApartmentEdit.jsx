import { useState } from "react"

import { updateApartment } from "../../api/admin"

import PhotoManager from "./PhotoManager"

import "./ApartmentEdit.css"

function ApartmentEdit({ apartment, close }) {

  const [form, setForm] = useState({

    title: apartment.title,

    address: apartment.address,

    price: apartment.price,

    description: apartment.description

  })

  const [loading, setLoading] = useState(false)

  function change(e) {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    })

  }

  async function save() {

    setLoading(true)

    await updateApartment(

      apartment.id,

      form

    )

    setLoading(false)

    close()

    window.location.reload()

  }

  return (

    <div className="edit-window">

      <h2>

        Редактирование квартиры

      </h2>

      <label>

        Название

      </label>

      <input

        name="title"

        value={form.title}

        onChange={change}

      />

      <label>

        Адрес

      </label>

      <input

        name="address"

        value={form.address}

        onChange={change}

      />

      <label>

        Цена

      </label>

      <input

        name="price"

        value={form.price}

        onChange={change}

      />

      <label>

        Описание

      </label>

      <textarea

        name="description"

        value={form.description}

        onChange={change}

      />

      <button onClick={save}>

        {

          loading

          ? "Сохранение..."

          : "Сохранить"

        }

      </button>

      <button onClick={close}>

        Закрыть

      </button>

      <PhotoManager

        apartmentId={apartment.id}

      />

    </div>

  )

}

export default ApartmentEdit