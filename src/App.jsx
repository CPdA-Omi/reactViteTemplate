import { useState } from 'react'
import './App.css'

import PokemonCard from './components/PokemonCard.jsx'
const imgURLTemplate = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
const pokemonList = [
  {name: 'bulbasaur', imgSrc: imgURLTemplate + 1 + '.png'},
  {name: 'ivysaur', imgSrc: imgURLTemplate + 2 + '.png'},
  {name: 'venusaur', imgSrc: imgURLTemplate + 3 + '.png'},
  {name: 'charmender', imgSrc: imgURLTemplate + 4 + '.png'},
  {name: 'charmeleon', imgSrc: imgURLTemplate + 5 + '.png'},
  {name: 'charizard', imgSrc: imgURLTemplate + 6 + '.png'},
  {name: 'squirtle', imgSrc: imgURLTemplate + 7 + '.png'},
  {name: 'wartortle', imgSrc: imgURLTemplate + 8 + '.png'},
  {name: 'blastoise', imgSrc: imgURLTemplate + 9 + '.png'},
  {name: 'mew'},
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickDecrement = () => {
    if (pokemonIndex > 0){
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  const handleClickIncrement = () => {
    if (pokemonIndex < pokemonList.length - 1){
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  return (
    <>
      <div>
        {pokemonIndex > 0 ?
        <button onClick={handleClickDecrement}>Previous</button>
        :
        <button disabled>Previous</button>}
        
        {pokemonIndex < pokemonList.length -1 ?
        <button onClick={handleClickIncrement}>Next</button>
        :
        <button disabled>Next</button>}
      </div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </>
  )
}

export default App
