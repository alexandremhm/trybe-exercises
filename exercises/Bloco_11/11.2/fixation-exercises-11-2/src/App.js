import './App.css'
import Pokemons from './data.js'
import Pokedex from './Pokedex.js'

function App() {
  return (
    <div className='App'>
      <Pokedex pokeList={Pokemons} />
    </div>
  );
}

export default App;
