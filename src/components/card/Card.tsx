
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store.hooks'
//import AddToCard from '../addToCard/AddToCard';
import { getActiveProduct, getProductsSelector, Product } from '../../redux/slice/products.slice';
import { addToCart } from '../../redux/slice/cart.slice';
import './card.css'
import SingleProduct from '../SingleProduct/SingleProduct';




interface ProductsListProps {

}

const Card: React.FC<ProductsListProps> = ({ }) => {

    const [renderComponent, setRenderComponent] = useState(false)
    const renderComponentHandler = (id: string) => {
        setRenderComponent(true)
        dispatch(getActiveProduct(id))
    }



    const products = useSelector(getProductsSelector)
    const dispatch = useAppDispatch()
    const addToCartHandler = (product: Product) => dispatch(addToCart(product))
    return (


        <div className="SingleCard">
            {products.map(product =>
                <div key={product.id}>
                    <img alt="plants" src={product.imageSrc} onClick={() => renderComponentHandler(product.id)} />
                    <p>{product.name}</p>
                    <p>{product.price} KR</p>
                    <button onClick={() => addToCartHandler(product)}>Add to cart</button>
                    {/* <AddToCard /> */}

                    {renderComponent ? <SingleProduct imageSrc={product.imageSrc} name={product.name} price={product.price} description={product.description} closeModal={}/> : null}
                </div>)}





        </div>
    )
}



export default Card;



