import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
function ProductDetail() {
  const navigate = useNavigate();
  const { item } = useParams();

  return (
    <>
      <div className={styles.productDetail}>
        <h2>Product Detail Page</h2>

        <p>This is the detail page for the selected product - {item}.</p>
      </div>

      <button
        onClick={() => {
          navigate("/product");
        }}
      >
        Back
      </button>
    </>
  );
}

export default ProductDetail;
