
import React from 'react';
import {  useSelector } from 'react-redux';
import AddToCard from '../addToCard/AddToCard';
import { getProductsSelector } from '../../redux/slice/products.slice';
import './card.css'



interface ProductsListProps {
    
}

const Card : React.FC<ProductsListProps>=({  }) => {
    const products = useSelector(getProductsSelector)

    return (

    
        <div className="SingleCard">
           {products.map(product=> <div key ={product.id}>
            <img alt="plants" src={product.imageSrc} />
            <p>{product.name}</p>
            <p>{product.price} KR</p>
            <AddToCard />
            </div>)}
            




        </div>
    )
}



export default Card;


