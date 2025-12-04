import { increaseItemQuantity } from "@/state/global/slices/cartSlice";
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

function IncreaseButton({ item }) {
  return (
    <button
      onClick={() => dispatch(increaseItemQuantity(item))}
      className="absolute right-[2rem] bottom-[1.2rem] flex cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-120 active:text-blue-600"
    >
      <BsCartPlus className="size-[1.5rem]" />
    </button>
  );
}

export default IncreaseButton;
