import { useEffect, useState, useCallback } from "react"

import { supabase } from "../../api/supabase"

import "./PhotoManager.css"

function PhotoManager({ apartmentId }) {

  const [photos, setPhotos] = useState([])

  const [loading, setLoading] = useState(false)

  const getPhotos = useCallback(async () => {

  const { data, error } = await supabase

    .from("photos")

    .select("*")

    .eq("apartment_id", apartmentId)

    .order("id", { ascending: true })

  if(error){

    console.log(
      "Ошибка загрузки фото:",
      error
    )

    return []

  }

  return data || []

}, [apartmentId])

  useEffect(() => {

  if(!apartmentId) return

  async function startLoad(){

    const data = await getPhotos()

    setPhotos(data)

  }

  startLoad()

}, [apartmentId, getPhotos])

  async function refreshPhotos(){

    const data = await getPhotos()

    setPhotos(data)

  }

  async function uploadPhotos(event){

    const files = Array.from(
      event.target.files
    )

    if(!files.length) return

    setLoading(true)

    for(const file of files){

      const fileName =

        `${crypto.randomUUID()}-${file.name}`

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

      const { data: urlData } = supabase.storage

        .from("photos")

        .getPublicUrl(fileName)

      const { error: insertError } = await supabase

        .from("photos")

        .insert({

          apartment_id: apartmentId,

          url: urlData.publicUrl,

          is_main:false

        })

      if(insertError){

        console.log(
          "Ошибка добавления:",
          insertError
        )

      }

    }

    await refreshPhotos()

    setLoading(false)

    event.target.value = ""

  }

  async function setMainPhoto(id){

  const reset = await supabase
    .from("photos")
    .update({
      is_main:false
    })
    .eq("apartment_id", apartmentId)

  console.log("RESET:", reset)

  const main = await supabase
    .from("photos")
    .update({
      is_main:true
    })
    .eq("id", id)

  console.log("MAIN:", main)

  if(main.error){

    console.log(main.error)

    return

  }

  await refreshPhotos()

}

  async function deletePhoto(id){

  const result = window.confirm("Удалить это фото?")

  if(!result) return

  const response = await supabase
    .from("photos")
    .delete()
    .eq("id", id)

  console.log("DELETE:", response)

  if(response.error){

    console.log(response.error)

    return

  }

  await refreshPhotos()

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

                onClick={() =>
                  setMainPhoto(photo.id)
                }

              >

                Сделать главным

              </button>

              <button

                onClick={() =>
                  deletePhoto(photo.id)
                }

              >

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