import Description from "@/ui/Description";
import Discount from "@/ui/Discount";
import Image from "@/ui/Image";
import Loader from "@/ui/Loader";
import Price from "@/ui/Price";
import ProductName from "@/ui/ProductName";
import { memo } from "react";
import CardOptions from "../cart/CardOptions";
function Card({ product }) {
  if (!product?.pokemons_selling?.regular_price) return <Loader />;

  return (
    <div className="relative flex w-full flex-col place-items-center overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl">
      <Image url={product.image} id={product.id} />
      <div className="flex w-full flex-col items-start p-3">
        <ProductName name={product.name} />

        <div className="mt-4 flex w-full items-center justify-between">
          <Price
            price={product.pokemons_selling?.regular_price}
            font={"card"}
          />
          <Discount discount={product.pokemons_selling?.discount} />
        </div>
        <Description description={product.descriptions.at(0)} />
      </div>
      <div className="m-5 flex list-none justify-between align-top">
        <CardOptions id={product.id} />
      </div>
    </div>
  );
}

export default memo(Card);
