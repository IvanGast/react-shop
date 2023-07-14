import { useState } from "react";
import { useAppSelector } from "../../store/store";
import CartBottom from "../CartPopup/cart_bottom";
import CartProductList from "../CartPopup/cart_product_list";

const Cart = () => {
  const count = useAppSelector((state) => state.cart.totalCount);
  const [show, setShow] = useState("none");

  const toggleMenu = () => {
    if (show === "none") {
      setShow("inline-block");
    } else {
      setShow("none");
    }
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-button" onClick={() => toggleMenu()}>
        Cart({count})
      </div>
      <div className="cart-container" style={{ display: show }}>
        <CartProductList />
        <div className="cart-line"></div>
        <CartBottom />
      </div>
    </div>
  );
};
export default Cart;
