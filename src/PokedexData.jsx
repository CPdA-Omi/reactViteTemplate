const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const mainImgURLTemplate = apiURL + "pokemon/other/official-artwork/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"

const pokemonTypes = [
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
  {name: 'missingNo.', types: ['flying', 'normal']},
  {name: 'bulbasaur', types: ['grass', 'poison']},
  {name: 'ivysaur', types: ['grass', 'poison']},
  {name: 'venusaur', types: ['grass', 'poison']},
  {name: 'charmender', types: ['fire']},
  {name: 'charmeleon', types: ['fire']},
  {name: 'charizard', types: ['fire', 'flying']},
  {name: 'squirtle', types: ['water']},
  {name: 'wartortle', types: ['water']},
  {name: 'blastoise', types: ['water']},
  {name: 'caterpie', types: ['bug']},
  {name: 'metapod', types: ['bug']},
  {name: 'butterfree', types: ['bug', 'flying']},
  {name: 'weedle', types: ['bug', 'poison']},
  {name: 'kakuna', types: ['bug', 'poison']},
  {name: 'beedrill', types: ['bug', 'poison']},
  {name: 'pigdey', types: ['normal', 'flying']},
  {name: 'pidgeotto', types: ['normal', 'flying']},
  {name: 'pidgeot', types: ['normal', 'flying']},
  {name: 'rattata', types: ['normal']},
  {name: 'raticate', types: ['normal']},
  {name: 'spearow', types: ['normal', 'flying']},
  {name: 'fearow', types: ['normal', 'flying']},
  {name: 'ekans', types: ['poison']},
  {name: 'arbok', types: ['poison']},
  {name: 'pikachu', types: ['electric']},
  {name: 'raichu', types: ['electric']},
  {name: 'sandshrew', types: ['ground']},
  {name: 'sandslash', types: ['ground']},
  {name: 'nidoran ♀', types: ['poison']},
  {name: 'nidorina', types: ['poison']},
  {name: 'nidoqueen', types: ['poison', 'ground']},
  {name: 'nidoran ♂', types: ['poison']},
  {name: 'nidorino', types: ['poison']},
  {name: 'nidoking', types: ['poison', 'ground']},
  {name: 'clefairy', types: ['fairy']},
  {name: 'clefable', types: ['fairy']},
  {name: 'vulpix', types: ['fire']},
  {name: 'ninetales', types: ['fire']},
  {name: 'jigglypuff', types: ['normal', 'fairy']},
  {name: 'wigglypuff', types: ['normal', 'fairy']},
  {name: 'zubat', types: ['poison', 'flying']},
  {name: 'golbat', types: ['poison', 'flying']},
  {name: 'oddish', types: ['grass', 'poison']},
  {name: 'gloom', types: ['grass', 'poison']},
  {name: 'vileplume', types: ['grass', 'poison']},
  {name: 'paras', types: ['bug', 'grass']},
  {name: 'parasect', types: ['bug', 'grass']},
  {name: 'venonat', types: ['bug', 'poison']},
  {name: 'venomoth', types: ['bug', 'poison']},
  {name: 'diglet', types: ['ground']},
  {name: 'dugtrio', types: ['ground']},
  {name: 'meowth', types: ['normal']},
  {name: 'persian', types: ['normal']},
  {name: 'psyduck', types: ['water']},
  {name: 'golduck', types: ['water']},
  {name: 'mankey', types: ['fighting']},
  {name: 'primeape', types: ['fighting']},
  {name: 'growlithe', types: ['fire']},
  {name: 'arcanine', types: ['fire']},
  {name: 'poliwag', types: ['water']},
  {name: 'poliwhirl', types: ['water']},
  {name: 'poliwrath', types: ['water', 'fighting']},
  {name: 'abra', types: ['psychic']},
  {name: 'kadabra', types: ['psychic']},
  {name: 'alakazam', types: ['psychic']},
  {name: 'machop', types: ['fighting']},
  {name: 'machoke', types: ['fighting']},
  {name: 'machamp', types: ['fighting']},
  {name: 'bellsprout', types: ['grass', 'poison']},
  {name: 'weepinbell', types: ['grass', 'poison']},
  {name: 'victreebel', types: ['grass', 'poison']},
  {name: 'tentacool', types: ['water', 'poison']},
  {name: 'tentacruel', types: ['water', 'poison']},
  {name: 'geodude', types: ['rock', 'ground']},
  {name: 'graveler', types: ['rock', 'ground']},
  {name: 'golem', types: ['rock', 'ground']},
  {name: 'ponyta', types: ['fire']},
  {name: 'rapidash', types: ['fire']},
  {name: 'slowpoke', types: ['water', 'psychic']},
  {name: 'slowbro', types: ['water', 'psychic']},
];

pokemonList.forEach((pokemon) => {

  pokemon.typesImgSrc = [];
  const pokemonNumber = pokemonList.indexOf(pokemon);

  if (pokemonNumber < 10){
    pokemon.number = '000' + pokemonNumber;
  } else {
    if (pokemonNumber < 100){
      pokemon.number = '00' + pokemonNumber;
    } else {
      if (pokemonNumber < 1000){
        pokemon.number = '0' + pokemonNumber;
      } else {
        pokemon.number = pokemonNumber;
      }
    }
  }

  pokemon.types.forEach((type) => {
    if (type === 'unknown'){
      pokemon.typesImgSrc.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/10001.png");
    } else {
      pokemon.typesImgSrc.push(typeImgURLTemplate + pokemonTypes.indexOf(type) + imgSuffixTemplate);
    }
  });

  if (pokemon.name === 'missingNo.'){
    pokemon.imgSrc = "https://wiki.p-insurgence.com/images/0/09/722.png";
  } else {
    pokemon.imgSrc = mainImgURLTemplate + pokemonNumber + imgSuffixTemplate;
  }

  pokemon.spriteSrc = spriteImgURLTemplate + pokemonNumber + imgSuffixTemplate;

});

console.log(pokemonList);
