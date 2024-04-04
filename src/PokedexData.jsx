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
  {name: ['missingNo.', 'missingNo.'],  types: ['flying', 'normal']},
  {name: ['bulbasaur', 'bulbizarre'],   types: ['grass', 'poison']},
  {name: ['ivysaur', 'Herbizarre'],     types: ['grass', 'poison']},
  {name: ['venusaur', 'florizzare'],    types: ['grass', 'poison']},
  {name: ['charmender', 'salamèche'],   types: ['fire']},
  {name: ['charmeleon', 'reptincel'],   types: ['fire']},
  {name: ['charizard', 'dracaufeu'],    types: ['fire', 'flying']},
  {name: ['squirtle', 'carapuce'],      types: ['water']},
  {name: ['wartortle', 'carabaffe'],    types: ['water']},
  {name: ['blastoise', 'tortank'],      types: ['water']},
  {name: ['caterpie', 'chenipan'],      types: ['bug']},
  {name: ['metapod', 'chrysacier'],     types: ['bug']},
  {name: ['butterfree', 'papilusion'],  types: ['bug', 'flying']},
  {name: ['weedle', 'aspicot'],         types: ['bug', 'poison']},
  {name: ['kakuna', 'coconfort'],       types: ['bug', 'poison']},
  {name: ['beedrill', 'dardargnan'],    types: ['bug', 'poison']},
  {name: ['pigdey', 'roucool'],         types: ['normal', 'flying']},
  {name: ['pidgeotto', 'roucoups'],     types: ['normal', 'flying']},
  {name: ['pidgeot', 'roucarnage'],     types: ['normal', 'flying']},
  {name: ['rattata', 'rattata'],        types: ['normal']},
  {name: ['raticate', 'rattatac'],      types: ['normal']},
  {name: ['spearow', 'piafabec'],       types: ['normal', 'flying']},
  {name: ['fearow', 'rapasdepic'],      types: ['normal', 'flying']},
  {name: ['ekans', 'abo'],              types: ['poison']},
  {name: ['arbok', 'arbok'],            types: ['poison']},
  {name: ['pikachu', 'pikachu'],        types: ['electric']},
  {name: ['raichu', 'raichu'],          types: ['electric']},
  {name: ['sandshrew', 'sabelette'],    types: ['ground']},
  {name: ['sandslash', 'sablaireau'],   types: ['ground']},
  {name: ['nidoran ♀', 'nidoran ♀'],    types: ['poison']},
  {name: ['nidorina', 'nidorina'],      types: ['poison']},
  {name: ['nidoqueen', 'nidoqueen'],    types: ['poison', 'ground']},
  {name: ['nidoran ♂', 'nidoran ♂'],    types: ['poison']},
  {name: ['nidorino', 'nidorino'],      types: ['poison']},
  {name: ['nidoking', 'nidoking'],      types: ['poison', 'ground']},
  {name: ['clefairy', 'mélofée'],       types: ['fairy']},
  {name: ['clefable', 'mélodelfe'],     types: ['fairy']},
  {name: ['vulpix', 'goupix'],          types: ['fire']},
  {name: ['ninetales', 'feunard'],      types: ['fire']},
  {name: ['jigglypuff', 'rondoudou'],   types: ['normal', 'fairy']},
  {name: ['wigglypuff', 'grodoudou'],   types: ['normal', 'fairy']},
  {name: ['zubat', 'nosferapti'],       types: ['poison', 'flying']},
  {name: ['golbat', 'nosferalto'],      types: ['poison', 'flying']},
  {name: ['oddish', 'mysterbe'],        types: ['grass', 'poison']},
  {name: ['gloom', 'ortide'],           types: ['grass', 'poison']},
  {name: ['vileplume', 'rafflesia'],    types: ['grass', 'poison']},
  {name: ['paras', 'paras'],            types: ['bug', 'grass']},
  {name: ['parasect', 'parasect'],      types: ['bug', 'grass']},
  {name: ['venonat', 'mimitoss'],       types: ['bug', 'poison']},
  {name: ['venomoth', 'aéromite'],      types: ['bug', 'poison']},
  {name: ['diglet', 'taupiqueur'],      types: ['ground']},
  {name: ['dugtrio', 'triopikeur'],     types: ['ground']},
  {name: ['meowth', 'miaouss'],         types: ['normal']},
  {name: ['persian', 'persian'],        types: ['normal']},
  {name: ['psyduck', 'psykokwak'],      types: ['water']},
  {name: ['golduck', 'akwakwak'],       types: ['water']},
  {name: ['mankey', 'férosinge'],       types: ['fighting']},
  {name: ['primeape', 'colossinge'],    types: ['fighting']},
  {name: ['growlithe', 'caninos'],      types: ['fire']},
  {name: ['arcanine', 'arcanin'],       types: ['fire']},
  {name: ['poliwag', 'ptitard'],        types: ['water']},
  {name: ['poliwhirl', 'têtarte'],      types: ['water']},
  {name: ['poliwrath', 'tartard'],      types: ['water', 'fighting']},
  {name: ['abra', 'abra'],              types: ['psychic']},
  {name: ['kadabra', 'kadabra'],        types: ['psychic']},
  {name: ['alakazam', 'alakazam'],      types: ['psychic']},
  {name: ['machop', 'machoc'],          types: ['fighting']},
  {name: ['machoke', 'machopeur'],      types: ['fighting']},
  {name: ['machamp', 'mackogneur'],     types: ['fighting']},
  {name: ['bellsprout', 'chétiflor'],   types: ['grass', 'poison']},
  {name: ['weepinbell', 'boustiflor'],  types: ['grass', 'poison']},
  {name: ['victreebel', 'empiflor'],    types: ['grass', 'poison']},
  {name: ['tentacool', 'tentacool'],    types: ['water', 'poison']},
  {name: ['tentacruel', 'tentacruel'],  types: ['water', 'poison']},
  {name: ['geodude', 'racaillou'],      types: ['rock', 'ground']},
  {name: ['graveler', 'gravalanch'],    types: ['rock', 'ground']},
  {name: ['golem', 'grolem'],           types: ['rock', 'ground']},
  {name: ['ponyta', 'ponyta'],          types: ['fire']},
  {name: ['rapidash', 'galopa'],        types: ['fire']},
  {name: ['slowpoke', 'ramoloss'],      types: ['water', 'psychic']},
  {name: ['slowbro', 'flagadoss'],      types: ['water', 'psychic']},
  {name: ['magnemite', 'magnéti'],      types: ['electric', 'steel']},
  {name: ['magneton', 'magnéton'],      types: ['electric', 'steel']},
  {name: ['farfetch\'d', 'canarticho'], types: ['normal', 'flying']},
  {name: ['doduo', 'doduo'],            types: ['normal', 'flying']},
  {name: ['dodrio', 'dodrio'],          types: ['normal', 'flying']},
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
