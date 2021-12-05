import React from "react";
import { useSelector } from "react-redux";
import { getProductsSelector } from "../../redux/slice/products.slice";
import "./Product.style.css";

// interface ProductsListProps {
    
// }

// const ProductInCart: React.FC<ProductsListProps>= ({}) =>{
//   const products = useSelector(getProductsSelector)
  
//     return (
//       <main className="cart">
//         <h2 className="cart-summary">Order Summary</h2>
//         <div className="order-summary">
//           <div className="product">
//             <img src={image} alt="" />
//             <div className="details">
//               <h2>{name}</h2>
//               <h4>{price} SEK</h4>
//               <div className="quantity-grid">
//                 <p>➖</p> {/* on click to change quantity - 1 */}
//                 <p> {quantity}</p>
//                 <p>➕</p> {/* on click to change quantity + 1*/}
//               </div>
//               <p>🗑️</p>{/* on click delete product*/}
//             </div>
//           </div>
  
//           <div className="total">
//             <h2>Total to pay</h2>
//             <h2>{price} SEK</h2>
//             <button>Go Back</button>
//             <button>Proceed to Checkout</button>
//           </div>
//         </div>
//       </main>
//     );
//   )

// }

// export default ProductInCart
interface Prop {
  image: any;
  name: string;
  quantity: number;
  price: number;
}

const ProductInCart = ({ image, quantity, name, price }: Prop) => {
  return (
    <main className="cart">
      <h2 className="cart-summary">Order Summary</h2>
      <div className="order-summary">
        <div className="product">
          <img src={image} alt="" />
          <div className="details">
            <h2>{name}</h2>
            <h4>{price} SEK</h4>
            <div className="quantity-grid">
              <p>➖</p> {/* on click to change quantity - 1 */}
              <p> {quantity}</p>
              <p>➕</p> {/* on click to change quantity + 1*/}
            </div>
            <p>🗑️</p>{/* on click delete product*/}
          </div>
        </div>

        <div className="total">
          <h2>Total to pay</h2>
          <h2>{price} SEK</h2>
          <button>Go Back</button>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </main>
  );
};

export default ProductInCart;
