import { convertCurrency } from "@/helper/helper";
import { useState } from "react";
import { useSelector } from "react-redux";
function Footer() {
  const cart = useSelector((state) => state.cart.cart);
  const [isPaymentClick, setIsPaymentClick] = useState(false);
  const totalPrice = cart.reduce((sum, order) => sum + order.totalPrice, 0);
  const totalQuantity = cart.reduce((sum, order) => sum + order.quantity, 0);

  return (
    <>
      <div className="footer flex items-start justify-between p-[1rem]">
        <div>
          <h1 className="block">
            總件數:<span>{totalQuantity}</span>
          </h1>
        </div>
        <div>
          <h1 className="block">
            <span className="text-blue-700">{convertCurrency(totalPrice)}</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
