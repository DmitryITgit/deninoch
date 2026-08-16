import { supabase } from "./supabase"

function filePathFromUrl(url) {
  const marker = "/object/public/videos/"
  const index = url.indexOf(marker)
  if (index === -1) return null
  return decodeURIComponent(url.slice(index + marker.length))
}

function safeFileName(file) {
  return file.name.replace(/[^\w.\-]+/g, "_")
}

export async function getInstructions(apartmentId) {
  const { data, error } = await supabase
    .from("instructions")
    .select("*")
    .eq("apartment_id", apartmentId)
    .order("id", { ascending: true })

  if (error) {
    console.log("Ошибка загрузки видеоинструкций:", error)
    return []
  }

  return data || []
}

export async function uploadInstruction(file, apartmentId, title) {
  const fileName = `${apartmentId}/${Date.now()}-${safeFileName(file)}`

  const { error: uploadError } = await supabase.storage
    .from("videos")
    .upload(fileName, file)

  if (uploadError) {
    console.log("Ошибка загрузки видео:", uploadError)
    return { data: null, error: uploadError }
  }

  const { data } = supabase.storage.from("videos").getPublicUrl(fileName)

  const { data: row, error: dbError } = await supabase
    .from("instructions")
    .insert({
      apartment_id: apartmentId,
      title: title.trim() || file.name,
      url: data.publicUrl
    })
    .select()
    .single()

  if (dbError) {
    await supabase.storage.from("videos").remove([fileName])
    console.log("Ошибка записи видео:", dbError)
    return { data: null, error: dbError }
  }

  return { data: row, error: null }
}

export async function deleteInstruction(id) {
  const { data: instruction, error: getError } = await supabase
    .from("instructions")
    .select("url")
    .eq("id", id)
    .single()

  if (getError) {
    console.log("Ошибка получения видео:", getError)
    return false
  }

  const filePath = filePathFromUrl(instruction.url)

  if (filePath) {
    const { error: storageError } = await supabase.storage
      .from("videos")
      .remove([filePath])

    if (storageError) {
      console.log("Ошибка удаления видео из Storage:", storageError)
    }
  }

  const { error: dbError } = await supabase
    .from("instructions")
    .delete()
    .eq("id", id)

  if (dbError) {
    console.log("Ошибка удаления записи видео:", dbError)
    return false
  }

  return true
}
