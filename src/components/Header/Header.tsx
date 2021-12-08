import React from "react";
import { useState } from "react";
import SearchBar from "../search/SearchBar";
import "./Header.style.css";
import userIcon from "../../images/user.png";
import cart from "../../images/cart.png";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalCart, setOpenModalCart] = useState(false);
  return (
    <header className="header">
      <h1 className="title"> GreenLove 🌸 </h1>

      <nav>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
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
