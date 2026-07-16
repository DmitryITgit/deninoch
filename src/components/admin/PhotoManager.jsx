import { useEffect, useState } from "react"

import { supabase } from "../../api/supabase"

import "./PhotoManager.css"

function PhotoManager({ apartmentId }) {

  const [photos, setPhotos] = useState([])

  const [loading, setLoading] = useState(false)

  async function reloadPhotos(){

  console.log(
    "Обновляем список фото..."
  )

  const { data, error } = await supabase

    .from("photos")

    .select("*")

    .eq("apartment_id", apartmentId)

    .order("id", { ascending:true })

  console.log(
    "Фото после обновления:",
    data
  )

  if(error){

    console.log(
      "Ошибка загрузки:",
      error
    )

    return

  }

  setPhotos(data || [])

}

  useEffect(() => {

    if(!apartmentId) return

    async function load(){

      const { data, error } = await supabase

        .from("photos")

        .select("*")

        .eq("apartment_id", apartmentId)

        .order("id", { ascending:true })

      if(error){

        console.log(
          "Ошибка загрузки:",
          error
        )

        return

      }

      setPhotos(data || [])

    }

    load()

  }, [apartmentId])

  async function uploadPhotos(event){

    const files = Array.from(
      event.target.files
    )

    if(!files.length) return

    setLoading(true)

    for(const file of files){

      const fileName =

        `${Date.now()}-${file.name}`

      const { error: uploadError } = await supabase.storage

        .from("photos")

        .upload(fileName, file)

      if(uploadError){

        console.log(
          "Ошибка загрузки:",
          uploadError
        )

        continue

      }

      const { data } = supabase.storage

        .from("photos")

        .getPublicUrl(fileName)

      const { error: insertError } = await supabase

        .from("photos")

        .insert({

          apartment_id: apartmentId,

          url:data.publicUrl,

          is_main:false

        })

      if(insertError){

        console.log(
          "Ошибка добавления:",
          insertError
        )

      }

    }

    await reloadPhotos()

    setLoading(false)

    event.target.value = ""

  }

  async function setMainPhoto(id){

    const reset = await supabase

      .from("photos")

      .update({

        is_main:false

      })

      .eq(
        "apartment_id",
        apartmentId
      )

    if(reset.error){

      console.log(
        reset.error
      )

      return

    }

    const main = await supabase

      .from("photos")

      .update({

        is_main:true

      })

      .eq(
        "id",
        id
      )

    if(main.error){

      console.log(
        main.error
      )

      return

    }

    await reloadPhotos()

  }

  async function deletePhoto(id){

  const answer = window.confirm(
    "Удалить это фото?"
  )

  if(!answer) return

  // 1. Получаем данные фото

  const { data: photo, error: getError } = await supabase

    .from("photos")

    .select("url")

    .eq("id", id)

    .single()

  if(getError){

    console.log(
      "Ошибка получения фото:",
      getError
    )

    return

  }

  // 2. Достаём имя файла из URL

  const fileName = photo.url

    .split("/photos/")[1]

  console.log(
    "Удаляем файл:",
    fileName
  )

  // 3. Удаляем файл из Storage

  const { error: storageError } = await supabase.storage

    .from("photos")

    .remove([
      fileName
    ])

  if(storageError){

    console.log(
      "Ошибка удаления из Storage:",
      storageError
    )

  }

  // 4. Удаляем запись из таблицы

  const { error: dbError } = await supabase

    .from("photos")

    .delete()

    .eq("id", id)

  if(dbError){

    console.log(
      "Ошибка удаления записи:",
      dbError
    )

    return

  }

  console.log(
    "Фото полностью удалено"
  )

  await reloadPhotos()

}

  return (

    <div className="photo-manager">

      <h3>

        Фотографии квартиры

      </h3>

      <input

        type="file"

        accept="image/*"

        multiple

        onChange={uploadPhotos}

      />

      {
        loading &&

        <p>

          Загружаем фотографии...

        </p>

      }

      <div className="photo-list">

        {
          photos.map(photo => (

            <div

              className="photo-item"

              key={photo.id}

            >

              <img

                src={photo.url}

                alt=""

              />

              {
                photo.is_main &&

                <div className="main-photo">

                  ⭐ Главное фото

                </div>

              }

              <button

                type="button"

                onClick={() => setMainPhoto(photo.id)}

              >

                Сделать главным

              </button>

              <button

                type="button"

                onClick={() => deletePhoto(photo.id)}>
                
                Удалить

              </button>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default PhotoManager 