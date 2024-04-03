import { useState } from 'react'
import './App.css'

import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'

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
  {name: 'caterpie', imgSrc: imgURLTemplate + 10 + '.png'},
  {name: 'metapod', imgSrc: imgURLTemplate + 11 + '.png'},
  {name: 'butterfree', imgSrc: imgURLTemplate + 12 + '.png'},
  {name: 'weedle', imgSrc: imgURLTemplate + 13 + '.png'},
  {name: 'kakuna', imgSrc: imgURLTemplate + 14 + '.png'},
  {name: 'beedrill', imgSrc: imgURLTemplate + 15 + '.png'},
  {name: 'pigdey', imgSrc: imgURLTemplate + 16 + '.png'},
  {name: 'pidgeotto', imgSrc: imgURLTemplate + 17 + '.png'},
  {name: 'pidgeot', imgSrc: imgURLTemplate + 18 + '.png'},
  {name: 'rattata', imgSrc: imgURLTemplate + 19 + '.png'},
  {name: 'raticate', imgSrc: imgURLTemplate + 20 + '.png'},
  {name: 'spearow', imgSrc: imgURLTemplate + 21 + '.png'},
  {name: 'fearow', imgSrc: imgURLTemplate + 22 + '.png'},
  {name: 'ekans', imgSrc: imgURLTemplate + 23 + '.png'},
  {name: 'arbok', imgSrc: imgURLTemplate + 24 + '.png'},
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

  const handleClickIndex = (index) => {
    if (pokemonIndex !== index){
      setPokemonIndex(index);
    }
  }

  return (
    <>
      <NavBar
      pokemonIndex={pokemonIndex}
      pokemonList={pokemonList}
      handleClickDecrement={handleClickDecrement}
      handleClickIncrement={handleClickIncrement}
      handleClickIndex={handleClickIndex}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </>
  )
}

export default App
