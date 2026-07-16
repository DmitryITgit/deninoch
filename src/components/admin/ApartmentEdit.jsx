import { useState } from "react"

import { updateApartment } from "../../api/admin"

import PhotoManager from "./PhotoManager"

import "./ApartmentEdit.css"

function ApartmentEdit({ apartment, close }) {

  const [form, setForm] = useState({

    title: apartment.title || "",

    address: apartment.address || "",

    price: apartment.price || "",

    description: apartment.description || ""

  })

  const [loading, setLoading] = useState(false)

  function change(e){

    setForm({

      ...form,

      [e.target.name]: e.target.value

    })

  }

  async function save(){

    setLoading(true)

    const result = await updateApartment(

      apartment.id,

      form

    )

    console.log(
      "Обновление:",
      result
    )

    setLoading(false)

    close()

  }

  return (

    <div className="edit-window">

      <div className="edit-header">

        <h2>

          Редактирование квартиры

        </h2>

        <button

          type="button"

          className="close-button"

          onClick={close}

        >

          ✕

        </button>

      </div>

      <div className="edit-form">

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

      </div>

      <button

        type="button"

        className="save-button"

        onClick={save}

      >

        {

          loading

          ? "Сохранение..."

          : "Сохранить"

        }

      </button>

      <PhotoManager

        apartmentId={apartment.id}

      />

    </div>

  )

}

export default ApartmentEdit