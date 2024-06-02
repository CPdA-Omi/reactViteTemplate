import axios from 'axios';

function BuildPokemonDetails (pokemon) {
  if (parseInt(pokemon.number) !== 0) {
    axios
      .get('https://pokeapi.co/api/v2/pokemon-species/' + parseInt(pokemon.number))
      .then((response) => {
        const generaShortcut = response.data.genera;
        pokemon.genera = {
                          KO: generaShortcut[1].genus,
                          CH: generaShortcut[2].genus,
                          FR: generaShortcut[3].genus,
                          DE: generaShortcut[4].genus,
                          ES: generaShortcut[5].genus,
                          IT: generaShortcut[6].genus,
                          EN: generaShortcut[7].genus,
                          JA: generaShortcut[8].genus,
                        };
    });
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + parseInt(pokemon.number))
      .then((response) => {
        pokemon.sndSrc = response.data.cries;
    });

    if (pokemon.variants) {
      pokemon.variants.forEach((v) => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + v.imgVariantIndex)
        .then((response) => {
          v.sndSrc = response.data.cries;
        delete v.imgVariantIndex;
        });
      });
    }
  }
}

export default BuildPokemonDetails;
