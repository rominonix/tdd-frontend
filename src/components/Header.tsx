import SearchBar from "./search/SearchBar";
import React from 'react';

interface Props {
    searchValue: string,
    setSearchValue: (value: string) => void
}

function Header({searchValue, setSearchValue}:Props) {
    return (
        <header>
            <h1>Learn react</h1>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        </header>
    );
}

export default Header;