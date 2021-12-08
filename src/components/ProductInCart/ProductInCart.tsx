import React from "react";

import "./Product.style.css";

import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import {
  getCartProductSelector,
  removeFromCart,
} from "../../redux/slice/cart.slice";

const ProductInCart: React.FC = () => {
  const cartProducts = useAppSelector(getCartProductSelector);
  const dispatch = useAppDispatch();

  const handleRemoveFromCart = (productId: string) =>
    dispatch(removeFromCart(productId));

  return (
    <>
      <main className="product-in-cart">
        <h3 className="cart-summary">Order Summary</h3>
        <div className="order-summary">
          {cartProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imageSrc} alt="" />
              <div className="details">
                <h3>{product.name}</h3>
                <h4>{product.price} SEK</h4>
                <p>Amount:{product.amount}</p>
                <span
                  className="button-delete"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  🗑️
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProductInCart;
