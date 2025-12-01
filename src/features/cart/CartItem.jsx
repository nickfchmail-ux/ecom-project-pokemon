import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "@/state/global/slices/cartSlice";
import Row from "@/ui/Row";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
function CartItem({
  id,
  productName,
  productPrice,
  quantity,
  totalPrice,
  image,
}) {
  console.log(`Total Price: ${totalPrice}`);

  const dispatch = useDispatch();

  function handleDecreaseItem() {
    if (quantity === 1) {
      dispatch(deleteItem(id));
      return;
    }

    dispatch(decreaseItemQuantity(id));
  }

  const cart = useSelector((state) => state.cart.cart);

  const currentQuantity = Array.from(cart).find((i) => {
    return i.id === id;
  })?.quantity;

  const hasCartItem = currentQuantity > 0;

  return (
    <Row>
      <p>
        <img src={image} alt="" />
      </p>
      <p>{productName}</p>
      <p>{productPrice}</p>

      <p>{quantity}</p>
      <p className="font-semibold">{totalPrice}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(id))}
        className="active:text-blue-60 flex cursor-pointer justify-center transition-all hover:text-blue-700 active:scale-120"
      >
        <BsCartPlus className="block size-[1.3rem]" />
      </button>
      <button
        onClick={() => {
          if (currentQuantity === 1) {
            dispatch(deleteItem(id));
          } else {
            dispatch(decreaseItemQuantity(id));
          }
        }}
        className="flex cursor-pointer justify-center transition-all hover:text-red-700 active:scale-80 active:text-red-600"
      >
        <BsCartDash className="size-[1.3rem]" />
      </button>
      <button
        className="flex cursor-pointer justify-center text-red-500 hover:scale-110 active:scale-50"
        onClick={() => {
          dispatch(deleteItem(id));
        }}
      >
        <MdClear className="size-[1.3rem]" />
      </button>
    </Row>
  );
}

export default CartItem;
