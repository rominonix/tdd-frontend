
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store.hooks'
import { getProductsSelector, Product } from '../../redux/slice/products.slice';
import { addAvtiveCard } from '../../redux/slice/activeProduct.slice'
import { addToCart } from '../../redux/slice/cart.slice';
import './card.css'

interface ProductsListProps {
  setRenderComponent: any
}

const Card: React.FC<ProductsListProps> = ({ setRenderComponent }) => {
  const renderComponentHandler = (product: Product) => {
    setRenderComponent(true)
    dispatch(addAvtiveCard(product))
  }
  const products = useSelector(getProductsSelector)
  const dispatch = useAppDispatch()
  const addToCartHandler = (product: Product) => dispatch(addToCart(product))

  return (
    <div className="SingleCard">
      {products.map(product =>
        <div key={product.id} >
          <img alt="plants"  src={product.imageSrc} onClick={() => renderComponentHandler(product)} />
          <p>{product.name}</p>
          <p>{product.price} KR</p>
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
        </div>)}
    </div>
  );
};

export default Card;
