import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../../components/navbar/Navbar";
import { CartProvider } from "../../contexts/Cart/CartContext";
import WithSpinnnerHotelsWrapper from "../Hotel/HotelsWrapper";
import CheckOut from "../Checkout/Checkout";
import Payment from "../Payment/Payment";
function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={WithSpinnnerHotelsWrapper} />
            <Route path="/shop" component={""} />
            <Route exact path="/checkout" component={CheckOut} />
            <Route exact path="/payment" component={Payment} />
            {/*Auth Route will be written here later. */}
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
