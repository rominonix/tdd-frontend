
import React from 'react';
// import { getProductsSelector } from '../../redux/slice/products.slice';
// import {  useSelector } from 'react-redux';

import  useHistory  from "react-router-dom";


interface ProductsListProps {
    imageSrc:any, name:String,price:Number,description:String,closeModal:Boolean
}

const SingleProduct : React.FC<ProductsListProps>=({ imageSrc, name,price,description,closeModal }) => {
    // const products = useSelector(getProductsSelector)
    // const history = useHistory;
    // const handleClose=()=>{
    //     history.goBack();
    // }
    return (

    
        <div className="SingleCard">
           
          
            <img alt="plants" src={imageSrc} />
            <p>{name}</p>
            <p>{price} KR</p>
            <p>{description}</p>
            
            <button onClick={() => closeModal(false)} >X</button>
        </div>
    )
}



export default SingleProduct;


// interface Props {
//     closeModal: any;
//   }
  
//   const Login = ({ closeModal }: Props) => {
//     return (
//       <main className="modal">
//         <div className="login">
//           <h2>Sign in 🌵 </h2>
//           <hr />
//           <input type="text" placeholder="username" />
//           <input type="text" placeholder="password" />
  
//           <button>Login</button>
//         </div>
//         <button className="modal-close-button" onClick={() => closeModal(false)}>
//           <h4>X</h4>
//         </button>
//       </main>
//     );
//   };
  
//   export default Login;
