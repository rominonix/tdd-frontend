import "./SearchBar.style.css";
import { useState } from "react";
interface ProductsListProps {
  data: any;
}

const SearchBar: React.FC<ProductsListProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handlerFilter = (e: { target: { value: any } }) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value: { name: string }) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="input-section">
        <input
          className="input-search"
          type="text"
          value={wordEntered}
          placeholder="Search plants..."
          onChange={handlerFilter}
        />
        <div className="button-search">
          {filteredData.length === 0 ? (
            <p>🔎</p>
          ) : (
            <p onClick={clearInput}> ✖️ </p>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="search-result">
          {filteredData.map((value: { name: any; key: any }) => {
            return <p key={data.id}>{value.name}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
