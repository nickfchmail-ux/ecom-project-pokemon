import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntcfaqkdafuaxfxoweab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2ZhcWtkYWZ1YXhmeG93ZWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODY4MzEsImV4cCI6MjA3OTY2MjgzMX0.CTMcsbfNDU-KmWMk1YmS0PfVzHBpXrwOp1FuoJ4Li-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPokemons() {
  let query = supabase.from("pokemons_selling").select(`*, pokemons(*)`);

  const { data, error } = await query;

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }

  let flattenedData = data.map((row) => ({ ...row, ...row.pokemons }));
  console.log("Sorted data:", flattenedData);

  return flattenedData;
}
