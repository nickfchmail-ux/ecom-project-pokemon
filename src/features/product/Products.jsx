import Cards from "@/features/product/Cards";
import { getPokemons } from "@/services/pokemonApi";
import { useQuery } from "@tanstack/react-query";
import { memo, useState } from "react";
function Products() {
  const [loadingDispatch, setLoadingDispatch] = useState("");
  const {
    isLoading,
    data: pokemons = [], // ← default to empty array
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getPokemons,
  });

  console.log(JSON.stringify(pokemons));

  return (
    <>
      <h1 className="my-12 text-center text-5xl text-white drop-shadow-lg">
        Our Pokémon
      </h1>
      <div className="mx-auto grid w-[75vw] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Cards products={pokemons} loading={isLoading} />
      </div>
    </>
  );
}

export default memo(Products);
