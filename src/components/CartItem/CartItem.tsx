/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import { CartItemWrapper, ItemDetails } from "./CartItem.styles";
type Image = {
  url: string;
};
interface CartItem {
  hotelId: string;
  name: string;
  images: Image[];
  roomCount: number;
  quantity?: number;
}
type CartProps = {
  item: CartItem;
  increaseItem: () => void;
  decreaseItem: () => void;
};
const CartItem: React.FC<CartProps> = ({
  item,
  increaseItem,
  decreaseItem,
}) => {
  const { images, quantity, roomCount, name } = item;

  return (
    <CartItemWrapper>
      <img alt="cart-preview" src={images[0].url} />
      <ItemDetails>
        <span>{name.split("[SANDBOX]").join("")}</span>

        <span>
          <span className="arrow" onClick={decreaseItem}>
            &#10094;
          </span>
          {quantity} x ${roomCount}
          <span className="arrow" onClick={increaseItem}>
            &#10095;
          </span>
        </span>
      </ItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;
