import { getPokemons } from "@/services/pokemonApi";
import { useQuery } from "@tanstack/react-query";

function usePokemon() {
  const {
    data: pokemon,
    isLoadingPokemon,
    error,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => getPokemons(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return { pokemon, isLoadingPokemon, error };
}

export default usePokemon;
