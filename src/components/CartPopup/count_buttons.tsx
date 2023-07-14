import {
  decrementProductCount,
  incrementProductCount,
} from "../../store/reducers/cart";
import { useAppDispatch } from "../../store/store";

const CountButtons = ({ product, count }: CartProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span
        onClick={() => dispatch(decrementProductCount({ product }))}
        className="cart-product-count-button"
      >
        -
      </span>
      <span className="cart-product-count">{count}</span>
      <span
        onClick={() => dispatch(incrementProductCount({ product }))}
        className="cart-product-count-button"
      >
        +
      </span>
    </div>
  );
};
export default CountButtons;
