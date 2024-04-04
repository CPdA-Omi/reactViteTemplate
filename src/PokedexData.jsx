const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const mainImgURLTemplate = apiURL + "pokemon/other/official-artwork/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"

const pokemonTypesId = [
  'unknown',
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy'
];

export const pokemonList = [
  {name: 'missingNo.', types: ['flying', 'normal'], typesImgSrc: []},
  {name: 'bulbasaur', types: ['grass', 'poison'], typesImgSrc: []},
  {name: 'ivysaur', types: ['grass', 'poison'], typesImgSrc: []},
  {name: 'venusaur', types: ['grass', 'poison'], typesImgSrc: []},
  {name: 'charmender', types: ['fire'], typesImgSrc: []},
  {name: 'charmeleon', types: ['fire'], typesImgSrc: []},
  {name: 'charizard', types: ['fire', 'flying'], typesImgSrc: []},
  {name: 'squirtle', types: ['water'], typesImgSrc: []},
  {name: 'wartortle', types: ['water'], typesImgSrc: []},
  {name: 'blastoise', types: ['water'], typesImgSrc: []},
  {name: 'caterpie', types: ['bug'], typesImgSrc: []},
  {name: 'metapod', types: ['bug'], typesImgSrc: []},
  {name: 'butterfree', types: ['bug', 'flying'], typesImgSrc: []},
  {name: 'weedle', types: ['bug', 'poison'], typesImgSrc: []},
  {name: 'kakuna', types: ['bug', 'poison'], typesImgSrc: []},
  {name: 'beedrill', types: ['bug', 'poison'], typesImgSrc: []},
  {name: 'pigdey', types: ['normal', 'flying'], typesImgSrc: []},
  {name: 'pidgeotto', types: ['normal', 'flying'], typesImgSrc: []},
  {name: 'pidgeot', types: ['normal', 'flying'], typesImgSrc: []},
  {name: 'rattata', types: ['normal'], typesImgSrc: []},
  {name: 'raticate', types: ['normal'], typesImgSrc: []},
  {name: 'spearow', types: ['normal', 'flying'], typesImgSrc: []},
  {name: 'fearow', types: ['normal', 'flying'], typesImgSrc: []},
  {name: 'ekans', types: ['poison'], typesImgSrc: []},
  {name: 'arbok', types: ['poison'], typesImgSrc: []},
  {name: 'pikachu', types: ['electric'], typesImgSrc: []},
  {name: 'raichu', types: ['electric'], typesImgSrc: []},
  {name: 'sandshrew', types: ['ground'], typesImgSrc: []},
  {name: 'sandslash', types: ['ground'], typesImgSrc: []},
  {name: 'nidoran ♀', types: ['poison'], typesImgSrc: []},
  {name: 'nidorina', types: ['poison'], typesImgSrc: []},
  {name: 'nidoqueen', types: ['poison', 'ground'], typesImgSrc: []},
  {name: 'nidoran ♂', types: ['poison'], typesImgSrc: []},
  {name: 'nidorino', types: ['poison'], typesImgSrc: []},
  {name: 'nidoking', types: ['poison', 'ground'], typesImgSrc: []},
  {name: 'clefairy', types: ['fairy'], typesImgSrc: []},
  {name: 'clefable', types: ['fairy'], typesImgSrc: []},
  {name: 'vulpix', types: ['fire'], typesImgSrc: []},
  {name: 'ninetales', types: ['fire'], typesImgSrc: []},
  {name: 'jigglypuff', types: ['normal', 'fairy'], typesImgSrc: []},
  {name: 'wigglypuff', types: ['normal', 'fairy'], typesImgSrc: []},
];

pokemonList.forEach((pokemon) => {
  if (pokemonList.indexOf(pokemon) < 10){
    pokemon.number = '000' + pokemonList.indexOf(pokemon);
  } else {
    if (pokemonList.indexOf(pokemon) < 100){
      pokemon.number = '00' + pokemonList.indexOf(pokemon);
    } else {
      if (pokemonList.indexOf(pokemon) < 1000){
        pokemon.number = '0' + pokemonList.indexOf(pokemon);
      } else {
        pokemon.number = pokemonList.indexOf(pokemon);
      }
    }
  }

  pokemon.types.forEach((type) => {
    if (type === 'unknown'){
      pokemon.typesImgSrc.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/10001.png");
    } else {
      pokemon.typesImgSrc.push(typeImgURLTemplate + pokemonTypesId.indexOf(type) + imgSuffixTemplate);
    }
  });

  if (pokemon.name === 'missingNo.'){
    pokemon.imgSrc = "https://wiki.p-insurgence.com/images/0/09/722.png";
  } else {
    pokemon.imgSrc = mainImgURLTemplate + pokemonList.indexOf(pokemon) + imgSuffixTemplate;
  }
});
