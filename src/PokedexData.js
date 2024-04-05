const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const mainImgURLTemplate = apiURL + "pokemon/other/official-artwork/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"

//works with index
const pokemonTypes = [
  'unknown',
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground', // 5
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire', // 10
  'water',
  'grass',
  'electric',
  'psychic',
  'ice', // 15
  'dragon',
  'dark',
  'fairy'
];


//
const regionalFormsNames = {
  'alola' :   {EN: 'alolan',   FR: 'd\'Alola'},
  'galar' :   {EN: 'galarian', FR: 'de Galar'},
  'hisui' :   {EN: 'hisuian',  FR: 'de Husui'},
  'paldea' :  {EN: 'paldean',  FR: 'de Paldea'},
};


//index of pokemonList which have a variant due to the pokemon gender
const pokemonGenderVariants = [
  3, 12, 20, 25, 26, 41, 42, 44, 45, 64, 65, 84, 85, 97, 111, 112, 118, 119, 123, 129, 130
];

export const pokemonList = [
  {name: {EN: 'missingNo.',   FR: 'missingNo.'},    types: ['flying', 'normal']},
  {name: {EN: 'bulbasaur',    FR: 'bulbizarre'},    types: ['grass', 'poison']},
  {name: {EN: 'ivysaur',      FR: 'Herbizarre'},    types: ['grass', 'poison']},
  {name: {EN: 'venusaur',     FR: 'florizzare'},    types: ['grass', 'poison']},
  {name: {EN: 'charmender',   FR: 'salamèche'},     types: ['fire']},
  {name: {EN: 'charmeleon',   FR: 'reptincel'},     types: ['fire']},
  {name: {EN: 'charizard',    FR: 'dracaufeu'},     types: ['fire', 'flying']},
  {name: {EN: 'squirtle',     FR: 'carapuce'},      types: ['water']},
  {name: {EN: 'wartortle',    FR: 'carabaffe'},     types: ['water']},
  {name: {EN: 'blastoise',    FR: 'tortank'},       types: ['water']},
  {name: {EN: 'caterpie',     FR: 'chenipan'},      types: ['bug']},
  {name: {EN: 'metapod',      FR: 'chrysacier'},    types: ['bug']},
  {name: {EN: 'butterfree',   FR: 'papilusion'},    types: ['bug', 'flying']},
  {name: {EN: 'weedle',       FR: 'aspicot'},       types: ['bug', 'poison']},
  {name: {EN: 'kakuna',       FR: 'coconfort'},     types: ['bug', 'poison']},
  {name: {EN: 'beedrill',     FR: 'dardargnan'},    types: ['bug', 'poison']},
  {name: {EN: 'pigdey',       FR: 'roucool'},       types: ['normal', 'flying']},
  {name: {EN: 'pidgeotto',    FR: 'roucoups'},      types: ['normal', 'flying']},
  {name: {EN: 'pidgeot',      FR: 'roucarnage'},    types: ['normal', 'flying']},
  
  {name: {EN: 'rattata',      FR: 'rattata'},       types: ['normal'],
    variants: [
                {imgVariantIndex: 10091, regionName: 'alola', types: ['dark', 'normal']}
              ]},

  {name: {EN: 'raticate',     FR: 'rattatac'},      types: ['normal'],
    variants: [
                {imgVariantIndex: 10092, regionName: 'alola', types: ['dark', 'normal']}
              ]},
  {name: {EN: 'spearow',      FR: 'piafabec'},      types: ['normal', 'flying']},
  {name: {EN: 'fearow',       FR: 'rapasdepic'},    types: ['normal', 'flying']},
  {name: {EN: 'ekans',        FR: 'abo'},           types: ['poison']},
  {name: {EN: 'arbok',        FR: 'arbok'},         types: ['poison']},
  {name: {EN: 'pikachu',      FR: 'pikachu'},       types: ['electric']},
  
  {name: {EN: 'raichu',       FR: 'raichu'},        types: ['electric'],
    variants: [
                {imgVariantIndex: 10100, regionName: 'alola', types: ['electric', 'psychic']}
              ]},

  {name: {EN: 'sandshrew',    FR: 'sabelette'},     types: ['ground'],
      variants: [
                {imgVariantIndex: 10101, regionName: 'alola', types: ['ice', 'steel']}
              ]},

  {name: {EN: 'sandslash',    FR: 'sablaireau'},    types: ['ground'],
      variants: [
                {imgVariantIndex: 10102, regionName: 'alola', types: ['ice', 'steel']}
              ]},

  {name: {EN: 'nidoran ♀',    FR: 'nidoran ♀'},     types: ['poison']},
  {name: {EN: 'nidorina',     FR: 'nidorina'},      types: ['poison']},
  {name: {EN: 'nidoqueen',    FR: 'nidoqueen'},     types: ['poison', 'ground']},
  {name: {EN: 'nidoran ♂',    FR: 'nidoran ♂'},     types: ['poison']},
  {name: {EN: 'nidorino',     FR: 'nidorino'},      types: ['poison']},
  {name: {EN: 'nidoking',     FR: 'nidoking'},      types: ['poison', 'ground']},
  {name: {EN: 'clefairy',     FR: 'mélofée'},       types: ['fairy']},
  {name: {EN: 'clefable',     FR: 'mélodelfe'},     types: ['fairy']},

  {name: {EN: 'vulpix',       FR: 'goupix'},        types: ['fire'],
      variants: [
                {imgVariantIndex: 10103, regionName: 'alola', types: ['ice']}
              ]},

  {name: {EN: 'ninetales',    FR: 'feunard'},       types: ['fire'],
      variants: [
                {imgVariantIndex: 10104, regionName: 'alola', types: ['ice', 'fairy']}
              ]},

  {name: {EN: 'jigglypuff',   FR: 'rondoudou'},     types: ['normal', 'fairy']},
  {name: {EN: 'wigglypuff',   FR: 'grodoudou'},     types: ['normal', 'fairy']},
  {name: {EN: 'zubat',        FR: 'nosferapti'},    types: ['poison', 'flying']},
  {name: {EN: 'golbat',       FR: 'nosferalto'},    types: ['poison', 'flying']},
  {name: {EN: 'oddish',       FR: 'mysterbe'},      types: ['grass', 'poison']},
  {name: {EN: 'gloom',        FR: 'ortide'},        types: ['grass', 'poison']},
  {name: {EN: 'vileplume',    FR: 'rafflesia'},     types: ['grass', 'poison']},
  {name: {EN: 'paras',        FR: 'paras'},         types: ['bug', 'grass']},
  {name: {EN: 'parasect',     FR: 'parasect'},      types: ['bug', 'grass']},
  {name: {EN: 'venonat',      FR: 'mimitoss'},      types: ['bug', 'poison']},
  {name: {EN: 'venomoth',     FR: 'aéromite'},      types: ['bug', 'poison']},

  {name: {EN: 'diglet',       FR: 'taupiqueur'},    types: ['ground'],
      variants: [
                {imgVariantIndex: 10105, regionName: 'alola', types: ['ground', 'steel']}
              ]},

  {name: {EN: 'dugtrio',      FR: 'triopikeur'},    types: ['ground'],
      variants: [
                {imgVariantIndex: 10106, regionName: 'alola', types: ['ground', 'steel']}
              ]},

  {name: {EN: 'meowth',       FR: 'miaouss'},       types: ['normal'],
      variants: [
                {imgVariantIndex: 10107, regionName: 'alola', types: ['dark']},
                {imgVariantIndex: 10161, regionName: 'galar', types: ['steel']}
              ]},

  {name: {EN: 'persian',      FR: 'persian'},       types: ['normal'],
      variants: [
                {imgVariantIndex: 10108, regionName: 'alola', types: ['dark']}
              ]},
  {name: {EN: 'psyduck',      FR: 'psykokwak'},     types: ['water']},
  {name: {EN: 'golduck',      FR: 'akwakwak'},      types: ['water']},
  {name: {EN: 'mankey',       FR: 'férosinge'},     types: ['fighting']},
  {name: {EN: 'primeape',     FR: 'colossinge'},    types: ['fighting']},

  {name: {EN: 'growlithe',    FR: 'caninos'},       types: ['fire'],
            variants: [
                {imgVariantIndex: 10229, regionName: 'hisui', types: ['fire', 'rock']}
              ]},

  {name: {EN: 'arcanine',     FR: 'arcanin'},       types: ['fire'],
              variants: [
                {imgVariantIndex: 10230, regionName: 'hisui', types: ['fire', 'rock']}
              ]},

  {name: {EN: 'poliwag',      FR: 'ptitard'},       types: ['water']},
  {name: {EN: 'poliwhirl',    FR: 'têtarte'},       types: ['water']},
  {name: {EN: 'poliwrath',    FR: 'tartard'},       types: ['water', 'fighting']},
  {name: {EN: 'abra',         FR: 'abra'},          types: ['psychic']},
  {name: {EN: 'kadabra',      FR: 'kadabra'},       types: ['psychic']},
  {name: {EN: 'alakazam',     FR: 'alakazam'},      types: ['psychic']},
  {name: {EN: 'machop',       FR: 'machoc'},        types: ['fighting']},
  {name: {EN: 'machoke',      FR: 'machopeur'},     types: ['fighting']},
  {name: {EN: 'machamp',      FR: 'mackogneur'},    types: ['fighting']},
  {name: {EN: 'bellsprout',   FR: 'chétiflor'},     types: ['grass', 'poison']},
  {name: {EN: 'weepinbell',   FR: 'boustiflor'},    types: ['grass', 'poison']},
  {name: {EN: 'victreebel',   FR: 'empiflor'},      types: ['grass', 'poison']},
  {name: {EN: 'tentacool',    FR: 'tentacool'},     types: ['water', 'poison']},
  {name: {EN: 'tentacruel',   FR: 'tentacruel'},    types: ['water', 'poison']},

  {name: {EN: 'geodude',      FR: 'racaillou'},     types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10109, regionName: 'alola', types: ['rock', 'electric']}
              ]},

  {name: {EN: 'graveler',     FR: 'gravalanch'},    types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10110, regionName: 'alola', types: ['rock', 'electric']}
              ]},

  {name: {EN: 'golem',        FR: 'grolem'},        types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10111, regionName: 'alola', types: ['rock', 'electric']}
              ]},

  {name: {EN: 'ponyta',       FR: 'ponyta'},        types: ['fire'],
        variants: [
                {imgVariantIndex: 10162, regionName: 'galar', types: ['psychic']}
              ]},

  {name: {EN: 'rapidash',     FR: 'galopa'},        types: ['fire'],
          variants: [
                {imgVariantIndex: 10163, regionName: 'galar', types: ['psychic', 'fairy']}
              ]},

  {name: {EN: 'slowpoke',     FR: 'ramoloss'},      types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10164, regionName: 'galar', types: ['psychic']}
              ]},
  {name: {EN: 'slowbro',      FR: 'flagadoss'},     types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10165, regionName: 'galar', types: ['poison', 'psychic']}
              ]},

  {name: {EN: 'magnemite',    FR: 'magnéti'},       types: ['electric', 'steel']},
  {name: {EN: 'magneton',     FR: 'magnéton'},      types: ['electric', 'steel']},
  {name: {EN: 'farfetch\'d',  FR:  'canarticho'},   types: ['normal', 'flying'],
          variants: [
                {imgVariantIndex: 10166, regionName: 'galar', types: ['fighting']}
              ]},
  {name: {EN: 'doduo',        FR: 'doduo'},         types: ['normal', 'flying']},
  {name: {EN: 'dodrio',       FR: 'dodrio'},        types: ['normal', 'flying']},
  {name: {EN: 'seel',         FR: 'otaria'},        types: ['water']},
  {name: {EN: 'dewgong',      FR: 'lamantine'},     types: ['water', 'ice']},

  {name: {EN: 'grimer',       FR: 'tadmorv'},       types: ['poison'],
        variants: [
                {imgVariantIndex: 10112, regionName: 'alola', types: ['poison', 'dark']}
              ]},

  {name: {EN: 'muk',          FR: 'grotadmorv'},    types: ['poison'],
        variants: [
                {imgVariantIndex: 10113, regionName: 'alola', types: ['poison', 'dark']}
              ]},

  {name: {EN: 'shellder',     FR: 'kokiyas'},       types: ['water']},
  {name: {EN: 'cloyster',     FR: 'crustabri'},     types: ['water', 'ice']},
  {name: {EN: 'gastly',       FR: 'fantominus'},    types: ['ghost', 'poison']},
  {name: {EN: 'haunter',      FR: 'spectrum'},      types: ['ghost', 'poison']},
  {name: {EN: 'gengar',       FR: 'ectoplasma'},    types: ['ghost', 'poison']},
  {name: {EN: 'onix',         FR: 'onix'},          types: ['rock', 'ground']},
  {name: {EN: 'drowzee',      FR: 'soporifik'},     types: ['psychic']},
  {name: {EN: 'hypno',        FR: 'hypnomade'},     types: ['psychic']},
  {name: {EN: 'krabby',       FR: 'krabby'},        types: ['water']},
  {name: {EN: 'kingler',      FR: 'krabboss'},      types: ['water']},

  {name: {EN: 'voltorb',      FR: 'voltorbe'},      types: ['electric'],
              variants: [
                {imgVariantIndex: 10231, regionName: 'hisui', types: ['electric', 'grass']}
              ]},

  {name: {EN: 'electrode',    FR: 'électrode'},     types: ['electric'],
              variants: [
                {imgVariantIndex: 10232, regionName: 'hisui', types: ['electric', 'grass']}
              ]},

  {name: {EN: 'exeggcute',    FR: 'noeunoeuf'},     types: ['grass', 'psychic']},

  {name: {EN: 'exeggutor',    FR: 'noadkoko'},      types: ['grass', 'psychic'],
        variants: [
                {imgVariantIndex: 10114, regionName: 'alola', types: ['grass', 'dragon']}
              ]},

  {name: {EN: 'cubone',       FR: 'osselet'},       types: ['ground']},

  {name: {EN: 'marowak',      FR: 'ossatueur'},     types: ['ground'],
        variants: [
                {imgVariantIndex: 10115, regionName: 'alola', types: ['fire', 'ghost']}
              ]},

  {name: {EN: 'hitmonlee',    FR: 'kicklee'},       types: ['fighting']},
  {name: {EN: 'hitmonchan',   FR: 'tygnon'},        types: ['fighting']},
  {name: {EN: 'lickitung',    FR: 'excelangue'},    types: ['normal']},
  {name: {EN: 'koffing',      FR: 'smogo'},         types: ['poison']},

  {name: {EN: 'weezing',      FR: 'smogogo'},       types: ['poison'],
          variants: [
                {imgVariantIndex: 10167, regionName: 'galar', types: ['poison', 'fairy']}
              ]},
  {name: {EN: 'rhyhorn',      FR: 'rhinocorne'},    types: ['ground', 'rock']},
  {name: {EN: 'rhydon',       FR: 'rhinoféros'},    types: ['ground', 'rock']},
  {name: {EN: 'chansey',      FR: 'leveinard'},     types: ['normal']},
  {name: {EN: 'tangela',      FR: 'saquedeneu'},    types: ['grass']},
  {name: {EN: 'kangaskhan',   FR: 'kangourex'},     types: ['normal']},
  {name: {EN: 'horsea',       FR: 'hypotrempe'},    types: ['water']},
  {name: {EN: 'seadra',       FR: 'hypocéan'},      types: ['water']},
  {name: {EN: 'goldeen',      FR: 'poissirène'},    types: ['water']},
  {name: {EN: 'seaking',      FR: 'poissoroy'},     types: ['water']},
  {name: {EN: 'staryu',       FR: 'stari'},         types: ['water']},
  {name: {EN: 'starmie',      FR: 'staross'},       types: ['water', 'psychic']},

  {name: {EN: 'mr. Mime',     FR: 'm. Mime'},       types: ['psychic', 'fairy'],
            variants: [
                {imgVariantIndex: 10168, regionName: 'galar', types: ['ice', 'psychic']}
              ]},

  {name: {EN: 'scyther',      FR: 'insécateur'},    types: ['bug', 'flying']},
  {name: {EN: 'jynx',         FR: 'lippoutou'},     types: ['ice', 'psychic']},
  {name: {EN: 'electabuzz',   FR: 'électek'},       types: ['electric']},
  {name: {EN: 'magmar',       FR: 'magmar'},        types: ['fire']},
  {name: {EN: 'pinsir',       FR: 'scarabrute'},    types: ['bug']},

  {name: {EN: 'tauros',       FR: 'tauros'},        types: ['normal'],
              variants: [
                {imgVariantIndex: 10250, regionName: 'paldea', types: ['fighting']}
              ]},

  {name: {EN: 'magikarp',     FR: 'magicarpe'},     types: ['water']},
  {name: {EN: 'gyarados',     FR: 'léviator'},      types: ['water', 'flying']},
  {name: {EN: 'lapras',       FR: 'loklhass'},      types: ['water', 'ice']},
  {name: {EN: 'ditto',        FR: 'métamorph'},     types: ['normal']},
  {name: {EN: 'evee',         FR: 'évoli'},         types: ['normal']},
  {name: {EN: 'vaporeon',     FR: 'aquali'},        types: ['water']},
  {name: {EN: 'jolteon',      FR: 'voltali'},       types: ['electric']},
  {name: {EN: 'flareon',      FR: 'pyroli'},        types: ['fire']},
  {name: {EN: 'porygon',      FR: 'porygon'},       types: ['normal']},
  {name: {EN: 'ominyte',      FR: 'amonita'},       types: ['rock', 'water']},
  {name: {EN: 'omastar',      FR: 'amonistar'},     types: ['rock', 'water']},
  {name: {EN: 'kabuto',       FR: 'kabuto'},        types: ['rock', 'water']},
  {name: {EN: 'kabutops',     FR: 'kabutops'},      types: ['rock', 'water']},
  {name: {EN: 'aeriodactyl',  FR: 'ptéra'},         types: ['rock', 'flying']},
  {name: {EN: 'snorlax',      FR: 'ronflex'},       types: ['normal']},

  {name: {EN: 'articuno',     FR: 'artikodin'},     types: ['water', 'flying'],
            variants: [
                {imgVariantIndex: 10169, regionName: 'galar', types: ['psychic', 'flying']}
              ]},

  {name: {EN: 'zapdos',       FR: 'électhor'},      types: ['electric', 'flying'],
            variants: [
                {imgVariantIndex: 10170, regionName: 'galar', types: ['fighting', 'flying']}
              ]},

  {name: {EN: 'moltres',      FR: 'sulfura'},       types: ['fire', 'flying'],
            variants: [
                {imgVariantIndex: 10171, regionName: 'galar', types: ['dark', 'flying']}
              ]},
  {name: {EN: 'dratini',      FR: 'minidraco'},     types: ['dragon']},
  {name: {EN: 'dragonair',    FR: 'draco'},         types: ['dragon']},
  {name: {EN: 'dragonite',    FR: 'dracolosse'},    types: ['dragon', 'flying']},
  {name: {EN: 'mewtwo',       FR: 'mewtwo'},        types: ['psychic']},
  {name: {EN: 'mew',          FR: 'mew'},           types: ['psychic']},
];

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

function BuildPokemonTypes (pokemon) {
  pokemon.typesImgSrc = [];
  
  pokemon.types.forEach((type) => {
    pokemon.typesImgSrc.push(typeImgURLTemplate + pokemonTypes.indexOf(type) + imgSuffixTemplate);
  });
}

function BuildPokemonVariants (pokemon) {
  if (pokemon.variants){
    pokemon.variants.forEach((variant) => {
      variant.name = {};
      variant.name['EN'] = regionalFormsNames[variant.regionName]['EN'] + ' ' + pokemon.name['EN'].charAt(0).toUpperCase() + pokemon.name['EN'].slice(1);
      variant.name['FR'] = pokemon.name['FR'] + ' ' + regionalFormsNames[variant.regionName]['FR'];
                      
      delete variant.regionName;

      variant.imgSrc = mainImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
      variant.spriteSrc = spriteImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
      delete variant.imgVariantIndex;

      BuildPokemonTypes(variant);
    });
  }
}

function BuildPokemonList (pokemonList) {

  pokemonList.forEach((pokemon) => {

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

    BuildPokemonTypes(pokemon);

    if (pokemon.name[0] === 'missingNo.'){
      pokemon.imgSrc = "https://wiki.p-insurgence.com/images/0/09/722.png";
      pokemon.imgShinySrc = "";
    } else {
      pokemon.imgSrc = mainImgURLTemplate + pokemonNumber + imgSuffixTemplate;
      pokemon.imgShinySrc = mainImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;
    }

    pokemon.spriteSrc = spriteImgURLTemplate + pokemonNumber + imgSuffixTemplate;
    pokemon.spriteShinySrc = spriteImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;

    if (pokemonGenderVariants.includes(pokemonList.indexOf(pokemon))){
      pokemon.spriteFemaleSrc = spriteImgURLTemplate + 'female/' + pokemonNumber + imgSuffixTemplate;
      pokemon.spriteFemaleShinySrc = spriteImgURLTemplate + 'shiny/female/' + pokemonNumber + imgSuffixTemplate;
    }

    BuildPokemonVariants(pokemon);

  });
}

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

BuildPokemonList(pokemonList);
