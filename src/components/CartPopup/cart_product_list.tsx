import { useAppSelector } from "../../store/store";
import CartProduct from "./cart_product";

const CartProductList = () => {
  const products = useAppSelector((state) => state.cart.products);
  const productCounts = useAppSelector((state) => state.cart.productCounts);

  return (
    <div className="cart-product-container">
      {products.map((product, ix) => (
        <CartProduct product={product} count={productCounts[ix]} key={ix} />
      ))}
    </div>
  );
};
export default CartProductList;
