import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntcfaqkdafuaxfxoweab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2ZhcWtkYWZ1YXhmeG93ZWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODY4MzEsImV4cCI6MjA3OTY2MjgzMX0.CTMcsbfNDU-KmWMk1YmS0PfVzHBpXrwOp1FuoJ4Li-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPokemons() {
  const { data, error } = await supabase
    .from("pokemons")
    .select(
      `id, name, species, descriptions, hp, attack, defense, special_attack, special_defense, speed, image, pokemons_selling(regular_price, discount)`,
    )
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// async function updatePokemonSellingInfo(number) {
//   // Step 1: Generate ALL data first
//   const sellingData = Array.from({ length: number }, (_, i) => {
//     const pokemonId = i + 1;

//     const regular_price = Math.floor(Math.random() * (200 - 100 + 1)) + 100; // 100~200
//     const discount = Math.floor(Math.random() * 51); // 0~50%

//     return {
//       reference_id: pokemonId,
//       regular_price,
//       discount,
//     };
//   });

//   // Step 2: ONE single bulk insert → Fast, Safe, Atomic
//   const { data, error } = await supabase
//     .from("pokemons_selling")
//     .insert(sellingData)
//     .select();

//   if (error) {
//     console.error("Bulk insert failed:", error.message);
//     throw error;
//   }

//   console.log(`Successfully inserted ${data.length} records!`);
//   return data;
// }

// // // Run it!
// // const result = await updatePokemonSellingInfo(200);
// // console.log(result);
