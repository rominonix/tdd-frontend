import './App.css';
import Header from './components/Header/Header';
import Home from './screen/Home';


function App() {


  return (
    <div className="App">
      <Header searchValue={''} setSearchValue={function (value: string): void {
        throw new Error('Function not implemented.');
      } }  />
      <main>
        <Home   />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
