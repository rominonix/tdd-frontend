import React from "react";
import SearchBar from "../search/SearchBar";
import "./Header.style.css";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Header = ({ searchValue, setSearchValue }: Props) => {
  return (
    <header className="header">
      <h1> GreenLove 🌸 🌵 🌱  </h1>
    
      <nav>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <ul>
          <li>login 😎 </li>
          <li>cart 🛒 🧺 🛍️</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
