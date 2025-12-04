import { getPokemons } from "@/services/pokemonApi";
import Loader from "@/ui/Loader";
import { useQuery } from "@tanstack/react-query";
import { memo, useState } from "react";
import Card from "./Card";
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

  if (isLoading) return <Loader />;

  return (
    <>
      <h1 className="my-12 text-center text-5xl text-white drop-shadow-lg">
        Our Pokémon
      </h1>
      <div className="mx-auto grid w-[75vw] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemons.map((p) => (
          <Card product={p} key={p.name} />
        ))}
      </div>
    </>
  );
}

export default memo(Products);
