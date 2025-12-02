import supabase from "@/services/superbase";

export async function loadContact() {
  const { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    throw new Error("Contacts could not be retrieved ");
  }

  return data;
}
