import SetPokemonNames from './SetPokemonNames.jsx'
import SetupPokemonTypes from './SetupPokemonTypes.jsx'

function SetupPokemonList (pokemonList) {
  pokemonList.forEach((pokemon, index) => {

    if (index < 10){
      pokemon.number = '000' + index;
    } else if (index < 100){
      pokemon.number = '00' + index;
    } else if (index < 1000){
      pokemon.number = '0' + index;
    }

    pokemon.imgSrc = {sprites: {}};

    if (pokemon.variants){
      pokemon.variants.forEach((v) => {
        v.names = {};
        v.imgSrc = {sprites: {}};
      });
    }

    SetPokemonNames(pokemon);
    SetupPokemonTypes(pokemon);

  });
}

export default SetupPokemonList;
