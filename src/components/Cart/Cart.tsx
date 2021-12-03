import React from "react";
// import ProductInCart from "../ProductInCart/ProductInCart";
// import Bamboo from "../../images/bamboo.png";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { getCartProductSelector, getTotalPrice, removeFromCart } from "../../redux/slice/cart.slice";

const Cart :React.FC= () => {
  const cartProducts=useAppSelector(getCartProductSelector)
  const totalPrice=useAppSelector(getTotalPrice)
  const dispatch= useAppDispatch()

const handleRemoveFromCart =(productId:string)=> dispatch(removeFromCart(productId))

  return (<>
    <h2>Cart</h2>
    <h5>Total Price: {totalPrice}</h5>
    {cartProducts.map(product=>(
      <div key={product.id}>
        <span>Title:{product.name}</span>
        <span>Price:{product.price}</span>
        <span>Amount:{product.amount}</span>
        <button onClick={()=>handleRemoveFromCart(product.id)}>Remove from Cart</button>
      </div>
    ))}
    </>
    // <ProductInCart image={Bamboo} name={"Bamboo"} quantity={2} price={20} />
  );
};

export default Cart;
