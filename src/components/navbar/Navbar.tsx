import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Wrap, NavbarElement, NavbarLink } from "./navbar.styles";
import { CartContext } from "../../contexts/Cart/CartContext";
import CartIcon from "../CartIcon/CartIcon";

import CartDropDown from "../CartDropdown/CartDropDown";
const Navbar: React.FC = () => {
  const { showCart } = useContext(CartContext);
  console.log(showCart);
  return (
    <Wrap>
      <NavbarElement style={{ justifyContent: "flex-start" }}>
        <NavbarLink>
          <Link to="/">Home</Link>
        </NavbarLink>
      </NavbarElement>
      <NavbarElement>
        <NavbarLink>
          <CartIcon />
        </NavbarLink>
      </NavbarElement>
      {showCart ? <CartDropDown /> : null}
    </Wrap>
  );
};

export default Navbar;
