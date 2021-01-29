import React, { useState, createContext } from "react";
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

export interface CartContextData {
  cartItems: CartItem[];
  showCart: boolean;
  addItem: (item: CartItem) => void;
  increase: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  decrease: (item: CartItem) => void;
  toggleShowCart: () => void;
  sumCart: () => { itemCount: any; total: any };
}
const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
export const cartItemsContextDefaultValue: CartContextData = {
  cartItems: storage,
  showCart: false,
  addItem: () => null,
  removeItem: () => null,
  increase: () => null,
  decrease: () => null,
  toggleShowCart: () => null,
  sumCart: () => null,
};

export const CartContext = createContext<CartContextData>(
  cartItemsContextDefaultValue
);

export const CartProvider = props => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const SetStorage = cartItems => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

  const addItem = (item: CartItem) => {
    if (!cartItems.find(ele => ele.hotelId === item.hotelId)) {
      item.quantity = 1;
      return setCartItems(cartItems => [...cartItems, item]);
    } else {
      return increase(item);
    }
  };
  const increase = (item: CartItem) => {
    cartItems[cartItems.findIndex(ele => ele.hotelId === item.hotelId)]
      .quantity++;
    const newCartItems = [...cartItems];

    return setCartItems(newCartItems);
  };
  const decrease = (item: CartItem) => {
    if (item.quantity === 1) {
      return removeItem(item);
    }

    cartItems[cartItems.findIndex(ele => ele.hotelId === item.hotelId)]
      .quantity--;
    const newCartItems = [...cartItems];

    return setCartItems(newCartItems);
  };

  const removeItem = (item: CartItem) => {
    const newCartItems = cartItems.filter(ele => ele.hotelId !== item.hotelId);

    return setCartItems(newCartItems);
  };
  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  const sumCart = () => {
    SetStorage(cartItems);
    let itemCount = cartItems.reduce(
      (total, hotel) => total + hotel.quantity,
      0
    );
    let total = cartItems
      .reduce((total, hotel) => total + hotel.roomCount * hotel.quantity, 0)
      .toFixed(2);
    return { itemCount, total };
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        showCart,
        addItem,
        decrease,
        increase,
        toggleShowCart,
        sumCart,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
