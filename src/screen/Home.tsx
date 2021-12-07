import React from "react";
import Card from "../components/card/Card";
import Cart from '../components/Cart/Cart'

interface ProductsListProps {}

const Home: React.FC<ProductsListProps> = ({}) => {
  return (
    <div>
      <Cart/>
      <Card />
    </div>
  );
};

export default Home;
