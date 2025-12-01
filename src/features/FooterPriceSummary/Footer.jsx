import { convertCurrency } from "@/helper/helper";
import { useState } from "react";
import { useSelector } from "react-redux";
import Payment from "../Payment/Payment";
import PaymentWindow from "../Payment/PaymentWindow";
function Footer() {
  const cart = useSelector((state) => state.cart.cart);
  const [isPaymentClick, setIsPaymentClick] = useState(false);
  const totalPrice = cart.reduce((sum, order) => sum + order.totalPrice, 0);
  const totalQuantity = cart.reduce((sum, order) => sum + order.quantity, 0);

  return (
    <>
      <div className="flex items-start justify-between p-[1rem]">
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
      <Payment
        setIsPaymentClick={setIsPaymentClick}
        isPaymentClick={isPaymentClick}
      >
        {isPaymentClick && (
          <PaymentWindow>
            <button onClick={() => setIsPaymentClick(!isPaymentClick)}>
              Submit
            </button>
          </PaymentWindow>
        )}
      </Payment>
    </>
  );
}

export default Footer;
