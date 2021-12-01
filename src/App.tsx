import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchResult from './components/search/SearchResult';
import { Plant } from './module/Plant';


function App() {
  const [searchText,setSearchText] =useState('')

  const plants:Plant[] = [
    {
      name:"Hortensia",
      id:"001"
    },
    {
      name:"Bamboo",
      id:"002"
    },
    {
      name:"Monstera",
      id:"003"
    },
    {
      name:"Orchid",
      id:"004"
    },
    {
      name:"Snake-plant",
      id:"005"
    }
  ]
  const filterSearchResult=plants.filter(plant=>plant.name.includes(searchText))
  


  return (
    <div className="App">
      <Header searchValue={searchText} setSearchValue={setSearchText}/>
      <main>
        <SearchResult plants={filterSearchResult} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
