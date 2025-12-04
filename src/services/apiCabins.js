import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ntcfaqkdafuaxfxoweab.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50Y2ZhcWtkYWZ1YXhmeG93ZWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwODY4MzEsImV4cCI6MjA3OTY2MjgzMX0.CTMcsbfNDU-KmWMk1YmS0PfVzHBpXrwOp1FuoJ4Li-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getPokemons() {
  const { data, error } = await supabase.from("pokemons").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deletePokemons(id) {
  const { error } = await supabase.from("cabin").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}

export async function createEditPokemons(newCabin) {
  //https://ntcfaqkdafuaxfxoweab.supabase.co/storage/v1/object/public/cabin-images/halfcut-pokemon-WC_Qjaryv4Y-unsplash.jpg

  console.log(`API Date received: ${JSON.stringify(newCabin)}`);

  const id = newCabin?.id;

  console.log(id);
  console.log(`image path received: ${JSON.stringify(newCabin.image)}`);

  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image?.startsWith(supabaseUrl);
  console.log(hasImagePath);
  const imageName = `${Math.random()}-${newCabin.image?.name}`?.replaceAll(
    "/",
    "",
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabin");

  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id) {
    console.log(`Data going to be update: ${JSON.stringify(newCabin)}`);
    console.log(`trying to update cabin`);
    console.log(`type of id ${typeof id}`);

    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  if (!hasImagePath) {
    console.log("need to update image");
    console.log(
      `image data = ${(newCabin.image, JSON.stringify(newCabin.image[0]))}`,
    );
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image[0]);

    // Delete the cabin if there was an error uploading image

    if (storageError) {
      await supabase.from("cabin").delete().eq("id", data.id);

      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and the cabin was not created",
      );
    }
  }

  return data;
}
