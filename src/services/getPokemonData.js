import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntcfaqkdafuaxfxoweab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2ZhcWtkYWZ1YXhmeG93ZWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODY4MzEsImV4cCI6MjA3OTY2MjgzMX0.CTMcsbfNDU-KmWMk1YmS0PfVzHBpXrwOp1FuoJ4Li-0";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getPokemonDataFromAPI(number) {
  try {
    const pokeResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${number}`,
    );
    if (!pokeResponse.ok) {
      throw new Error(`Failed to fetch species data: ${pokeResponse.status}`);
    }
    const poke = await pokeResponse.json();

    const imgResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${number}`,
    );
    if (!imgResponse.ok) {
      throw new Error(`Failed to fetch Pokémon data: ${imgResponse.status}`);
    }
    const imgUrl = await imgResponse.json();

    const { stats, types, sprites } = imgUrl;
    const image =
      "https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/pokemons/" +
      `${number}-no-bg.png`;
    if (!image) {
      throw new Error("No valid sprite image found");
    }

    const { names, flavor_text_entries } = poke;

    const chineseNameEntry = names.find((n) => n.language.name === "zh-Hant");
    if (!chineseNameEntry) {
      throw new Error("No zh-Hant name found for this Pokémon");
    }
    const name = chineseNameEntry.name;

    const chineseFlavors = flavor_text_entries
      .filter((des) => des.language.name === "zh-Hant")
      .map(
        (obj) =>
          obj.flavor_text
            .replace(/\\"/g, '"') // Fix escaped quotes
            .replace(/\n/g, " ") // Newlines to spaces
            .replace(/\s+/g, " ") // Multiple spaces to single space
            .trim(), // Trim edges
      );

    const descriptions = [...new Set(chineseFlavors)]; // Dedupe unique descriptions
    const species = types.map((obj) => obj.type.name);

    const statsObj = {}; // Renamed for clarity (base stats, not abilities)
    stats.forEach((obj) => {
      const strength = obj.stat.name.replace(/-/g, "_"); // Replace hyphens with underscores for Supabase columns
      const rate = obj.base_stat;
      statsObj[strength] = rate;
    });

    return { name, species, ...statsObj, descriptions, image };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error.message);
    throw error;
  }
}

async function uploadPokemonDataToSupabase(fetchedData) {
  try {
    const { data, error } = await supabase
      .from("pokemons")
      .insert([fetchedData]); // Array for single insert

    if (error) {
      console.error("Supabase upload error:", error);
      throw new Error("Pokémon data could not be inserted");
    }

    console.log("Upload successful:", data);
    return data;
  } catch (error) {
    console.error("Error uploading to Supabase:", error.message);
    throw error;
  }
}

// Main execution (async IIFE for top-level await compatibility)
async function uploadPokemon(numberOfPokemons) {
  const arr = Array.from({ length: numberOfPokemons }, (_, index) => {
    return index;
  });

  const result = await Promise.allSettled(
    arr.map(async (i) => {
      try {
        const fdata = await getPokemonDataFromAPI(i + 1); // Charmeleon
        console.log("Fetched data:", fdata);

        const result = await uploadPokemonDataToSupabase(fdata);
        console.log("Upload result:", result);
      } catch (error) {
        console.error("Main execution error:", error.message);
      }
    }),
  );
}

// const result = await uploadPokemon(199);

// console.log(result);

try {
  const fdata = await getPokemonDataFromAPI(200); // Charmeleon
  console.log("Fetched data:", fdata);

  const result = await uploadPokemonDataToSupabase(fdata);
  console.log("Upload result:", result);
} catch (error) {
  console.error("Main execution error:", error.message);
}
