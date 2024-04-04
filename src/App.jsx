import { useState } from 'react'
import './App.css'
import './Types.css'
import { pokemonList } from './PokedexData.jsx'

import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  useState(() => {
    alert('Hello Pokemon trainer :)');
    }
  );

  const [pokemonIndex, setPokemonIndex] = useState(1);

  const handleClickDecrement = () => {
    if (pokemonIndex > 1){
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
      if (pokemonList[index].name === 'pikachu'){
        alert('Pika pikachu !!!');
      }
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
