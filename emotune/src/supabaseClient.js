import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qbqitytknxkaxdyuggvl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWl0eXRrbnhrYXhkeXVnZ3ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMjQ4NDUsImV4cCI6MjA3ODgwMDg0NX0.Px1DNegXp8-wtyIxm78idStA7bWeoocmXz2Oruwgqtg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
