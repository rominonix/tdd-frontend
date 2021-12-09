import React from "react";
import Card from "../components/card/Card";
// import SearchResult from '../components/search/SearchResult'
// import SearchBar from '../components/search/SearchBar'
// import { useSelector } from "react-redux";

// import {getProductsSelector} from '../redux/slice/products.slice'

interface ProductsListProps {}

const Home: React.FC<ProductsListProps> = ({}) => {

  // const products = useSelector(getProductsSelector)
  return (
    <div>
       {/* <SearchBar data={products} /> */}
      <Card />
    </div>
  );
};

export default Home;
