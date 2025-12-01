import { addItem } from "@/state/global/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function item({ productName, productPrice, URL }) {
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(addItem({ productName, productPrice, quantity: 1 }));
  }

  return (
    <Link to={`${productName}?price=${[productPrice]}`}>
      <div className="h-sm flex h-[150px] list-none gap-4 bg-pink-200">
        <img src="https://picsum.photos/100/100" className="h-[30px]" />
        <div className="flex flex-col">
          <li>{productPrice}</li>
          <h1 className="">{productName}</h1>
          <button
            className="py-.5 rounded-full bg-amber-500 px-1 hover:bg-amber-300"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default item;
