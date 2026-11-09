import { supabase } from './supabase'

// The signed-in user's own account page.
export async function loadMyProfile(userId: string) {
  const { data } = await supabase.from('profiles').select('full_name, email, phone').eq('user_id', userId).single()
  return data
}

export async function saveMyProfile(userId: string, fields: { full_name: string; phone: string }) {
  return supabase.from('profiles').update(fields).eq('user_id', userId)
}
