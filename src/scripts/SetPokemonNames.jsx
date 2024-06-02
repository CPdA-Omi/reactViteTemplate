import axios from 'axios';

import regionalFormsNames from '../data/regionalFormsNames.json'

function SetPokemonNames (pokemon) {
  pokemon.names = {
                      KO: '',
                      CH: '',
                      FR: '',
                      DE: '',
                      ES: '',
                      IT: '',
                      EN: '',
                      JA: '',
                      roomaji: ''
                    };

  if (parseInt(pokemon.number) === 0){
    pokemon.names['KO'] = 'missingNo.';
    pokemon.names['CH'] = 'missingNo.';
    pokemon.names['FR'] = 'missingNo.';
    pokemon.names['DE'] = 'missingNo.';
    pokemon.names['ES'] = 'missingNo.';
    pokemon.names['IT'] = 'missingNo.';
    pokemon.names['EN'] = 'missingNo.';
    pokemon.names['JA'] = 'missingNo.';
    pokemon.names['roomaji'] = 'missingNo.';
  } else {
    axios
      .get('https://pokeapi.co/api/v2/pokemon-species/' + parseInt(pokemon.number))
      // Use this data to update the state
      .then((response) => {
        pokemon.names['KO'] = response.data.names[2].name;
        pokemon.names['CH'] = response.data.names[3].name;
        pokemon.names['FR'] = response.data.names[4].name;
        pokemon.names['DE'] = response.data.names[5].name;
        pokemon.names['ES'] = response.data.names[6].name;
        pokemon.names['IT'] = response.data.names[7].name;
        pokemon.names['EN'] = response.data.names[8].name;
        pokemon.names['JA'] = response.data.names[9].name;
        pokemon.names['roomaji'] = response.data.names[1].name;

        if (pokemon.variants && parseInt(pokemon.number) !== 201){
          pokemon.variants.forEach((v) => {
            v.names['EN'] = regionalFormsNames[v.regionName]['EN'] + ' ' + pokemon.names['EN'].charAt(0).toUpperCase() + pokemon.names['EN'].slice(1);
            v.names['FR'] = pokemon.names['FR'] + ' ' + regionalFormsNames[v.regionName]['FR'];
            v.names['DE'] = v.regionName + '-' + pokemon.names['DE'].charAt(0).toUpperCase() + pokemon.names['DE'].slice(1);
            v.names['JA'] = regionalFormsNames[v.regionName]['JA'] + pokemon.names['JA'].charAt(0).toUpperCase() + pokemon.names['JA'].slice(1);
            v.names['roomaji'] = regionalFormsNames[v.regionName]['EN'] + ' ' + pokemon.names['roomaji'].charAt(0).toUpperCase() + pokemon.names['roomaji'].slice(1);
            delete v.regionName;
          });
        }
      });
  }
  return pokemon;
}

export default SetPokemonNames;
