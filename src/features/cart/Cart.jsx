import EmptyCard from "@/pages/EmptyCard";
import Form from "@/ui/Form";
import Row from "@/ui/Row";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function Cart() {
  const { cart } = useSelector((state) => state.cart);

  const hasCartItem = cart.length > 0;
  console.log(JSON.stringify(cart));
  return hasCartItem ? (
    <>
      <div className="divide-y-5 divide-stone-200">
        <Form>
          <Row>
            <h1></h1>
            <h1>名稱</h1>
            <h1>價錢</h1>
            <h1>件數</h1>
            <h1>合計</h1>
            <h1></h1>
          </Row>
          {cart.map((item) => (
            <CartItem
              id={item.id}
              productName={item.name}
              productPrice={item.pokemons_selling.regular_price}
              totalPrice={item.totalPrice}
              quantity={item.quantity}
              image={item.image}
            />
          ))}
        </Form>
      </div>
    </>
  ) : (
    <EmptyCard />
  );
}

export default Cart;
