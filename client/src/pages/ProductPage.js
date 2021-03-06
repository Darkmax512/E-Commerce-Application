import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetails from "../components/products/ProductDetails";

export default function ProductPage() {
  const productId = useParams();
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user);
  const product = products.find((item) => item._id === productId.id);
  return <>{product && <ProductDetails user={user} product={product} />}</>;
}
