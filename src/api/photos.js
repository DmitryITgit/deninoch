import { supabase } from "./supabase"

export async function uploadPhoto(file, apartmentId) {

  const fileName = `${Date.now()}-${file.name}`

  const { error: uploadError } = await supabase.storage
    .from("photos")
    .upload(fileName, file)

  if (uploadError) {

    console.log("Ошибка загрузки файла:", uploadError)

    return null

  }

  const { data } = supabase.storage
    .from("photos")
    .getPublicUrl(fileName)

  const photoUrl = data.publicUrl

  const { error: dbError } = await supabase
    .from("photos")
    .insert({

      apartment_id: apartmentId,
      url: photoUrl

    })

  if (dbError) {

    console.log("Ошибка записи фото:", dbError)

    return null

  }

  return photoUrl

}