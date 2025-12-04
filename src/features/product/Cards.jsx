import { memo } from "react";
import Loader from "../../ui/Loader";
import Card from "./Card";
function Cards({ products = [], loading }) {
  if (!products.length) return <Loader />;

  return products.map((product) => (
    <Card product={product} key={product.name} />
  ));
}

export default memo(Cards);
