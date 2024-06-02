import axios from 'axios';

const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"

import pokemonTypes from '../data/pokemonTypes.json'

function BuildPokemonImages (pokemon) {

  if (parseInt(pokemon.number) === 0){
    pokemon.imgSrc.artwork = "https://wiki.p-insurgence.com/images/0/09/722.png";
    pokemon.imgSrc.sprites.frontDefault = spriteImgURLTemplate + '0' + imgSuffixTemplate;
    
    pokemon.imgSrc.types = [];
    pokemon.types.forEach((t) => {
      pokemon.imgSrc.types.push(typeImgURLTemplate + pokemonTypes.indexOf(t) + imgSuffixTemplate);
    });

  } else {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + parseInt(pokemon.number))
      .then((response) => {
        const imagesShortcut = response.data.sprites;
        pokemon.imgSrc.artwork =        imagesShortcut.other['official-artwork']['front_default'];
        pokemon.imgSrc.artworkShiny =   imagesShortcut.other['official-artwork']['front_shiny'];
        pokemon.imgSrc.sprites = {
                                  frontDefault:  imagesShortcut['front_default'],
                                  frontShiny:    imagesShortcut['front_shiny'],
                                  backDefault:   imagesShortcut['back_default'],
                                  backShiny:     imagesShortcut['back_shiny'],

                                  frontFemale:         imagesShortcut['front_female'],
                                  frontShinyFemale:    imagesShortcut['front_shiny_female'],
                                  backFemale:          imagesShortcut['back_female'],
                                  backShinyFemale:     imagesShortcut['back_shiny_female']
                                  };

    });
  }
}

export default BuildPokemonImages;
