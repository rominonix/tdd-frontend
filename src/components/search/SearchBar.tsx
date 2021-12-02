import "./SearchBar.style.css";
interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: Props) => {
  return (
    <div className="search">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="button-search">🔎 Search </button>
    </div>
  );
};

export default SearchBar;
