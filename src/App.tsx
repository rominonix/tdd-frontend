// import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchResult from './components/search/SearchResult';
import { Plant } from './module/Plant';
import Home from './screen/Home';
import bamboo from './images/bamboo.png'
import Hortensia from './images/Hortensia.png'
import Monstera from './images/Monstera.png'
import orchid from './images/orchid.png'
import snakePlant from './images/snake-plant.png'
import yaopon from './images/yaopon.png'

function App() {
  // const [searchText,setSearchText] =useState('')

  const plants: Plant[] = [
    {
      name:"Hortensia",
      price: 123,
      id:"001",
      imageSrc:Hortensia
    },
    {
      name:"Bamboo",
      price: 113,
      id:"002",
      imageSrc:bamboo
    },
    {
      name:"Monstera",
      price: 103,
      id:"003",
      imageSrc:Monstera
    },
    {
      name:"Orchid",
      price: 163,
      id:"004",
      imageSrc:orchid
    },
    {
      name:"Snake-plant",
      price: 153,
      id:"005",
      imageSrc:snakePlant
    },
    {
      name:"Yaopon",
      price: 123,
      id:"006",
      imageSrc:yaopon
    },
  ]
  // const filterSearchResult=plants.filter(plant=>plant.name.includes(searchText))
  


  return (
    <div className="App">
      <Header searchValue={''} setSearchValue={function (value: string): void {
        throw new Error('Function not implemented.');
      } } />
      <main>
        {/* <SearchResult plants={filterSearchResult} /> */}
        <Home  plants={plants}/>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
