import React, { useContext } from "react";
import { Button } from "../Button/Button";
import OutsideClickHandler from "react-outside-click-handler";
import { CartContext } from "../../contexts/Cart/CartContext";
import { DropDownContainer } from "./CartDropDown.styles";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const CartDropDown = () => {
  const {
    cartItems,
    showCart,
    toggleShowCart,
    increase,
    decrease,
  } = useContext(CartContext);

  const increaseItem = item => {
    increase(item);
  };
  const decreaseItem = item => {
    decrease(item);
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        return showCart ? toggleShowCart() : null;
      }}
    >
      <DropDownContainer>
        <div className="cart-items">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map(item => {
              return (
                <CartItem
                  key={item.hotelId}
                  increaseItem={() => increaseItem(item)}
                  decreaseItem={() => decreaseItem(item)}
                  item={item}
                />
              );
            })
          ) : (
            <span className="empty-cart-message">Your Cart is Empty</span>
          )}
        </div>

        <Link to="/checkout">
          <Button title="Checkout Now" visible={true} />
        </Link>
      </DropDownContainer>
    </OutsideClickHandler>
  );
};

export default CartDropDown;
