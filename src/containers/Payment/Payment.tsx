import React, { useContext } from "react";
import PaymentForm from "../../components/Form/PaymentForm";
import { PaymentContainer } from "./Payment.styles";
import { CartContext } from "../../contexts/Cart/CartContext";
const Payment = () => {
  const { sumCart } = useContext(CartContext);
  const { total } = sumCart();
  return (
    <PaymentContainer>
      <PaymentForm amount={total} submit={e => console.log(e)} />
    </PaymentContainer>
  );
};
export default Payment;
