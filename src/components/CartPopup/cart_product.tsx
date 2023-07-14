import { deleteFromCart } from "../../store/reducers/cart";
import { useAppDispatch } from "../../store/store";
import CountButtons from "./count_buttons";

const CartProduct = ({ product, count }: CartProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-product">
      <div className="cart-product-image-container">
        <img className="cart-product-image" alt="" src={product.image} />
      </div>
      <div>
        <div className="cart-product-title">{product.title}</div>
        <CountButtons product={product} count={count} />
      </div>
      <div>
        <div
          onClick={() => dispatch(deleteFromCart({ product }))}
          className="cart-product-delete-button"
        >
          Delete
        </div>
        <div className="cart-product-price">
          ${(product.price * count).toFixed(2)}
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
