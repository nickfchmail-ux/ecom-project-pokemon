import usePokemon from "@/hooks/pokemonData";
import Discount from "@/ui/Discount";
import Loader from "@/ui/Loader";
import Price from "@/ui/Price";
import { useNavigate, useParams } from "react-router-dom";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import CardOptions from "../cart/CardOptions";
import styles from "./PokemonDetails.module.scss";
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
    <div className="grid place-items-start gap-5 bg-lime-100 px-10 pt-5 sm:grid-cols-[minmax(200px,1fr)_1fr]">
      <div className="relative flex flex-col items-center justify-center place-self-center">
        <p className="place-self-start">ID No. {pokemonID}</p>
        <img src={pokemonInfo.image} alt="" />
        <CardOptions id={pokemonInfo.id} />
      </div>

      <div className="mb-5 grid h-full grid-rows-[auto_1fr_auto]">
        <ul className="flex flex-col gap-5">
          <li className="flex gap-1">
            {pokemonInfo.species.map((p, i) => (
              <img className="h-5" src={`/${p.toLowerCase()}.png`} key={p} />
            ))}
          </li>
          <li
            className={`${styles.rampart_one_regular} text-4xl font-semibold`}
          >
            {" "}
            {pokemonInfo?.name}
          </li>
        </ul>
        <div
          className={`mt-8 mb-5 flex flex-col items-center space-y-5 border-b border-gray-500`}
        >
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
        <div className="flex flex-col">
          <div className="items-cente flex justify-between">
            <Price price={pokemonInfo.regular_price} />
            <Discount discount={pokemonInfo.discount} />
          </div>
          <ResponsiveContainer width="100%" height="100%" minHeight="250px">
            <RadarChart
              data={[
                { subject: "攻擊力", A: pokemonInfo.attack },
                { subject: "防禦力", A: pokemonInfo.defense },
                { subject: "敏捷力", A: pokemonInfo.speed },
                { subject: "特攻", A: pokemonInfo.special_attack },
                { subject: "特防", A: pokemonInfo.special_defense },
                { subject: "HP", A: pokemonInfo.hp },
              ]}
              margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
              <PolarGrid stroke="#ccc" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 150]}
                tick={{ fontSize: 10 }}
              />

              <Radar
                name={pokemonInfo.name}
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
                strokeWidth={3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="place-self-end text-blue-600 hover:-translate-y-1 hover:bg-amber-500"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default PokemonDetails;
