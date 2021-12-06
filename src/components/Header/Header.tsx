import React from "react";
import SearchBar from "../search/SearchBar";
import "./Header.style.css";
import userIcon from "../../images/user.png";
import cart from "../../images/cart.png";
import Modal from '../Modal/Modal'
// import Cart from '../Cart/Cart'

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
  return (
    <header className="header">
      <h1 className="title"> GreenLove 🌸 </h1>

      <nav>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <img className="icon-login" src={userIcon} alt="" />
        <img className="icon-cart" src={cart} alt="" />
      </nav>
      <Modal/>
      {/* <Cart/> */}
    </header>
  );
};

export default Header;
