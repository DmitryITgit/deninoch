import { supabase } from "./supabase"

// Получение всех квартир для админки

export async function getAdminApartments() {

  const { data, error } = await supabase

    .from("apartments")

    .select("*")

    .order("id", { ascending: true })

  if (error) {

    console.log("Ошибка загрузки квартир:", error)

    return []

  }

  return data

}

// Обновление квартиры

export async function updateApartment(id, apartmentData) {

  const { error } = await supabase

    .from("apartments")

    .update({

      title: apartmentData.title,

      address: apartmentData.address,

      price: Number(apartmentData.price),

      description: apartmentData.description

    })

    .eq("id", id)

  if (error) {

    console.log("Ошибка обновления квартиры:", error)

    return false

  }

  return true

}

export async function addApartment(apartment) {

  const { data, error } = await supabase

    .from("apartments")

    .insert(apartment)

    .select()

    .single()

  if(error){

    console.log("Ошибка добавления:", error.message, error.details)

    return null

  }

  return data

}


export async function deleteApartment(id) {

  const { error } = await supabase
    .from("apartments")
    .delete()
    .eq("id", id)

  if (error) {

    console.log("Ошибка удаления квартиры:", error)

    return false

  }

  return true

}