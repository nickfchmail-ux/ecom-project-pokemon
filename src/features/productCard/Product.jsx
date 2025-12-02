import { getPokemons } from "@/services/apiCabins";
import { updateProductList } from "@/state/global/slices/cartSlice";
import Card from "@/ui/Card";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Product() {
  const [loadingDispatch, setLoadingDispatch] = useState("");
  const {
    isLoading,
    data: pokemons = [], // ← default to empty array
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getPokemons,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductList(pokemons));
  }, [isLoading]);

  const product = useSelector((state) => state.cart.productList);

  return (
    <>
      <h1 className="my-12 text-center text-5xl text-white drop-shadow-lg">
        Our Pokémon
      </h1>
      <div className="mx-auto grid w-[75vw] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card products={product} loading={isLoading} />
      </div>
    </>
  );
}

export default Product;
