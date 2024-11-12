import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}