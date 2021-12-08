import "./SearchBar.style.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store.hooks";
//import AddToCard from '../addToCard/AddToCard';
import { getProductsSelector, Product } from "../../redux/slice/products.slice";


const SearchBar1 = () => {
 const products = useSelector(getProductsSelector)
 const productName = products.map(product =>{
  return product.name })
   
console.log(productName);

  return (
    <div className="search">
    
     
    </div>
  );
}
 
export default SearchBar1
// interface Props {
//   searchValue: string;
//   setSearchValue: (value: string) => void;
// }

// const SearchBar = ({ searchValue, setSearchValue }: Props) => {
//   return (
//     <div className="search">
//       <input
//         value={searchValue}
//         onChange={(event) => setSearchValue(event.target.value)}
//       />
//       <button className="button-search">🔎 Search </button>
//     </div>
//   );
// };

// export default SearchBar