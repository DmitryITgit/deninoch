import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ypxhmavxexxomktrmyvt.supabase.co"

const supabaseKey = "sb_publishable_QU34Ik0xVNwD0KrSB6yOOQ_HgPzlkJS"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)