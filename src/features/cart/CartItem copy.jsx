import {
  decreaseItemQuantity,
  deleteItem,
} from "@/state/global/slices/cartSlice";
import Row from "@/ui/Row";
import { useDispatch } from "react-redux";
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

  return (
    <Row>
      <p>
        <img src={image} alt="" />
      </p>
      <p>{productName}</p>
      <p>{productPrice}</p>

      <p>{quantity}</p>
      <p>{totalPrice}</p>
    </Row>
  );
}

export default CartItem;
