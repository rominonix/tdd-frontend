import './SearchBar.style.css'
interface Props {
    searchValue: string,
    setSearchValue: (value: string) => void
}

const SearchBar = ({ searchValue, setSearchValue }: Props) =>{

    return (
        <div>

            <label>Search product: 🔎 </label>
            <input value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        </div>
    
    )
}


;


export default SearchBar;