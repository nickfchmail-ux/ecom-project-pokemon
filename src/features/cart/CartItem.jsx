import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "@/state/global/slices/cartSlice";
import Row from "@/ui/Row";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDecreaseItem() {
    if (quantity === 1) {
      dispatch(deleteItem(item.id));
      return;
    }

    dispatch(decreaseItemQuantity(item));
  }

  const cart = useSelector((state) => state.cart.cart);

  const currentQuantity = Array.from(cart).find((i) => {
    return i.id === item.id;
  })?.quantity;

  const hasCartItem = currentQuantity > 0;

  return (
    <Row>
      <p>
        <img src={item.image} alt="" />
      </p>
      <p>{item.name}</p>
      <p>{item.regular_price}</p>

      <p>{item.quantity}</p>
      <p className="font-semibold">{item.totalPrice}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(item))}
        className="active:text-blue-60 flex cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-120"
      >
        <BsCartPlus className="block size-[1.3rem]" />
      </button>
      <button
        onClick={() => {
          if (currentQuantity === 1) {
            dispatch(deleteItem(item.id));
          } else {
            dispatch(decreaseItemQuantity(item));
          }
        }}
        className="flex cursor-pointer justify-center transition-all hover:text-red-700 active:scale-80 active:text-red-600"
      >
        <BsCartDash className="size-[1.3rem]" />
      </button>
      <button
        className="flex cursor-pointer justify-center text-red-500 hover:scale-110 active:scale-50"
        onClick={() => {
          dispatch(deleteItem(item.id));
        }}
      >
        <MdClear className="size-[1.3rem]" />
      </button>
    </Row>
  );
}

export default CartItem;
