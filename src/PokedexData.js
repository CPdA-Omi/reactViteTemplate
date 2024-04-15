import axios from 'axios';

const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const mainImgURLTemplate = apiURL + "pokemon/other/official-artwork/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const spriteBackImgURLTemplate = spriteImgURLTemplate + "back/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"


//errors definitions dictionnary
export const errorsDefinitions = {
  missingPokemon:         {
                            EN: 'Pokémon not implemented yet',
                            FR: 'Pokémon pas encore implémenté',
                            DE: 'Pokémon noch nicht implementiert',
                            JA: 'まだ実装されてないポケモン'
                          },
  missingRegionalPokemon: {
                            EN: 'Regional variant not implemented yet',
                            FR: 'Variante régionale pas encore implémentée',
                            DE: 'Regionale Variante nicht zusätzlich implementiert',
                            JA: '地域バリアントはまだ実装されていません'
                          },
};

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


//prefix or suffix, it depends on the language
const regionalFormsNames = {
  'alola':   {EN: 'alolan',   FR: 'd\'Alola',   JA: 'アローラ'},
  'galar':   {EN: 'galarian', FR: 'de Galar',   JA: 'ガラリアン'},
  'hisui':   {EN: 'hisuian',  FR: 'de Husui',   JA: 'ヒスイアン'},
  'paldea':  {EN: 'paldean',  FR: 'de Paldea',  JA: 'パルデアン'},
};


//index of pokemonList which have a variant due to the pokemon gender
const pokemonGenderVariants = [
  3, 12, 20, 25, 26, 41, 42, 44, 45, 64, 65, 84, 85, 97, 111, 112, 118, 119, 123, 129, 130,
  154, 165, 166, 178, 185, 186, 190, 194, 195, 198, 202, 203, 207, 208, 212, 214, 215, 217, 221, 224, 229, 232
];

//evolutions order have to be in crescent evolutions order
export const pokemonList = [
/*0000*/  {types: ['flying', 'normal']},
/*0001*/  {types: ['grass', 'poison'],             evolutionsIndex: [1, 2, 3]},
/*0002*/  {types: ['grass', 'poison']},
/*0003*/  {types: ['grass', 'poison']},
/*0004*/  {types: ['fire'],                        evolutionsIndex: [4, 5, 6]},
/*0005*/  {types: ['fire']},
/*0006*/  {types: ['fire', 'flying']},
/*0007*/  {types: ['water'],                       evolutionsIndex: [7, 8, 9]},
/*0008*/  {types: ['water']},
/*0009*/  {types: ['water']},
/*0010*/  {types: ['bug'],                         evolutionsIndex: [10, 11, 12]},
/*0011*/  {types: ['bug']},
/*0012*/  {types: ['bug', 'flying']},
/*0013*/  {types: ['bug', 'poison'],               evolutionsIndex: [13, 14, 15]},
/*0014*/  {types: ['bug', 'poison']},
/*0015*/  {types: ['bug', 'poison']},
/*0016*/  {types: ['normal', 'flying'],            evolutionsIndex: [16, 17, 18]},
/*0017*/  {types: ['normal', 'flying']},
/*0018*/  {types: ['normal', 'flying']},
  
/*0019*/  {types: ['normal'],                      evolutionsIndex: [19, 20],
      variants: [
                  {imgVariantIndex: 10091, regionName: 'alola', types: ['dark', 'normal']}
                ]},

/*0020*/  {types: ['normal'],
      variants: [
                  {imgVariantIndex: 10092, regionName: 'alola', types: ['dark', 'normal']}
                ]},
/*0021*/  {types: ['normal', 'flying'],            evolutionsIndex: [21, 22]},
/*0022*/  {types: ['normal', 'flying']},
/*0023*/  {types: ['poison'],                      evolutionsIndex: [23, 24]},
/*0024*/  {types: ['poison']},
/*0025*/  {types: ['electric'],                    evolutionsIndex: [172, 25, 26]},
  
/*0026*/  {types: ['electric'],
      variants: [
              {imgVariantIndex: 10100, regionName: 'alola', types: ['electric', 'psychic'],
                followEvolution: false}
              ]},

/*0027*/  {types: ['ground'],                      evolutionsIndex: [27, 28],
      variants: [
                {imgVariantIndex: 10101, regionName: 'alola', types: ['ice', 'steel']}
              ]},

/*0028*/  {types: ['ground'],
        variants: [
                  {imgVariantIndex: 10102, regionName: 'alola', types: ['ice', 'steel']}
                ]},

/*0029*/  {types: ['poison'],                      evolutionsIndex: [29, 30, 31]},
/*0030*/  {types: ['poison']},
/*0031*/  {types: ['poison', 'ground']},
/*0032*/  {types: ['poison'],                      evolutionsIndex: [32, 33, 34]},
/*0033*/  {types: ['poison']},
/*0034*/  {types: ['poison', 'ground']},
/*0035*/  {types: ['fairy'],                       evolutionsIndex: [173, 35, 36]},
/*0036*/  {types: ['fairy']},

/*0037*/  {types: ['fire'],                        evolutionsIndex: [37, 38],
        variants: [
                  {imgVariantIndex: 10103, regionName: 'alola', types: ['ice']}
                ]},

/*0038*/  {types: ['fire'],
        variants: [
                  {imgVariantIndex: 10104, regionName: 'alola', types: ['ice', 'fairy']}
                ]},

/*0039*/  {types: ['normal', 'fairy'],             evolutionsIndex: [174, 39, 40]},
/*0040*/  {types: ['normal', 'fairy']},
/*0041*/  {types: ['poison', 'flying'],            evolutionsIndex: [41, 42, 169]},
/*0042*/  {types: ['poison', 'flying']},
/*0043*/  {types: ['grass', 'poison'],             evolutionsIndex: [43, 44, 45, 182]},
/*0044*/  {types: ['grass', 'poison']},
/*0045*/  {types: ['grass', 'poison']},
/*0046*/  {types: ['bug', 'grass'],                evolutionsIndex: [46, 47]},
/*0047*/  {types: ['bug', 'grass']},
/*0048*/  {types: ['bug', 'poison'],               evolutionsIndex: [48, 49]},
/*0049*/  {types: ['bug', 'poison']},

/*0050*/  {types: ['ground'],                      evolutionsIndex: [50, 51],
        variants: [
                  {imgVariantIndex: 10105, regionName: 'alola', types: ['ground', 'steel']}
                ]},

/*0051*/  {types: ['ground'],
        variants: [
                  {imgVariantIndex: 10106, regionName: 'alola', types: ['ground', 'steel']}
                ]},

/*0052*/  {types: ['normal'],                      evolutionsIndex: [52, 53],
        variants: [
                  {imgVariantIndex: 10107, regionName: 'alola', types: ['dark']},
                  {imgVariantIndex: 10161, regionName: 'galar', types: ['steel'],
                  evolutionsIndex: [52, 863]}
              ]},

/*0053*/  {types: ['normal'],
        variants: [
                  {imgVariantIndex: 10108, regionName: 'alola', types: ['dark']}
                ]},

/*0054*/  {types: ['water'],                       evolutionsIndex: [54, 55]},
/*0055*/  {types: ['water']},
/*0056*/  {types: ['fighting'],                    evolutionsIndex: [56, 57, 979]},
/*0057*/  {types: ['fighting']},

/*0058*/  {types: ['fire'],                        evolutionsIndex: [58, 59],
        variants: [
            {imgVariantIndex: 10229, regionName: 'hisui', types: ['fire', 'rock']}
          ]},

/*0059*/  {types: ['fire'],
        variants: [
          {imgVariantIndex: 10230, regionName: 'hisui', types: ['fire', 'rock']}
        ]},

/*0060*/  {types: ['water'],                       evolutionsIndex: [60, 61, 62, 186]},
/*0061*/  {types: ['water']},
/*0062*/  {types: ['water', 'fighting']},
/*0063*/  {types: ['psychic'],                     evolutionsIndex: [63, 64, 65]},
/*0064*/  {types: ['psychic']},
/*0065*/  {types: ['psychic']},
/*0066*/  {types: ['fighting'],                    evolutionsIndex: [66, 67, 68]},
/*0067*/  {types: ['fighting']},
/*0068*/  {types: ['fighting']},
/*0069*/  {types: ['grass', 'poison'],             evolutionsIndex: [69, 70, 71]},
/*0070*/  {types: ['grass', 'poison']},
/*0071*/  {types: ['grass', 'poison']},
/*0072*/  {types: ['water', 'poison'],             evolutionsIndex: [72, 73]},
/*0073*/  {types: ['water', 'poison']},

/*0074*/  {types: ['rock', 'ground'],              evolutionsIndex: [74, 75, 76],
        variants: [
                {imgVariantIndex: 10109, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0075*/  {types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10110, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0076*/  {types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10111, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0077*/  {types: ['fire'],                      evolutionsIndex: [77, 78],
        variants: [
                {imgVariantIndex: 10162, regionName: 'galar', types: ['psychic']}
              ]},

/*0078*/  {types: ['fire'],
          variants: [
                {imgVariantIndex: 10163, regionName: 'galar', types: ['psychic', 'fairy']}
              ]},

/*0079*/  {types: ['water', 'psychic'],          evolutionsIndex: [79, 80, 199],
          variants: [
                {imgVariantIndex: 10164, regionName: 'galar', types: ['psychic']}
              ]},
/*0080*/  {types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10165, regionName: 'galar', types: ['poison', 'psychic']}
              ]},

/*0081*/  {types: ['electric', 'steel'],         evolutionsIndex: [81, 82, 462]},
/*0082*/  {types: ['electric', 'steel']},
/*0083*/  {types: ['normal', 'flying'],          evolutionsIndex: [83],
          variants: [
                {imgVariantIndex: 10166, regionName: 'galar', types: ['fighting'],
                evolutionsIndex: [83, 865]}
              ]},
/*0084*/  {types: ['normal', 'flying'],          evolutionsIndex: [84, 85]},
/*0085*/  {types: ['normal', 'flying']},
/*0086*/  {types: ['water'],                     evolutionsIndex: [86, 87]},
/*0087*/  {types: ['water', 'ice']},

/*0088*/  {types: ['poison'],                    evolutionsIndex: [88, 89],
          variants: [
                  {imgVariantIndex: 10112, regionName: 'alola', types: ['poison', 'dark']}
                ]},

/*0089*/  {types: ['poison'],
          variants: [
                  {imgVariantIndex: 10113, regionName: 'alola', types: ['poison', 'dark']}
                ]},

/*0090*/  {types: ['water'],                     evolutionsIndex: [90, 91]},
/*0091*/  {types: ['water', 'ice']},
/*0092*/  {types: ['ghost', 'poison'],           evolutionsIndex: [92, 93, 94]},
/*0093*/  {types: ['ghost', 'poison']},
/*0094*/  {types: ['ghost', 'poison']},
/*0095*/  {types: ['rock', 'ground'],            evolutionsIndex: [95, 208]},
/*0096*/  {types: ['psychic'],                   evolutionsIndex: [96, 97]},
/*0097*/  {types: ['psychic']},
/*0098*/  {types: ['water'],                     evolutionsIndex: [98, 99]},
/*0099*/  {types: ['water']},

/*0100*/  {types: ['electric'],                  evolutionsIndex: [100, 101],
          variants: [
                  {imgVariantIndex: 10231, regionName: 'hisui', types: ['electric', 'grass']}
                ]},

/*0101*/  {types: ['electric'],
          variants: [
                  {imgVariantIndex: 10232, regionName: 'hisui', types: ['electric', 'grass']}
                ]},

/*0102*/  {types: ['grass', 'psychic'],           evolutionsIndex: [102, 103]},

/*0103*/  {types: ['grass', 'psychic'],
          variants: [
                  {imgVariantIndex: 10114, regionName: 'alola', types: ['grass', 'dragon'],
                    followEvolution: false}
                ]},

/*0104*/  {types: ['ground'],                      evolutionsIndex: [104, 105]},

/*0105*/  {types: ['ground'],
          variants: [
                  {imgVariantIndex: 10115, regionName: 'alola', types: ['fire', 'ghost'],
                    followEvolution: false}
                ]},

/*0106*/  {types: ['fighting'],                    evolutionsIndex: [236, 106, 107, 237]},
/*0107*/  {types: ['fighting']},
/*0108*/  {types: ['normal'],                      evolutionsIndex: [108, 463]},
/*0109*/  {types: ['poison'],                      evolutionsIndex: [109, 110]},

/*0110*/  {types: ['poison'],
          variants: [
                  {imgVariantIndex: 10167, regionName: 'galar', types: ['poison', 'fairy'],
                    followEvolution: false}
                ]},
/*0111*/  {types: ['ground', 'rock'],              evolutionsIndex: [111, 112, 464]},
/*0112*/  {types: ['ground', 'rock']},
/*0113*/  {types: ['normal'],                      evolutionsIndex: [440, 113, 242]},
/*0114*/  {types: ['grass'],                       evolutionsIndex: [114, 465]},
/*0115*/  {types: ['normal']},
/*0116*/  {types: ['water'],                       evolutionsIndex: [116, 117, 230]},
/*0117*/  {types: ['water']},
/*0118*/  {types: ['water'],                       evolutionsIndex: [118, 119]},
/*0119*/  {types: ['water']},
/*0120*/  {types: ['water'],                       evolutionsIndex: [120, 121]},
/*0121*/  {types: ['water', 'psychic']},

/*0122*/  {types: ['psychic', 'fairy'],            evolutionsIndex: [439, 122],
          variants: [
                {imgVariantIndex: 10168, regionName: 'galar', types: ['ice', 'psychic'],
                  evolutionsIndex: [439, 122, 866]}
              ]},

/*0123*/  {types: ['bug', 'flying'],               evolutionsIndex: [123, 212, 900]},
/*0124*/  {types: ['ice', 'psychic'],              evolutionsIndex: [238, 124]},
/*0125*/  {types: ['electric'],                    evolutionsIndex: [239, 125, 466]},
/*0126*/  {types: ['fire'],                        evolutionsIndex: [240, 126, 467]},
/*0127*/  {types: ['bug']},

/*0128*/  {types: ['normal'],
            variants: [
                {imgVariantIndex: 10250, regionName: 'paldea', types: ['fighting']}
              ]},

/*0129*/  {types: ['water'],                       evolutionsIndex: [129, 130]},
/*0130*/  {types: ['water', 'flying']},
/*0131*/  {types: ['water', 'ice']},
/*0132*/  {types: ['normal']},
/*0133*/  {types: ['normal'],                      evolutionsIndex: [133, 134, 135, 136, 196, 197, 470, 471, 700]},
/*0134*/  {types: ['water']},
/*0135*/  {types: ['electric']},
/*0136*/  {types: ['fire']},
/*0137*/  {types: ['normal'],                      evolutionsIndex: [137, 233, 474]},
/*0138*/  {types: ['rock', 'water'],               evolutionsIndex: [138, 139]},
/*0139*/  {types: ['rock', 'water'],               evolutionsIndex: [140, 141]},
/*0140*/  {types: ['rock', 'water']},
/*0141*/  {types: ['rock', 'water']},
/*0142*/  {types: ['rock', 'flying']},
/*0143*/  {types: ['normal'],                      evolutionsIndex: [446, 143]},

/*0144*/  {types: ['water', 'flying'],
            variants: [
                  {imgVariantIndex: 10169, regionName: 'galar', types: ['psychic', 'flying']}
                ]},

/*0145*/  {types: ['electric', 'flying'],
            variants: [
                  {imgVariantIndex: 10170, regionName: 'galar', types: ['fighting', 'flying']}
                ]},

/*0146*/  {types: ['fire', 'flying'],
            variants: [
                  {imgVariantIndex: 10171, regionName: 'galar', types: ['dark', 'flying']}
                ]},

/*0147*/  {types: ['dragon'],                      evolutionsIndex: [147, 148, 149]},
/*0148*/  {types: ['dragon']},
/*0149*/  {types: ['dragon', 'flying']},
/*0150*/  {types: ['psychic'],                     evolutionsIndex: [151, 150]},
/*0151*/  {types: ['psychic']},

//gen2
/*0152*/  {types: ['grass'],                       evolutionsIndex: [152, 153, 154]},
/*0153*/  {types: ['grass']},
/*0154*/  {types: ['grass']},
/*0155*/  {types: ['fire'],                        evolutionsIndex: [155, 156, 157]},
/*0156*/  {types: ['fire']},

/*0157*/  {types: ['fire'],
            variants: [
                  {imgVariantIndex: 10233, regionName: 'hisui', types: ['fire', 'ghost'],
                  followEvolution: false}
                ]},

/*0158*/  {types: ['water'],                       evolutionsIndex: [158, 159, 160]},
/*0159*/  {types: ['water']},
/*0160*/  {types: ['water']},
/*0161*/  {types: ['normal'],                      evolutionsIndex: [161, 162]},
/*0162*/  {types: ['normal']},
/*0163*/  {types: ['normal', 'flying'],            evolutionsIndex: [163, 164]},
/*0164*/  {types: ['normal', 'flying']},
/*0165*/  {types: ['bug', 'flying'],               evolutionsIndex: [165, 166]},
/*0166*/  {types: ['bug', 'flying']},
/*0167*/  {types: ['bug', 'poison'],               evolutionsIndex: [167, 168]},
/*0168*/  {types: ['bug', 'poison']},
/*0169*/  {types: ['poison', 'flying']},
/*0170*/  {types: ['water', 'electric'],           evolutionsIndex: [170, 171]},
/*0171*/  {types: ['water', 'electric']},
/*0172*/  {types: ['electric']},
/*0173*/  {types: ['fairy']},
/*0174*/  {types: ['normal', 'fairy']},
/*0175*/  {types: ['fairy'],                       evolutionsIndex: [175, 176, 468]},
/*0176*/  {types: ['fairy', 'flying']},
/*0177*/  {types: ['psychic', 'flying'],           evolutionsIndex: [177, 178]},
/*0178*/  {types: ['psychic', 'flying']},
/*0179*/  {types: ['electric'],                    evolutionsIndex: [179, 180, 181]},
/*0180*/  {types: ['electric']},
/*0181*/  {types: ['electric']},
/*0182*/  {types: ['grass']},
/*0183*/  {types: ['water', 'fairy'],              evolutionsIndex: [298, 183, 184]},
/*0184*/  {types: ['water', 'fairy']},
/*0185*/  {types: ['rock'],                        evolutionsIndex: [438, 185]},
/*0186*/  {types: ['water']},
/*0187*/  {types: ['grass', 'flying'],             evolutionsIndex: [187, 188, 189]},
/*0188*/  {types: ['grass', 'flying']},
/*0189*/  {types: ['grass', 'flying']},
/*0190*/  {types: ['normal'],                      evolutionsIndex: [190, 424]},
/*0191*/  {types: ['grass'],                       evolutionsIndex: [191, 192]},
/*0192*/  {types: ['grass']},
/*0193*/  {types: ['bug', 'flying'],               evolutionsIndex: [193, 469]},

/*0194*/  {types: ['water', 'ground'],             evolutionsIndex: [194, 195],
          variants: [
                {imgVariantIndex: 10253, regionName: 'paldea', types: ['poison', 'ground'],
                evolutionsIndex: [194, 980]}
              ]},
/*0195*/  {types: ['water', 'ground']},
/*0196*/  {types: ['psychic']},
/*0197*/  {types: ['dark']},
/*0198*/  {types: ['dark', 'flying'],               evolutionsIndex: [198, 430]},

/*0199*/  {types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10172, regionName: 'galar', types: ['poison', 'psychic']}
              ]},
/*0200*/  {types: ['ghost'],                       evolutionsIndex: [200, 429]},
/*0201*/  {types: ['psychic']},
];

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

function SetPokemonNames (pokemon) {
  if (pokemonList.indexOf(pokemon) === 0){
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

        if (pokemon.variants){
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
}

function BuildPokemonImages (pokemon) {
  const pokemonNumber = parseInt(pokemon.number);
  pokemon.imgSrc = {sprites: {}};

  if (pokemonList.indexOf(pokemon) === 0){
    pokemon.imgSrc.artwork = "https://wiki.p-insurgence.com/images/0/09/722.png";
  } else {
    pokemon.imgSrc.artwork = mainImgURLTemplate + pokemonNumber + imgSuffixTemplate;
    pokemon.imgSrc.shinyArtwork = mainImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;
  }

  pokemon.imgSrc.sprites.regular = spriteImgURLTemplate + pokemonNumber + imgSuffixTemplate;
  pokemon.imgSrc.sprites.regularBack = spriteBackImgURLTemplate + pokemonNumber + imgSuffixTemplate;
  pokemon.imgSrc.sprites.shiny = spriteImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;
  pokemon.imgSrc.sprites.shinyBack = spriteBackImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;

  if (pokemonGenderVariants.includes(pokemonNumber)){
    pokemon.imgSrc.sprites.regularFemale = spriteImgURLTemplate + 'female/' + pokemonNumber + imgSuffixTemplate;
    pokemon.imgSrc.sprites.regularBackFemale = spriteBackImgURLTemplate + 'female/' + pokemonNumber + imgSuffixTemplate;
    pokemon.imgSrc.sprites.shinyFemale = spriteImgURLTemplate + 'shiny/female/' + pokemonNumber + imgSuffixTemplate;
    pokemon.imgSrc.sprites.shinyBackFemale = spriteBackImgURLTemplate + 'shiny/female/' + pokemonNumber + imgSuffixTemplate;
  }
}

function BuildPokemonTypes (pokemon) {
  pokemon.imgSrc.types = [];
  
  pokemon.types.forEach((type) => {
    pokemon.imgSrc.types.push(typeImgURLTemplate + pokemonTypes.indexOf(type) + imgSuffixTemplate);
  });
}

function BuildPokemonVariants (pokemon) {
  pokemon.variants.forEach((variant) => {
    variant.number = pokemon.number;

    variant.imgSrc = {sprites: {}};
    variant.imgSrc.artwork = mainImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
    variant.imgSrc.sprites.regular = spriteImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
    variant.imgSrc.sprites.regularBack = spriteBackImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
    delete variant.imgVariantIndex;

    if (pokemonGenderVariants.includes(variant.number)){
      variant.imgSrc.sprites.regularFemale = spriteImgURLTemplate + 'female/' + variant.imgVariantIndex + imgSuffixTemplate;
      variant.imgSrc.sprites.regularBackFemale = spriteBackImgURLTemplate + 'female/' + variant.imgVariantIndex + imgSuffixTemplate;
    }

    BuildPokemonTypes(variant);
  });
}

function BuildPokemonEvolutions (evolutionsTree) {
  const filteredEvolutionsTree = [];
  
  evolutionsTree.forEach((index) => {
    if (index <= pokemonList.length -1){
      filteredEvolutionsTree.push(index);
    }
  });

  filteredEvolutionsTree.forEach((pokemonIndex) => {
    const pokemon = pokemonList[pokemonIndex];
    if (pokemon.evolutionsIndex){
      delete pokemon.evolutionsIndex;
    }
    pokemon.evolutions = [];
      
      evolutionsTree.forEach((index) => {
        pokemon.evolutions.push({
                                evolutionIndex: index,
                                names: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].names,
                                spriteSrc: spriteImgURLTemplate + index + imgSuffixTemplate,
                                isOutOfRange: index > pokemonList.length -1
                                }
        );
      });

    if (pokemon.variants) {
      pokemon.variants.forEach((variant) => {
        variant.evolutions = [];
        
        if (variant.evolutionsIndex){ //specific evolution tree
          const variantEvolutionsTree = [];
          variant.evolutionsIndex.forEach((index) => { //foreach pokemon of the evolution tree (build of the evolution tree)
            const evolutionNames = index <= pokemonList.length -1 && pokemonList[index].variants ? //if the pokemon is in the main table and have regional variants
            pokemonList[index].variants[pokemonList[index].variants.length -1].names //name of the last variant of the pokemon;
            :
            index > pokemonList.length -1 ? errorsDefinitions['missingPokemon'] : pokemonList[index].name;

            const spriteNumber = index <= pokemonList.length -1 && pokemonList[index].variants ? //if the pokemon is in the main table and have regional variants
            pokemonList[index].variants[pokemonList[index].variants.length -1].imgVariantIndex //imgVariantIndex of the last variant of the pokemon
            :
            index;
            variantEvolutionsTree.push({
                                        evolutionIndex: index,
                                        names: evolutionNames,
                                        spriteSrc: spriteImgURLTemplate + spriteNumber + imgSuffixTemplate,
                                        isOutOfRange: index > pokemonList.length -1
                                        }
            );
          });

          variant.evolutionsIndex.forEach((index) => { //foreach pokemon of the evolution tree (assignation of the evolution tree)
            if (index <= pokemonList.length -1) { //if the pokemon is in the main table
              if (pokemonList[index].variants) { //if the pokemon have a variant, the evolution tree is assigned to its last variant
                pokemonList[index].variants[pokemonList[index].variants.length -1].evolutions = variantEvolutionsTree;
              } else {
                pokemonList[index].evolutions = variantEvolutionsTree;
              }
            }
          });
          
          delete variant.evolutionsIndex;

        }//specific evolution tree

        else if (variant.followEvolution === false){//only this evolution is a regional variant
          evolutionsTree.forEach((index) => {
            //if this is THE variant
            if (index <= pokemonList.length -1 && index == parseInt(pokemon.number)) {
              variant.evolutions.push({
                                      evolutionIndex: index,
                                      names: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].names,
                                      spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : spriteImgURLTemplate + pokemonList[index].variants[0].imgVariantIndex + imgSuffixTemplate,
                                      isOutOfRange: index > pokemonList.length -1
                                      }
              );
            } else {
              variant.evolutions.push({
                                      evolutionIndex: index,
                                      names: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].names,
                                      spriteSrc: spriteImgURLTemplate + index + imgSuffixTemplate,
                                      isOutOfRange: index > pokemonList.length -1
                                      }
                );
              }

          });

        } else { //default (follow parent's evolution tree but with regional variants)
          variant.evolutions.actual = pokemon.evolutions.actual;

          evolutionsTree.forEach((index) => {
            variant.evolutions.push({
                                    evolutionIndex: index,
                                    names: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].names,
                                    spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : spriteImgURLTemplate + pokemonList[index].variants[0].imgVariantIndex + imgSuffixTemplate,
                                    isOutOfRange: index > pokemonList.length -1
                                    }
            );
          });
        }

      });
    }

  });
}//BuildPokemonEvolutions

function BuildUnown () {
  if (pokemonList.length -1 >= 201){
    const unown = pokemonList[201];
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letters.push('exclamation');
    letters.push('question');

    unown.variants = [];
    letters.forEach((c) => {
      const shape = letters.indexOf(c) === letters.length -2 ? '!' : letters.indexOf(c) === letters.length -1 ? '?' : c.toUpperCase();
      unown.variants.push(
                          {
                            selectorName: {EN: shape + ' shape',
                                            ES: 'forma ' + shape,
                                            IT: 'forma ' + shape,
                                            FR: 'forme ' + shape,
                                            DE: shape + '-form',
                                            JA: shape + '型',
                                        roomaji: shape + '-gata'},
                            names: {EN: 'unown - ' + shape,
                                    ES: 'unown - ' + shape,
                                    IT: 'unown - ' + shape,
                                    FR: 'zarbi - ' + shape,
                                    DE: 'icognito - ' + shape,
                                    JA: 'アンノーン ' + shape,
                                roomaji: 'Unknown ' + shape},
                            number: unown.number,
                            imgSrc: {artwork: 'https://img.pokemondb.net/artwork/vector/large/unown-' + c + imgSuffixTemplate,
                                    sprites: {regular: spriteImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                              regularBack: spriteBackImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                              shiny: spriteImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate,
                                              shinyBack: spriteBackImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate
                                            },
                                    types: unown.imgSrc.types
                                    },
                            types: unown.types
                          }
      );
    });
  }
}

function SetupPokemonList (pokemonList) {
  pokemonList.forEach((pokemon, index) => {

    if (index < 10){
      pokemon.number = '000' + index;
    } else if (index < 100){
      pokemon.number = '00' + index;
    } else if (index < 1000){
      pokemon.number = '0' + index;
    }

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

    if (pokemon.variants){
      pokemon.variants.forEach((v) => {
        v.names = {};
      });
    }

    SetPokemonNames(pokemon);

  });
}

function BuildPokemonList (pokemonList) {

  pokemonList.forEach((pokemon) => {
    BuildPokemonImages(pokemon);

    BuildPokemonTypes(pokemon);

    if (pokemon.evolutionsIndex){
      BuildPokemonEvolutions(pokemon.evolutionsIndex);
    }

    if (pokemon.variants){
      BuildPokemonVariants(pokemon);
    }
  });
}

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

SetupPokemonList(pokemonList);

BuildPokemonList(pokemonList);

BuildUnown();
