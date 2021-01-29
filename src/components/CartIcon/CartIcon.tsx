import React, { useContext } from "react";
import { BiCartAlt } from "react-icons/bi";
import { CartContext } from "../../contexts/Cart/CartContext";

const CartIcon = () => {
  const { sumCart, toggleShowCart } = useContext(CartContext);
  const { itemCount } = sumCart();

  return (
    <div onClick={toggleShowCart} style={{ width: "100%", cursor: "pointer" }}>
      <span>({itemCount}) Cart</span>
      <BiCartAlt />
    </div>
  );
};

export default CartIcon;
