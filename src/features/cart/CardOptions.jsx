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
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const currentQuantity = Array.from(cart).find((i) => {
    return i.id === id;
  })?.quantity;

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
            onClick={() => dispatch(increaseItemQuantity(id))}
            className="absolute right-[2rem] bottom-[1.2rem] flex cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-120 active:text-blue-600"
          >
            <BsCartPlus className="size-[1.5rem]" />
          </button>
          <button
            onClick={() => {
              if (currentQuantity === 1) {
                dispatch(deleteItem(id));
              } else {
                dispatch(decreaseItemQuantity(id));
              }
            }}
            className="absolute right-[5rem] bottom-[1.2rem] flex cursor-pointer justify-center transition-all hover:text-red-700 active:scale-80 active:text-red-600"
          >
            <BsCartDash className="size-[1.5rem]" />
          </button>
          <button
            className="absolute top-[13rem] right-[1rem] flex cursor-pointer justify-center text-red-500 hover:scale-110 active:scale-120"
            onClick={() => {
              dispatch(deleteItem(id));
            }}
          >
            <MdClear className="size-[2rem]" />
          </button>
        </>
      )}
      {!hasCartItem && (
        <button
          className="active:b absolute top-[12.5rem] right-6 cursor-pointer"
          onClick={() => {
            console.log(id);

            if (!hasCartItem) {
              dispatch(addItem(id));
            } else {
              dispatch(increaseItemQuantity(id));
            }

            console.log(currentQuantity);
          }}
        >
          <CgShoppingCart className="flex size-[3rem] cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-150" />
        </button>
      )}
    </>
  );
}

export default CardOptions;
