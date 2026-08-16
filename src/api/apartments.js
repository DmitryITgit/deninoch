import { supabase } from "./supabase"

const apartmentSelect = `
  *,
  photos (
    id,
    url,
    is_main
  ),
  instructions (
    id,
    title,
    url
  )
`

const apartmentSelectWithoutVideos = `
  *,
  photos (
    id,
    url,
    is_main
  )
`

function mapApartment(apartment) {
  const photos = apartment.photos || []
  const instructions = (apartment.instructions || []).map((item) => ({
    id: item.id,
    title: item.title,
    video: item.url
  }))

  return {
    ...apartment,
    photos,
    instructions,
    main_photo:
      photos.find((photo) => photo.is_main)?.url ||
      photos[0]?.url ||
      "/no-photo.jpg"
  }
}

function isMissingInstructionsTable(error) {
  return (
    error?.code === "PGRST205" ||
    error?.code === "PGRST200" ||
    error?.message?.includes("instructions")
  )
}

export async function getApartments() {
  let query = await supabase
    .from("apartments")
    .select(apartmentSelect)
    .order("id", { ascending: true })

  if (query.error && isMissingInstructionsTable(query.error)) {
    query = await supabase
      .from("apartments")
      .select(apartmentSelectWithoutVideos)
      .order("id", { ascending: true })
  }

  if (query.error) {
    console.log("Ошибка загрузки квартир:", query.error)
    return []
  }

  return (query.data || []).map(mapApartment)
}

export async function getApartmentById(id) {
  let query = await supabase
    .from("apartments")
    .select(apartmentSelect)
    .eq("id", id)
    .single()

  if (query.error && isMissingInstructionsTable(query.error)) {
    query = await supabase
      .from("apartments")
      .select(apartmentSelectWithoutVideos)
      .eq("id", id)
      .single()
  }

  if (query.error) {
    console.log("Ошибка загрузки квартиры:", query.error)
    return null
  }

  return mapApartment(query.data)
}
