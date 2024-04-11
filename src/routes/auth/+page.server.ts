import { supabase } from "$lib/supabaseClient";

export async function _signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'https://example.com/welcome',
      },
    })
    console.log('data',data)
    if (error) console.log('error',error)
  }
  