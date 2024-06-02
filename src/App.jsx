import { useState, useEffect } from 'react'
import './App.css'
import './Types.css'

import { pokemonList, regionalFormsNumber } from './scripts/PokedexData.jsx'

import PokeLoad from './components/PokeLoad.jsx'
import StatsDisplay from './components/StatsDisplay.jsx'
import PokemonCard from './components/PokemonCard.jsx'
import SettingsMenu from './components/SettingsMenu.jsx'
import NavBar from './components/NavBar.jsx'

const defaultPokemonDisplayed = 1;
const languages = ['EN', 'FR', 'DE', 'JA'];

function App() {
  
  const [language, setLanguage] = useState('EN');

  const handleClickLanguageSwitch = () => {
    if (languages.indexOf(language) !== languages.length -1){
      setLanguage(languages[languages.indexOf(language) + 1]);
    } else {
      setLanguage(languages[0]);
    }
  }

  const [pokemonVariant, setPokemonVariant] = useState(-1);

  const handleClickVariant = (variantIndex) => {
    if (pokemonVariant !== variantIndex){
      setPokemonVariant(variantIndex);
    }
  }

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickDecrement = () => {
    if (pokemonIndex > 1){
      if (!pokemonList[pokemonIndex - 1].variants || (pokemonList[pokemonIndex - 1].variants.length)-1 < pokemonVariant){
        setPokemonVariant(-1);
      }
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  const handleClickIncrement = () => {
    if (pokemonIndex < pokemonList.length - 1){
      if (!pokemonList[pokemonIndex + 1].variants || (pokemonList[pokemonIndex + 1].variants.length)-1 < pokemonVariant){
        setPokemonVariant(-1);
      }
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  const handleClickIndex = (index) => {
    if (index === undefined){
      index = pokemonIndex;
    }

    if (!pokemonList[index].variants || (pokemonList[index].variants.length)-1 < pokemonVariant){
      setPokemonVariant(-1);
    }
    setPokemonIndex(index);
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPokemonIndex(defaultPokemonDisplayed);
    setTimeout(() => {
      setIsLoading(false);
    }, pokemonList.length * 40);
  },[]);

  return (
    <>
      {isLoading ?
        <PokeLoad />
      :
      <>
        {/*<StatsDisplay
        pokemonListLength={pokemonList.length}
        regionalFormsNumber={regionalFormsNumber}
        languagesSet={languages.length}
        />*/}
        <div className="topNav">
          <NavBar
          pokemonIndex={pokemonIndex}
          pokemonListLength={pokemonList.length}
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
        handleClickIndex={handleClickIndex}
        pokemonVariant={pokemonVariant}
        handleClickVariant={handleClickVariant}
        />
      </>
      }
    </>
  );
}

export default App
