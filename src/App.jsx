import { useState } from 'react'
import './App.css'
import './Types.css'
import { pokemonList } from './PokedexData.jsx'

import SettingsMenu from './components/SettingsMenu.jsx'
import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  /*useState(() => {
    alert('Hello Pokemon trainer :)');
    }
  );*/

  const [language, setLanguage] = useState('EN');

  const handleClickLanguageSwitch = () => {
    if (language === 'EN'){
      setLanguage('FR');
    } else {
      setLanguage('EN');
    }
  }

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
      <div className="topNav">
        <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        handleClickDecrement={handleClickDecrement}
        handleClickIncrement={handleClickIncrement}
        handleClickIndex={handleClickIndex}
        />

        <SettingsMenu
        language={language}
        handleClickLanguageSwitch={handleClickLanguageSwitch}
        />
      </div>

      <PokemonCard
      pokemon={pokemonList[pokemonIndex]}
      language={language}
      />
    </>
  )
}

export default App
