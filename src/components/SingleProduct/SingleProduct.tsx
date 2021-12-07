
import React from 'react';
// import { getProductsSelector } from '../../redux/slice/products.slice';
// import {  useSelector } from 'react-redux';

import  useHistory  from "react-router-dom";


interface ProductsListProps {
    imageSrc:any, name:String,price:Number,description:String
}

const SingleProduct : React.FC<ProductsListProps>=({ imageSrc, name,price,description }) => {
    // const products = useSelector(getProductsSelector)
    const history = useHistory;
    const handleClose=()=>{
        history.goBack();
    }
    return (

    
        <div className="SingleCard">
           
          
            <img alt="plants" src={imageSrc} />
            <p>{name}</p>
            <p>{price} KR</p>
            <p>{description}</p>
            
            <button onClick={handleClose}>X</button>
        </div>
    )
}



export default SingleProduct;

