import React from "react";
import ProductInCart from "../ProductInCart/ProductInCart";
import "./Cart.style.css";
import { useAppSelector } from "../../redux/store.hooks";
import { getTotalPrice } from "../../redux/slice/cart.slice";

interface Props {
  closeModal: any;
}

const Cart = ({ closeModal }: Props) => {
  const totalPrice = useAppSelector(getTotalPrice);
  // const dispatch= useAppDispatch()
  // const handleRemoveFromCart =(productId:string)=> dispatch(removeFromCart(productId))
  return (
    <main className="cart">
      <button className='close-cart' onClick={() => closeModal(false)}>

      <h4 >X</h4>
      </button>
      <ProductInCart />
      <div className="total">
        <h2>Total Price</h2>
        <h2>{totalPrice} SEK</h2>
      </div>
    </main>
  );
};

export default Cart;

// const Cart :React.FC= () => {
//   const cartProducts=useAppSelector(getCartProductSelector)
//   const totalPrice=useAppSelector(getTotalPrice)
//   const dispatch= useAppDispatch()

// const handleRemoveFromCart =(productId:string)=> dispatch(removeFromCart(productId))

//   return (<>
//     <h2>Cart</h2>
//     <h5>Total Price: {totalPrice}</h5>
//     {cartProducts.map(product=>(
//       <div key={product.id}>
//         <span>Title:{product.name}</span>
//         <span>Price:{product.price}</span>
//         <span>Amount:{product.amount}</span>
//         <button onClick={()=>handleRemoveFromCart(product.id)}>Remove from Cart</button>
//       </div>
//     ))}
//     </>
//     // <ProductInCart image={Bamboo} name={"Bamboo"} quantity={2} price={20} />
//   );
// };

// export default Cart;
