import axios from 'axios';

const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"

import pokemonTypes from '../data/pokemonTypes.json'

function SetupPokemonTypes (pokemon) {
  if (parseInt(pokemon.number) === 0){
    pokemon.types = ['flying', 'normal'];
  } else {
    axios
      .get('https://pokeapi.co/api/v2/pokemon-form/' + parseInt(pokemon.number))
      .then((response) => {
        pokemon.types = [];
        pokemon.imgSrc.types = [];
        response.data.types.forEach((t) => {
          pokemon.types.push(t.type.name);
          pokemon.imgSrc.types.push(typeImgURLTemplate + pokemonTypes.indexOf(t.type.name) + imgSuffixTemplate);
        });
      }).then(() => {

        if(pokemon.variants && parseInt(pokemon.number) !== 201){
          pokemon.variants.forEach((v) => {
            axios
              .get('https://pokeapi.co/api/v2/pokemon/' + v.imgVariantIndex)
              .then((response) => {
                v.types = [];
                v.imgSrc.types = [];
                response.data.types.forEach((t) => {
                  v.types.push(t.type.name);
                  v.imgSrc.types.push(typeImgURLTemplate + pokemonTypes.indexOf(t.type.name) + imgSuffixTemplate);
                });
              });
          });
        } else if(parseInt(pokemon.number) === 201){
          pokemon.variants.forEach((v) => {
            v.types = pokemon.types;
            v.imgSrc.types = pokemon.imgSrc.types;
          });
        }
      });

  }
}

export default SetupPokemonTypes;
