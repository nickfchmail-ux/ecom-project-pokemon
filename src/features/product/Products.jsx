import usePokemon from "@/hooks/pokemonData";
import Loader from "@/ui/Loader";
import { memo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import Card from "./Card";
function Products() {
  const [loadingDispatch, setLoadingDispatch] = useState("");

  const { pokemon = [], isLoadingPokemon, error } = usePokemon();

  const [searchParam] = useSearchParams();
  const priceOrder = searchParam.get("priceOrder");
  const species = searchParam.get("species");
  if (isLoadingPokemon) return <Loader />;

  let filteredPokemon;
  let adjustment;

  if (priceOrder) {
    const [direction, field] = priceOrder?.split("/");
    if (field === "regular_price") {
      if (direction === "asc") {
        adjustment = 1;
      } else {
        adjustment = -1;
      }
    }

    filteredPokemon = pokemon.sort(
      (a, b) => (a.regular_price - b.regular_price) * adjustment,
    );
  }

  if (species) {
    if (species === "All") {
      filteredPokemon = pokemon.sort(
        (a, b) => (a.regular_price - b.regular_price) * adjustment,
      );
    } else {
      filteredPokemon = filteredPokemon ? filteredPokemon : pokemon;

      filteredPokemon = filteredPokemon.filter((poke) =>
        poke.species.includes(species),
      );
    }
  }

  return (
    <>
      <h1 className="my-12 text-center text-5xl text-white drop-shadow-lg">
        Our Pokémon
      </h1>
      <Filter />
      <span className="sticky top-25 m-5 rounded-2xl bg-green-300 px-4 py-2 text-emerald-800">
        {" "}
        {(filteredPokemon || pokemon).length} results
      </span>
      <div className="mx-auto grid w-[75vw] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(filteredPokemon || pokemon).map((p) => (
          <Card product={p} key={p.name} />
        ))}
      </div>
    </>
  );
}

export default memo(Products);
