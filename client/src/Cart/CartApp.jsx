import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const CartApp = () => {
  const cart = useSelector((state) => state.cartSlice);
  console.log(cart);
  return (
    <div>
      <Cart />
      <div className="m-5">
        <p>total: {cart.total} euros</p>
      </div>
    </div>
  );
};

export default CartApp;
