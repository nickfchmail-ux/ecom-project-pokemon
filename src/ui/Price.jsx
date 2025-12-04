import { convertCurrency } from "@/helper/helper";
import { memo } from "react";

function Price({ price, font }) {
  return (
    <p
      className={`${font === "card" ? "text-[1.5rem]" : "text-[.8rem]"} font-bold text-green-600`}
    >
      {convertCurrency(price)}
    </p>
  );
}

export default memo(Price);
