import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import userIcon from "../../images/user.png";
import cart from "../../images/cart.png";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import SearchBar from "../search/SearchBar";
import "./Header.style.css";
// import SearchBar1 from "../search/SearchBar";
// import SearchBar1 from "../search/SearchBar";
// import SearchResult from '../search/SearchResult'
import {getProductsSelector} from '../../redux/slice/products.slice'

interface ProductsListProps {}

const Header:  React.FC<ProductsListProps>  = ({}) => {
  const products = useSelector(getProductsSelector)
 
 
  
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalCart, setOpenModalCart] = useState(false);
  return (
    <header className="header">
      <h1 className="title"> GreenLove 🌸 </h1>

      <nav>
        <div className="search-bar">

        <SearchBar data={products} />
        </div>
        <img
          className="icon-login"
          onClick={() => {
            setOpenModalLogin(true);
          }}
          src={userIcon}
          alt="Login"
        />
        
        <img
          className="icon-cart"
          onClick={() => {
            setOpenModalCart(true);
          }}
          src={cart}
          alt=""
        />
      </nav>
      {openModalLogin && <Login closeModal={setOpenModalLogin} />}
      {openModalCart && <Cart closeModal={setOpenModalCart}/>}
    </header>
  );
};

export default Header;
