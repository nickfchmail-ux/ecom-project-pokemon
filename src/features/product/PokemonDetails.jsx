import usePokemon from "@/hooks/pokemonData";
import Loader from "@/ui/Loader";
import { useNavigate, useParams } from "react-router-dom";

function PokemonDetails() {
  const navigate = useNavigate();

  const { item } = useParams();

  const { pokemon = [], isLoadingPokemon, error } = usePokemon();

  if (isLoadingPokemon) return <Loader />;
  const pokemonInfo = pokemon.filter((p) => p.id === Number(item)).at(0);

  if (!pokemonInfo) return <Loader />;
  const pokemonID = String(pokemonInfo.image)
    .split("/")
    .at(-1)
    .split("-")
    .at(0);
  return (
    <div className="grid place-items-start gap-5 px-10 pt-5 sm:grid-cols-[minmax(200px,1fr)_1fr]">
      <div>
        <p>ID No. {pokemonID}</p>
        <img src={pokemonInfo.image} alt="" />
      </div>

      <div className="mb-5 grid h-full grid-rows-[auto_1fr_auto]">
        <ul className="flex flex-col gap-5">
          <li className="flex gap-1">
            {pokemonInfo.species.map((p, i) => (
              <img className="h-5" src={`/${p.toLowerCase()}.png`} key={p} />
            ))}
          </li>
          <li> {pokemonInfo?.name}</li>
        </ul>
        <div className="mt-8 flex flex-col items-center space-y-5">
          {!pokemonInfo.descriptions.length && (
            <p>神秘的寶可夢，在資料庫找不到蹤跡。</p>
          )}
          {pokemonInfo?.descriptions.map((des, index) => {
            return (
              index < 3 && (
                <p className="place-self-start text-[0.8rem]" key={index}>
                  {des}
                </p>
              )
            );
          })}
        </div>
        <button onClick={() => navigate(-1)} className="place-self-end">
          Back
        </button>
      </div>
    </div>
  );
}

export default PokemonDetails;
