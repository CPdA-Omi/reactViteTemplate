import axios from 'axios';

function BuildPokemonVariants (pokemon) {
  pokemon.variants.forEach((v) => {
    v.number = pokemon.number;

    v.imgSrc = {sprites: {}};

    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + parseInt(v.imgVariantIndex))
      .then((response) => {
        const imagesShortcut = response.data.sprites;
        v.imgSrc.artwork =        imagesShortcut.other['official-artwork']['front_default'];
        v.imgSrc.artworkShiny =   imagesShortcut.other['official-artwork']['front_shiny'];
        v.imgSrc.sprites = {
                            frontDefault: imagesShortcut['front_default'],
                            frontShiny:   imagesShortcut['front_shiny'],
                            backDefault:  imagesShortcut['back_default'],
                            backShiny:    imagesShortcut['back_shiny'],

                            frontFemale:        imagesShortcut['front_female'],
                            frontShinyFemale:   imagesShortcut['front_shiny_female'],
                            backFemale:         imagesShortcut['back_female'],
                            backShinyFemale:    imagesShortcut['back_shiny_female']
                            };
    });
  });
}

export default BuildPokemonVariants;
