import { useAppSelector } from "../../store/store";

const CartBottom = () => {
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <div className="cart-total-price">
      Total: <span style={{ float: "right" }}>${totalPrice.toFixed(2)}</span>
    </div>
  );
};
export default CartBottom;
