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

//evolutions order have to be in crescent evolutions order
export const pokemonList = [
/*0000*/  {},
/*0001*/  {evolutionsIndex: [1, 2, 3]},
/*0002*/  {},
/*0003*/  {},
/*0004*/  {evolutionsIndex: [4, 5, 6]},
/*0005*/  {},
/*0006*/  {},
/*0007*/  {evolutionsIndex: [7, 8, 9]},
/*0008*/  {},
/*0009*/  {},
/*0010*/  {evolutionsIndex: [10, 11, 12]},
/*0011*/  {},
/*0012*/  {},
/*0013*/  {evolutionsIndex: [13, 14, 15]},
/*0014*/  {},
/*0015*/  {},
/*0016*/  {evolutionsIndex: [16, 17, 18]},
/*0017*/  {},
/*0018*/  {},
  
/*0019*/  {evolutionsIndex: [19, 20],
      variants: [
                  {imgVariantIndex: 10091, regionName: 'alola'}
                ]},

/*0020*/  {variants: [
                  {imgVariantIndex: 10092, regionName: 'alola'}
                ]},
/*0021*/  {evolutionsIndex: [21, 22]},
/*0022*/  {},
/*0023*/  {evolutionsIndex: [23, 24]},
/*0024*/  {},
/*0025*/  {evolutionsIndex: [172, 25, 26]},
  
/*0026*/  {variants: [
              {imgVariantIndex: 10100, regionName: 'alola', followEvolution: false}
              ]},

/*0027*/  {evolutionsIndex: [27, 28],
      variants: [
                {imgVariantIndex: 10101, regionName: 'alola'}
              ]},

/*0028*/  {types: ['ground'],
        variants: [
                  {imgVariantIndex: 10102, regionName: 'alola'}
                ]},

/*0029*/  {evolutionsIndex: [29, 30, 31]},
/*0030*/  {},
/*0031*/  {},
/*0032*/  {evolutionsIndex: [32, 33, 34]},
/*0033*/  {},
/*0034*/  {},
/*0035*/  {evolutionsIndex: [173, 35, 36]},
/*0036*/  {},

/*0037*/  {evolutionsIndex: [37, 38],
        variants: [
                  {imgVariantIndex: 10103, regionName: 'alola'}
                ]},

/*0038*/  {variants: [
                  {imgVariantIndex: 10104, regionName: 'alola'}
                ]},

/*0039*/  {evolutionsIndex: [174, 39, 40]},
/*0040*/  {},
/*0041*/  {evolutionsIndex: [41, 42, 169]},
/*0042*/  {},
/*0043*/  {evolutionsIndex: [43, 44, 45, 182]},
/*0044*/  {},
/*0045*/  {},
/*0046*/  {evolutionsIndex: [46, 47]},
/*0047*/  {},
/*0048*/  {evolutionsIndex: [48, 49]},
/*0049*/  {},

/*0050*/  {evolutionsIndex: [50, 51],
        variants: [
                  {imgVariantIndex: 10105, regionName: 'alola'}
                ]},

/*0051*/  {variants: [
                  {imgVariantIndex: 10106, regionName: 'alola'}
                ]},

/*0052*/  {evolutionsIndex: [52, 53],
        variants: [
                  {imgVariantIndex: 10107, regionName: 'alola'},
                  {imgVariantIndex: 10161, regionName: 'galar', evolutionsIndex: [52, 863]}
              ]},

/*0053*/  {variants: [
                  {imgVariantIndex: 10108, regionName: 'alola'}
                ]},

/*0054*/  {evolutionsIndex: [54, 55]},
/*0055*/  {},
/*0056*/  {evolutionsIndex: [56, 57, 979]},
/*0057*/  {},

/*0058*/  {evolutionsIndex: [58, 59],
        variants: [
            {imgVariantIndex: 10229, regionName: 'hisui'}
          ]},

/*0059*/  {variants: [
          {imgVariantIndex: 10230, regionName: 'hisui'}
        ]},

/*0060*/  {evolutionsIndex: [60, 61, 62, 186]},
/*0061*/  {},
/*0062*/  {},
/*0063*/  {evolutionsIndex: [63, 64, 65]},
/*0064*/  {},
/*0065*/  {},
/*0066*/  {evolutionsIndex: [66, 67, 68]},
/*0067*/  {},
/*0068*/  {},
/*0069*/  {evolutionsIndex: [69, 70, 71]},
/*0070*/  {},
/*0071*/  {},
/*0072*/  {evolutionsIndex: [72, 73]},
/*0073*/  {},

/*0074*/  {evolutionsIndex: [74, 75, 76],
        variants: [
                {imgVariantIndex: 10109, regionName: 'alola'}
              ]},

/*0075*/  {variants: [
                {imgVariantIndex: 10110, regionName: 'alola'}
              ]},

/*0076*/  {variants: [
                {imgVariantIndex: 10111, regionName: 'alola'}
              ]},

/*0077*/  {evolutionsIndex: [77, 78],
        variants: [
                {imgVariantIndex: 10162, regionName: 'galar'}
              ]},

/*0078*/  {variants: [
                {imgVariantIndex: 10163, regionName: 'galar'}
              ]},

/*0079*/  {evolutionsIndex: [79, 80, 199],
          variants: [
                {imgVariantIndex: 10164, regionName: 'galar'}
              ]},
/*0080*/  {variants: [
                {imgVariantIndex: 10165, regionName: 'galar'}
              ]},

/*0081*/  {evolutionsIndex: [81, 82, 462]},
/*0082*/  {},
/*0083*/  {evolutionsIndex: [83],
          variants: [
                {imgVariantIndex: 10166, regionName: 'galar', evolutionsIndex: [83, 865]}
              ]},
/*0084*/  {evolutionsIndex: [84, 85]},
/*0085*/  {},
/*0086*/  {evolutionsIndex: [86, 87]},
/*0087*/  {},

/*0088*/  {evolutionsIndex: [88, 89],
          variants: [
                  {imgVariantIndex: 10112, regionName: 'alola'}
                ]},

/*0089*/  {
          variants: [
                  {imgVariantIndex: 10113, regionName: 'alola'}
                ]},

/*0090*/  {evolutionsIndex: [90, 91]},
/*0091*/  {},
/*0092*/  {evolutionsIndex: [92, 93, 94]},
/*0093*/  {},
/*0094*/  {},
/*0095*/  {evolutionsIndex: [95, 208]},
/*0096*/  {evolutionsIndex: [96, 97]},
/*0097*/  {},
/*0098*/  {evolutionsIndex: [98, 99]},
/*0099*/  {},

/*0100*/  {evolutionsIndex: [100, 101],
          variants: [
                  {imgVariantIndex: 10231, regionName: 'hisui'}
                ]},

/*0101*/  {variants: [
                  {imgVariantIndex: 10232, regionName: 'hisui'}
                ]},

/*0102*/  {evolutionsIndex: [102, 103]},

/*0103*/  {variants: [
                  {imgVariantIndex: 10114, regionName: 'alola', followEvolution: false}
                ]},

/*0104*/  {evolutionsIndex: [104, 105]},

/*0105*/  {variants: [
                  {imgVariantIndex: 10115, regionName: 'alola', followEvolution: false}
                ]},

/*0106*/  {evolutionsIndex: [236, 106, 107, 237]},
/*0107*/  {},
/*0108*/  {evolutionsIndex: [108, 463]},
/*0109*/  {evolutionsIndex: [109, 110]},

/*0110*/  {variants: [
                  {imgVariantIndex: 10167, regionName: 'galar', followEvolution: false}
                ]},

/*0111*/  {evolutionsIndex: [111, 112, 464]},
/*0112*/  {},
/*0113*/  {evolutionsIndex: [440, 113, 242]},
/*0114*/  {evolutionsIndex: [114, 465]},
/*0115*/  {},
/*0116*/  {evolutionsIndex: [116, 117, 230]},
/*0117*/  {},
/*0118*/  {evolutionsIndex: [118, 119]},
/*0119*/  {},
/*0120*/  {evolutionsIndex: [120, 121]},
/*0121*/  {},

/*0122*/  {evolutionsIndex: [439, 122],
          variants: [
                {imgVariantIndex: 10168, regionName: 'galar', evolutionsIndex: [439, 122, 866]}
              ]},

/*0123*/  {evolutionsIndex: [123, 212, 900]},
/*0124*/  {evolutionsIndex: [238, 124]},
/*0125*/  {evolutionsIndex: [239, 125, 466]},
/*0126*/  {evolutionsIndex: [240, 126, 467]},
/*0127*/  {},

/*0128*/  {variants: [
                {imgVariantIndex: 10250, regionName: 'paldea'}
              ]},

/*0129*/  {evolutionsIndex: [129, 130]},
/*0130*/  {},
/*0131*/  {},
/*0132*/  {},
/*0133*/  {evolutionsIndex: [133, 134, 135, 136, 196, 197, 470, 471, 700]},
/*0134*/  {},
/*0135*/  {},
/*0136*/  {},
/*0137*/  {evolutionsIndex: [137, 233, 474]},
/*0138*/  {evolutionsIndex: [138, 139]},
/*0139*/  {evolutionsIndex: [140, 141]},
/*0140*/  {},
/*0141*/  {},
/*0142*/  {},
/*0143*/  {evolutionsIndex: [446, 143]},

/*0144*/  {variants: [
                  {imgVariantIndex: 10169, regionName: 'galar'}
                ]},

/*0145*/  {variants: [
                  {imgVariantIndex: 10170, regionName: 'galar'}
                ]},

/*0146*/  {variants: [
                  {imgVariantIndex: 10171, regionName: 'galar'}
                ]},

/*0147*/  {evolutionsIndex: [147, 148, 149]},
/*0148*/  {},
/*0149*/  {},
/*0150*/  {evolutionsIndex: [151, 150]},
/*0151*/  {},

//gen2
/*0152*/  {evolutionsIndex: [152, 153, 154]},
/*0153*/  {},
/*0154*/  {},
/*0155*/  {evolutionsIndex: [155, 156, 157]},
/*0156*/  {},

/*0157*/  {variants: [
                  {imgVariantIndex: 10233, regionName: 'hisui', followEvolution: false}
                ]},

/*0158*/  {evolutionsIndex: [158, 159, 160]},
/*0159*/  {},
/*0160*/  {},
/*0161*/  {evolutionsIndex: [161, 162]},
/*0162*/  {},
/*0163*/  {evolutionsIndex: [163, 164]},
/*0164*/  {},
/*0165*/  {evolutionsIndex: [165, 166]},
/*0166*/  {},
/*0167*/  {evolutionsIndex: [167, 168]},
/*0168*/  {},
/*0169*/  {},
/*0170*/  {evolutionsIndex: [170, 171]},
/*0171*/  {},
/*0172*/  {},
/*0173*/  {},
/*0174*/  {},
/*0175*/  {evolutionsIndex: [175, 176, 468]},
/*0176*/  {},
/*0177*/  {evolutionsIndex: [177, 178]},
/*0178*/  {},
/*0179*/  {evolutionsIndex: [179, 180, 181]},
/*0180*/  {},
/*0181*/  {},
/*0182*/  {},
/*0183*/  {evolutionsIndex: [298, 183, 184]},
/*0184*/  {},
/*0185*/  {evolutionsIndex: [438, 185]},
/*0186*/  {},
/*0187*/  {evolutionsIndex: [187, 188, 189]},
/*0188*/  {},
/*0189*/  {},
/*0190*/  {evolutionsIndex: [190, 424]},
/*0191*/  {evolutionsIndex: [191, 192]},
/*0192*/  {},
/*0193*/  {evolutionsIndex: [193, 469]},

/*0194*/  {evolutionsIndex: [194, 195],
          variants: [
                {imgVariantIndex: 10253, regionName: 'paldea', evolutionsIndex: [194, 980]}
              ]},
/*0195*/  {},
/*0196*/  {},
/*0197*/  {},
/*0198*/  {evolutionsIndex: [198, 430]},

/*0199*/  {variants: [
                {imgVariantIndex: 10172, regionName: 'galar'}
              ]},

/*0200*/  {evolutionsIndex: [200, 429]},
/*0201*/  {},
];

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

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
}

function SetupPokemonTypes (pokemon) {
  if (pokemonList.indexOf(pokemon) === 0){
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

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

function BuildPokemonImages (pokemon) {
  const pokemonNumber = parseInt(pokemon.number);

  if (pokemonList.indexOf(pokemon) === 0){
    pokemon.imgSrc.artwork = "https://wiki.p-insurgence.com/images/0/09/722.png";
    
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
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + index)
        .then((response) => {
        pokemon.evolutions.push({
                                evolutionIndex: index,
                                names: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].names,
                                spriteSrc: response.data.sprites['front_default'],
                                isOutOfRange: index > pokemonList.length -1
                                });
        });
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
            axios
            .get('https://pokeapi.co/api/v2/pokemon/' + spriteNumber)
            .then((response) => {
            variantEvolutionsTree.push({
                                        evolutionIndex: index,
                                        names: evolutionNames,
                                        spriteSrc: response.data.sprites['front_default'],
                                        isOutOfRange: index > pokemonList.length -1
                                        });
            });
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
              axios
              .get('https://pokeapi.co/api/v2/pokemon/' + pokemonList[index].variants[0].imgVariantIndex)
              .then((response) => {
              variant.evolutions.push({
                                      evolutionIndex: index,
                                      names: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].names,
                                      spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : response.data.sprites['front_default'],
                                      isOutOfRange: index > pokemonList.length -1
                                      });
              });
            } else {
              axios
              .get('https://pokeapi.co/api/v2/pokemon/' + index)
              .then((response) => {
              variant.evolutions.push({
                                      evolutionIndex: index,
                                      names: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].names,
                                      spriteSrc: response.data.sprites['front_default'],
                                      isOutOfRange: index > pokemonList.length -1
                                      });
              });
            }

          });

        } else { //default (follow parent's evolution tree but with regional variants)
          variant.evolutions.actual = pokemon.evolutions.actual;

          evolutionsTree.forEach((index) => {
            axios
            .get('https://pokeapi.co/api/v2/pokemon/' + pokemonList[index].variants[0].imgVariantIndex)
            .then((response) => {
            variant.evolutions.push({
                                    evolutionIndex: index,
                                    names: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].names,
                                    spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : response.data.sprites['front_default'],
                                    isOutOfRange: index > pokemonList.length -1
                                    });
            });
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
                                    sprites: {frontDefault: spriteImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                              backDefault:  spriteBackImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                              frontShiny:   spriteImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate,
                                              backShiny:    spriteBackImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate
                                            },
                                    },
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

    pokemon.imgSrc = {sprites: {}};

    if (pokemon.variants){
      pokemon.variants.forEach((v) => {
        v.names = {};
        v.imgSrc = {sprites: {}};
      });
    }

    SetPokemonNames(pokemon);
    SetupPokemonTypes(pokemon);

  });
}

function BuildPokemonList (pokemonList) {

  pokemonList.forEach((pokemon) => {
    BuildPokemonImages(pokemon);

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
