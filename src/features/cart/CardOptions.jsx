import usePokemon from "@/hooks/pokemonData";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "@/state/global/slices/cartSlice";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function CardOptions({ id }) {
  const { pokemon, isLoadingPokemon, error } = usePokemon();

  if (isLoadingPokemon) return <Loader />;

  const selectedPokemon = pokemon?.filter((poke) => poke.id === id).at(0);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const currentQuantity = Array.from(cart)
    .filter((i) => i.id === id)
    .at(0)?.quantity;

  const hasCartItem = currentQuantity > 0;

  return (
    <>
      {hasCartItem && (
        <>
          <p className="absolute bottom-[1.2rem] left-[1rem]">
            <span className="font-semibold text-blue-700">
              {currentQuantity}
            </span>{" "}
            件
          </p>
          <button
            onClick={() => dispatch(increaseItemQuantity(selectedPokemon))}
            className="absolute right-[2rem] bottom-[1.2rem] flex cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-120 active:text-blue-600"
          >
            <BsCartPlus className="size-[1.5rem]" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (currentQuantity === 1) {
                dispatch(deleteItem(id));
              } else {
                dispatch(decreaseItemQuantity(selectedPokemon));
              }
            }}
            className="absolute right-[5rem] bottom-[1.2rem] flex cursor-pointer justify-center transition-all hover:text-red-700 active:scale-80 active:text-red-600"
          >
            <BsCartDash className="size-[1.5rem]" />
          </button>
          <button
            className="absolute top-[13rem] right-[1rem] flex cursor-pointer justify-center text-red-500 hover:scale-110 active:scale-120"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteItem(id));
            }}
          >
            <MdClear className="size-[2rem]" />
          </button>
        </>
      )}
      {!hasCartItem && (
        <button
          className="absolute top-[12.5rem] right-6 z-1 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            console.log(`cart pokemon:${pokemon}`);
            console.log(`current quantity: ${currentQuantity}`);
            if (!hasCartItem) {
              dispatch(addItem(selectedPokemon));
            } else {
              dispatch(increaseItemQuantity(selectedPokemon));
            }
          }}
        >
          <CgShoppingCart className="flex size-[3rem] cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-150" />
        </button>
      )}
    </>
  );
}

export default CardOptions;
