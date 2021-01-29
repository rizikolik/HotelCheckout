import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { CartContext } from "../../contexts/Cart/CartContext";
import {
  Wrapper,
  Headers,
  ItemsWrapper,
  ItemContainer,
  ItemDetails,
  Total,
} from "./Checkout.styles";

type CheckoutProps = {};

const CheckOut: React.FC<CheckoutProps> = () => {
  const { cartItems, increase, decrease, removeItem, sumCart } = useContext(
    CartContext
  );
  const { total } = sumCart();

  return (
    <Wrapper>
      <Headers>
        <span>Product</span>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Amount</span>
        <span>Remove</span>
      </Headers>
      <ItemsWrapper>
        {cartItems.map(item => {
          const { images, name, roomCount, quantity } = item;
          return (
            <ItemContainer key={item.hotelId} className="checkout-cart-preview">
              <img alt="checkout-images" src={images[0].url} />
              <ItemDetails>
                <span className="item">{name.split("[SANDBOX]").join("")}</span>
                <span className="item">
                  <span className="arrow" onClick={() => decrease(item)}>
                    &#10094;
                  </span>

                  {quantity}
                  <span className="arrow" onClick={() => increase(item)}>
                    &#10095;
                  </span>
                </span>
                <span className="item">$ {roomCount}</span>
                <span className="item">$ {roomCount * quantity}</span>
                <div
                  className="item remove-button"
                  onClick={() => removeItem(item)}
                >
                  &#10005;
                </div>
              </ItemDetails>
            </ItemContainer>
          );
        })}
      </ItemsWrapper>
      <Total>
        <span>TOTAL: ${total} </span>
      </Total>

      <Link to="/payment" style={{ width: "100%" }}>
        <Button title="Checkout Now" visible={true} />
      </Link>
    </Wrapper>
  );
};

export default CheckOut;
