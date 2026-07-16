import { useState } from "react"

import { addApartment } from "../../api/admin"

import "./AddApartment.css"

function AddApartment({close, refresh}) {

  const [form,setForm] = useState({

    title:"",

    address:"",

    price:"",

    description:""

  })

  function change(e){

    setForm({

      ...form,

      [e.target.name]:e.target.value

    })

  }

  async function save(){

    await addApartment({

      ...form,

      price:Number(form.price)

    })

    refresh()

    close()

  }

  return (

    <div className="add-apartment">

      <h2>
        Добавить квартиру
      </h2>

      <input

        name="title"

        placeholder="Название"

        onChange={change}

      />

      <input

        name="address"

        placeholder="Адрес"

        onChange={change}

      />

      <input

        name="price"

        placeholder="Цена"

        onChange={change}

      />

      <textarea

        name="description"

        placeholder="Описание"

        onChange={change}

      />

      <button onClick={save}>
        Сохранить
      </button>

      <button onClick={close}>
        Закрыть
      </button>

    </div>

  )

}

export default AddApartment