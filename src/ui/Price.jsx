import { convertCurrency } from "@/helper/helper";

function Price({ price, font }) {
  return (
    <p
      className={`${font === "card" ? "text-[1.5rem]" : "text-[.8rem]"} font-bold text-green-600`}
    >
      {convertCurrency(price)}
    </p>
  );
}

export default Price;
