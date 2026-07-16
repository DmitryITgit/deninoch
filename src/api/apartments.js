import { supabase } from "./supabase"

export async function getApartments() {

  const { data, error } = await supabase

  .from("apartments")

  .select(`
    *,
    photos (
      id,
      url,
      is_main
    )
  `)

  .order("id", { ascending: true })

  if (error) {

    console.log("Ошибка загрузки квартир:", error)

    return []

  }

  const apartments = data.map((apartment) => ({

    ...apartment,

    main_photo:

      apartment.photos?.length

        ? apartment.photos[0].url

        : "/no-photo.jpg"

  }))

  console.log("Квартиры с фото:", apartments)

  return apartments

}