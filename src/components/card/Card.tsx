import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store.hooks";
//import AddToCard from '../addToCard/AddToCard';
import { getProductsSelector, Product } from "../../redux/slice/products.slice";
import { addToCart } from "../../redux/slice/cart.slice";
import "./card.css";

interface ProductsListProps {}

const Card: React.FC<ProductsListProps> = ({}) => {
  const products = useSelector(getProductsSelector);
  const dispatch = useAppDispatch();
  const addToCartHandler = (product: Product) => dispatch(addToCart(product));
  return (
    <div className="SingleCard">
      {products.map((product) => (
        <div key={product.id}>
          <img alt="plants" src={product.imageSrc} />
          <p>{product.name}</p>
          <p>{product.price} KR</p>
          <button onClick={() => addToCartHandler(product)}>Add to cart</button>
          {/* <AddToCard /> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
