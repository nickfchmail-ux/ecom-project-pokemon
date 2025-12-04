import usePokemon from "@/hooks/pokemonData";
import { TbFilterCancel } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";
function Filter({ result }) {
  const { pokemon = [], isLoadingPokemon, error } = usePokemon();

  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
    "All",
  ];
  console.log(`accumulated species:${types}`);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterOptions = [
    {
      value: "asc/regular_price",
      label: "By price (from smaller to greater)",
    },
    {
      value: "desc/regular_price",
      label: "By price (from greater to smaller)",
    },
  ];
  return (
    <>
      <li className="sticky top-0 z-2 m-0 mb-5 flex flex-wrap gap-1 bg-amber-300 px-2 py-5">
        <span className="absolute right-0 bottom-0 m-1 rounded-2xl bg-green-300 px-2 py-1 text-emerald-800">
          {result} results
        </span>
        {types.map((t) => {
          if (t === "All")
            return (
              <button
                className="gap-.5 flex w-[15rem] items-center justify-around text-red-500"
                onClick={() => {
                  setSearchParams((prev) => {
                    prev.set("species", "All");
                    return prev;
                  });
                }}
              >
                <TbFilterCancel className="" /> Cancel Species Filtering
              </button>
            );

          return (
            <img
              src={`/${t}.png`}
              className="h-[.8rem] cursor-pointer sm:h-[1rem] md:h-[1.5rem]"
              onClick={() =>
                setSearchParams((prev) => {
                  if (prev.get("species") === t) {
                    prev.delete("species"); // remove if already selected
                  } else {
                    prev.set("species", t);
                  }

                  return prev;
                })
              }
            />
          );
        })}

        <select
          name="filter"
          id=""
          className="rounded-2xl bg-amber-200 text-center"
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("priceOrder", e.target.value);
              return prev;
            })
          }
        >
          <option value="">filter by</option>
          {filterOptions.map((op) => {
            return (
              <option value={op.value} key={op.value}>
                {op.label}
              </option>
            );
          })}
        </select>
      </li>
    </>
  );
}

export default Filter;
