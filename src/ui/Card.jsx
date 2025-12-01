import CardOptions from "@/features/cart/CardOptions";
import { deletePokemons } from "@/services/apiCabins";
import { updateProductList } from "@/state/global/slices/cartSlice";
import Discount from "@/ui/Discount";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Description from "./Description";
import Guest from "./Guest";
import Price from "./Price";
import ProductName from "./ProductName";
function Card({ products, loading }) {
  const { id: editID, ...editValue } = products;
  const dispatch = useDispatch();
  const isEditSession = Boolean(editID);

  const [editingID, setEditingID] = useState(null);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: deletePokemons,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryFn: ["pokemons"] });
      toast.success("Pokemon was successfully deleted");
    },
    onError: () => toast.error("Pokemon can not be deleted"),
  });

  useEffect(() => {
    dispatch(updateProductList(products));
  }, [loading]);

  return products.map((product) => (
    <div
      key={product.id} // ← IMPORTANT
      className="relative flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-50 w-full object-cover"
      />
      <div className="p-3">
        <ProductName name={product.name} />
        <Guest guest={product.maxCapacity} />
        <div className="mt-4 flex items-center justify-between">
          <Price price={product.regularPrice} font={"card"} />
          <Discount discount={product.discount} />
        </div>
        <Description description={product.description} />
      </div>
      <div className="m-5 flex list-none justify-between align-top">
        <CardOptions id={product.id} />
      </div>
    </div>
  ));
}

export default Card;
