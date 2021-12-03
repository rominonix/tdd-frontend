import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";
import Bamboo from "../../images/bamboo.png";

const Cart = () => {
  return (
    <ProductInCart image={Bamboo} name={"Bamboo"} quantity={2} price={20} />
  );
};

export default Cart;
