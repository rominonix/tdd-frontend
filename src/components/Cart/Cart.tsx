import React from "react";
import Card from "../card/Card";
import "./Cart.style.css";
// import { Plant } from '../module/Plant';

// interface Props {
//     plants:Plant[]
// }

const Cart = () => {
  return (
    <main className="cart">
      <h2>Order Summary</h2>
      <div className="order-sumary">
        <div className="product">
          <div className="single-product-in-cart">Single product</div>
          <div className="details">
            <h3>Name</h3>
            <div>quantity</div>
            <div>price</div>
            <div> 🗑️ </div>
          </div>
        </div>

        <div className="total">
            <h2>Total to pay</h2>
            <h2>Price SEK</h2>
            <button>Go Back</button>
            <button>Proceed to Checkout</button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
