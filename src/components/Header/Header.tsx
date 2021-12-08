import React from "react";
import { useState } from "react";
import SearchBar from "../search/SearchBar";
import "./Header.style.css";
import userIcon from "../../images/user.png";
import cart from "../../images/cart.png";
import Modal from '../Modal/Modal'
import Login from '../Login/Login'
// import Cart from '../Cart/Cart'

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="header">
      <h1 className="title"> GreenLove 🌸 </h1>

      <nav>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <img
          className="icon-login"
          onClick={() => {
            setOpenModal(true);
          }}
          src={userIcon}
          alt="Login"
          
        />
        <img className="icon-cart" src={cart} alt="" />
      </nav>
      {openModal && <Login closeModal={setOpenModal}/>}
      {/* <Cart/> */}
    </header>
  );
};

export default Header;
