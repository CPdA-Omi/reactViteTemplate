const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const mainImgURLTemplate = apiURL + "pokemon/other/official-artwork/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const typeImgURLTemplate = apiURL + "types/generation-viii/legends-arceus/"
const imgSuffixTemplate = ".png"


//errors definitions dictionnary
export const errorsDefinitions = {
  missingPokemon:         {EN: 'Pokemon not implemented yet',           FR: 'Pokémon pas encore implémenté'},
  missingRegionalPokemon: {EN: 'Regional variant not implemented yet',  FR: 'Variante régionale pas encore implémentée'},
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
  'alola':   {EN: 'alolan',   FR: 'd\'Alola'},
  'galar':   {EN: 'galarian', FR: 'de Galar'},
  'hisui':   {EN: 'hisuian',  FR: 'de Husui'},
  'paldea':  {EN: 'paldean',  FR: 'de Paldea'},
};


//index of pokemonList which have a variant due to the pokemon gender
const pokemonGenderVariants = [
  3, 12, 20, 25, 26, 41, 42, 44, 45, 64, 65, 84, 85, 97, 111, 112, 118, 119, 123, 129, 130,
  154, 165, 166, 178, 185, 186, 190, 194, 195, 198, 202, 203, 207, 208, 212, 214, 215, 217, 221, 224, 229, 232
];

//evolutions order have to be in crescent evolutions order
export const pokemonList = [
/*0000*/  {name: {EN: 'missingNo.',   FR: 'missingNo.'},    types: ['flying', 'normal']},
/*0001*/  {name: {EN: 'bulbasaur',    FR: 'bulbizarre'},    types: ['grass', 'poison'],             evolutionsIndex: [1, 2, 3]},
/*0002*/  {name: {EN: 'ivysaur',      FR: 'herbizarre'},    types: ['grass', 'poison']},
/*0003*/  {name: {EN: 'venusaur',     FR: 'florizarre'},    types: ['grass', 'poison']},
/*0004*/  {name: {EN: 'charmender',   FR: 'salamèche'},     types: ['fire'],                        evolutionsIndex: [4, 5, 6]},
/*0005*/  {name: {EN: 'charmeleon',   FR: 'reptincel'},     types: ['fire']},
/*0006*/  {name: {EN: 'charizard',    FR: 'dracaufeu'},     types: ['fire', 'flying']},
/*0007*/  {name: {EN: 'squirtle',     FR: 'carapuce'},      types: ['water'],                       evolutionsIndex: [7, 8, 9]},
/*0008*/  {name: {EN: 'wartortle',    FR: 'carabaffe'},     types: ['water']},
/*0009*/  {name: {EN: 'blastoise',    FR: 'tortank'},       types: ['water']},
/*0010*/  {name: {EN: 'caterpie',     FR: 'chenipan'},      types: ['bug'],                         evolutionsIndex: [10, 11, 12]},
/*0011*/  {name: {EN: 'metapod',      FR: 'chrysacier'},    types: ['bug']},
/*0012*/  {name: {EN: 'butterfree',   FR: 'papilusion'},    types: ['bug', 'flying']},
/*0013*/  {name: {EN: 'weedle',       FR: 'aspicot'},       types: ['bug', 'poison'],               evolutionsIndex: [13, 14, 15]},
/*0014*/  {name: {EN: 'kakuna',       FR: 'coconfort'},     types: ['bug', 'poison']},
/*0015*/  {name: {EN: 'beedrill',     FR: 'dardargnan'},    types: ['bug', 'poison']},
/*0016*/  {name: {EN: 'pigdey',       FR: 'roucool'},       types: ['normal', 'flying'],            evolutionsIndex: [16, 17, 18]},
/*0017*/  {name: {EN: 'pidgeotto',    FR: 'roucoups'},      types: ['normal', 'flying']},
/*0018*/  {name: {EN: 'pidgeot',      FR: 'roucarnage'},    types: ['normal', 'flying']},
  
/*0019*/  {name: {EN: 'rattata',      FR: 'rattata'},       types: ['normal'],                      evolutionsIndex: [19, 20],
      variants: [
                  {imgVariantIndex: 10091, regionName: 'alola', types: ['dark', 'normal']}
                ]},

/*0020*/  {name: {EN: 'raticate',     FR: 'rattatac'},      types: ['normal'],
      variants: [
                  {imgVariantIndex: 10092, regionName: 'alola', types: ['dark', 'normal']}
                ]},
/*0021*/  {name: {EN: 'spearow',      FR: 'piafabec'},      types: ['normal', 'flying'],            evolutionsIndex: [21, 22]},
/*0022*/  {name: {EN: 'fearow',       FR: 'rapasdepic'},    types: ['normal', 'flying']},
/*0023*/  {name: {EN: 'ekans',        FR: 'abo'},           types: ['poison'],                      evolutionsIndex: [23, 24]},
/*0024*/  {name: {EN: 'arbok',        FR: 'arbok'},         types: ['poison']},
/*0025*/  {name: {EN: 'pikachu',      FR: 'pikachu'},       types: ['electric'],                    evolutionsIndex: [172, 25, 26]},
  
/*0026*/  {name: {EN: 'raichu',       FR: 'raichu'},        types: ['electric'],
      variants: [
              {imgVariantIndex: 10100, regionName: 'alola', types: ['electric', 'psychic'],
                followEvolution: false}
              ]},

/*0027*/  {name: {EN: 'sandshrew',    FR: 'sabelette'},     types: ['ground'],                      evolutionsIndex: [27, 28],
      variants: [
                {imgVariantIndex: 10101, regionName: 'alola', types: ['ice', 'steel']}
              ]},

/*0028*/  {name: {EN: 'sandslash',    FR: 'sablaireau'},    types: ['ground'],
        variants: [
                  {imgVariantIndex: 10102, regionName: 'alola', types: ['ice', 'steel']}
                ]},

/*0029*/  {name: {EN: 'nidoran ♀',    FR: 'nidoran ♀'},     types: ['poison'],                      evolutionsIndex: [29, 30, 31]},
/*0030*/  {name: {EN: 'nidorina',     FR: 'nidorina'},      types: ['poison']},
/*0031*/  {name: {EN: 'nidoqueen',    FR: 'nidoqueen'},     types: ['poison', 'ground']},
/*0032*/  {name: {EN: 'nidoran ♂',    FR: 'nidoran ♂'},     types: ['poison'],                      evolutionsIndex: [32, 33, 34]},
/*0033*/  {name: {EN: 'nidorino',     FR: 'nidorino'},      types: ['poison']},
/*0034*/  {name: {EN: 'nidoking',     FR: 'nidoking'},      types: ['poison', 'ground']},
/*0035*/  {name: {EN: 'clefairy',     FR: 'mélofée'},       types: ['fairy'],                       evolutionsIndex: [173, 35, 36]},
/*0036*/  {name: {EN: 'clefable',     FR: 'mélodelfe'},     types: ['fairy']},

/*0037*/  {name: {EN: 'vulpix',       FR: 'goupix'},        types: ['fire'],                        evolutionsIndex: [37, 38],
        variants: [
                  {imgVariantIndex: 10103, regionName: 'alola', types: ['ice']}
                ]},

/*0038*/  {name: {EN: 'ninetales',    FR: 'feunard'},       types: ['fire'],
        variants: [
                  {imgVariantIndex: 10104, regionName: 'alola', types: ['ice', 'fairy']}
                ]},

/*0039*/  {name: {EN: 'jigglypuff',   FR: 'rondoudou'},     types: ['normal', 'fairy'],             evolutionsIndex: [174, 39, 40]},
/*0040*/  {name: {EN: 'wigglypuff',   FR: 'grodoudou'},     types: ['normal', 'fairy']},
/*0041*/  {name: {EN: 'zubat',        FR: 'nosferapti'},    types: ['poison', 'flying'],            evolutionsIndex: [41, 42, 169]},
/*0042*/  {name: {EN: 'golbat',       FR: 'nosferalto'},    types: ['poison', 'flying']},
/*0043*/  {name: {EN: 'oddish',       FR: 'mysterbe'},      types: ['grass', 'poison'],             evolutionsIndex: [43, 44, 45, 182]},
/*0044*/  {name: {EN: 'gloom',        FR: 'ortide'},        types: ['grass', 'poison']},
/*0045*/  {name: {EN: 'vileplume',    FR: 'rafflesia'},     types: ['grass', 'poison']},
/*0046*/  {name: {EN: 'paras',        FR: 'paras'},         types: ['bug', 'grass'],                evolutionsIndex: [46, 47]},
/*0047*/  {name: {EN: 'parasect',     FR: 'parasect'},      types: ['bug', 'grass']},
/*0048*/  {name: {EN: 'venonat',      FR: 'mimitoss'},      types: ['bug', 'poison'],               evolutionsIndex: [48, 49]},
/*0049*/  {name: {EN: 'venomoth',     FR: 'aéromite'},      types: ['bug', 'poison']},

/*0050*/  {name: {EN: 'diglet',       FR: 'taupiqueur'},    types: ['ground'],                      evolutionsIndex: [50, 51],
        variants: [
                  {imgVariantIndex: 10105, regionName: 'alola', types: ['ground', 'steel']}
                ]},

/*0051*/  {name: {EN: 'dugtrio',      FR: 'triopikeur'},    types: ['ground'],
        variants: [
                  {imgVariantIndex: 10106, regionName: 'alola', types: ['ground', 'steel']}
                ]},

/*0052*/  {name: {EN: 'meowth',       FR: 'miaouss'},       types: ['normal'],                      evolutionsIndex: [52, 53],
        variants: [
                  {imgVariantIndex: 10107, regionName: 'alola', types: ['dark']},
                  {imgVariantIndex: 10161, regionName: 'galar', types: ['steel'],
                  evolutionsIndex: [52, 863]}
              ]},

/*0053*/  {name: {EN: 'persian',      FR: 'persian'},       types: ['normal'],
        variants: [
                  {imgVariantIndex: 10108, regionName: 'alola', types: ['dark']}
                ]},

/*0054*/  {name: {EN: 'psyduck',      FR: 'psykokwak'},     types: ['water'],                       evolutionsIndex: [54, 55]},
/*0055*/  {name: {EN: 'golduck',      FR: 'akwakwak'},      types: ['water']},
/*0056*/  {name: {EN: 'mankey',       FR: 'férosinge'},     types: ['fighting'],                    evolutionsIndex: [56, 57, 979]},
/*0057*/  {name: {EN: 'primeape',     FR: 'colossinge'},    types: ['fighting']},

/*0058*/  {name: {EN: 'growlithe',    FR: 'caninos'},       types: ['fire'],                        evolutionsIndex: [58, 59],
        variants: [
            {imgVariantIndex: 10229, regionName: 'hisui', types: ['fire', 'rock']}
          ]},

/*0059*/  {name: {EN: 'arcanine',     FR: 'arcanin'},       types: ['fire'],
        variants: [
          {imgVariantIndex: 10230, regionName: 'hisui', types: ['fire', 'rock']}
        ]},

/*0060*/  {name: {EN: 'poliwag',      FR: 'ptitard'},       types: ['water'],                       evolutionsIndex: [60, 61, 62, 186]},
/*0061*/  {name: {EN: 'poliwhirl',    FR: 'têtarte'},       types: ['water']},
/*0062*/  {name: {EN: 'poliwrath',    FR: 'tartard'},       types: ['water', 'fighting']},
/*0063*/  {name: {EN: 'abra',         FR: 'abra'},          types: ['psychic'],                     evolutionsIndex: [63, 64, 65]},
/*0064*/  {name: {EN: 'kadabra',      FR: 'kadabra'},       types: ['psychic']},
/*0065*/  {name: {EN: 'alakazam',     FR: 'alakazam'},      types: ['psychic']},
/*0066*/  {name: {EN: 'machop',       FR: 'machoc'},        types: ['fighting'],                    evolutionsIndex: [66, 67, 68]},
/*0067*/  {name: {EN: 'machoke',      FR: 'machopeur'},     types: ['fighting']},
/*0068*/  {name: {EN: 'machamp',      FR: 'mackogneur'},    types: ['fighting']},
/*0069*/  {name: {EN: 'bellsprout',   FR: 'chétiflor'},     types: ['grass', 'poison'],             evolutionsIndex: [69, 70, 71]},
/*0070*/  {name: {EN: 'weepinbell',   FR: 'boustiflor'},    types: ['grass', 'poison']},
/*0071*/  {name: {EN: 'victreebel',   FR: 'empiflor'},      types: ['grass', 'poison']},
/*0072*/  {name: {EN: 'tentacool',    FR: 'tentacool'},     types: ['water', 'poison'],             evolutionsIndex: [72, 73]},
/*0073*/  {name: {EN: 'tentacruel',   FR: 'tentacruel'},    types: ['water', 'poison']},

/*0074*/  {name: {EN: 'geodude',      FR: 'racaillou'},     types: ['rock', 'ground'],              evolutionsIndex: [74, 75, 76],
        variants: [
                {imgVariantIndex: 10109, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0075*/  {name: {EN: 'graveler',     FR: 'gravalanch'},    types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10110, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0076*/  {name: {EN: 'golem',        FR: 'grolem'},        types: ['rock', 'ground'],
        variants: [
                {imgVariantIndex: 10111, regionName: 'alola', types: ['rock', 'electric']}
              ]},

/*0077*/  {name: {EN: 'ponyta',       FR: 'ponyta'},        types: ['fire'],                      evolutionsIndex: [77, 78],
        variants: [
                {imgVariantIndex: 10162, regionName: 'galar', types: ['psychic']}
              ]},

/*0078*/  {name: {EN: 'rapidash',     FR: 'galopa'},        types: ['fire'],
          variants: [
                {imgVariantIndex: 10163, regionName: 'galar', types: ['psychic', 'fairy']}
              ]},

/*0079*/  {name: {EN: 'slowpoke',     FR: 'ramoloss'},      types: ['water', 'psychic'],          evolutionsIndex: [79, 80, 199],
          variants: [
                {imgVariantIndex: 10164, regionName: 'galar', types: ['psychic']}
              ]},
/*0080*/  {name: {EN: 'slowbro',      FR: 'flagadoss'},     types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10165, regionName: 'galar', types: ['poison', 'psychic']}
              ]},

/*0081*/  {name: {EN: 'magnemite',    FR: 'magnéti'},       types: ['electric', 'steel'],         evolutionsIndex: [81, 82, 462]},
/*0082*/  {name: {EN: 'magneton',     FR: 'magnéton'},      types: ['electric', 'steel']},
/*0083*/  {name: {EN: 'farfetch\'d',  FR:  'canarticho'},   types: ['normal', 'flying'],
          variants: [
                {imgVariantIndex: 10166, regionName: 'galar', types: ['fighting'],
                evolutionsIndex: [83, 865]}
              ]},
/*0084*/  {name: {EN: 'doduo',        FR: 'doduo'},         types: ['normal', 'flying'],          evolutionsIndex: [84, 85]},
/*0085*/  {name: {EN: 'dodrio',       FR: 'dodrio'},        types: ['normal', 'flying']},
/*0086*/  {name: {EN: 'seel',         FR: 'otaria'},        types: ['water'],                     evolutionsIndex: [86, 87]},
/*0087*/  {name: {EN: 'dewgong',      FR: 'lamantine'},     types: ['water', 'ice']},

/*0088*/  {name: {EN: 'grimer',       FR: 'tadmorv'},       types: ['poison'],                    evolutionsIndex: [88, 89],
          variants: [
                  {imgVariantIndex: 10112, regionName: 'alola', types: ['poison', 'dark']}
                ]},

/*0089*/  {name: {EN: 'muk',          FR: 'grotadmorv'},    types: ['poison'],
          variants: [
                  {imgVariantIndex: 10113, regionName: 'alola', types: ['poison', 'dark']}
                ]},

/*0090*/  {name: {EN: 'shellder',     FR: 'kokiyas'},       types: ['water'],                     evolutionsIndex: [90, 91]},
/*0091*/  {name: {EN: 'cloyster',     FR: 'crustabri'},     types: ['water', 'ice']},
/*0092*/  {name: {EN: 'gastly',       FR: 'fantominus'},    types: ['ghost', 'poison'],           evolutionsIndex: [92, 93, 94]},
/*0093*/  {name: {EN: 'haunter',      FR: 'spectrum'},      types: ['ghost', 'poison']},
/*0094*/  {name: {EN: 'gengar',       FR: 'ectoplasma'},    types: ['ghost', 'poison']},
/*0095*/  {name: {EN: 'onix',         FR: 'onix'},          types: ['rock', 'ground'],            evolutionsIndex: [95, 208]},
/*0096*/  {name: {EN: 'drowzee',      FR: 'soporifik'},     types: ['psychic'],                   evolutionsIndex: [96, 97]},
/*0097*/  {name: {EN: 'hypno',        FR: 'hypnomade'},     types: ['psychic']},
/*0098*/  {name: {EN: 'krabby',       FR: 'krabby'},        types: ['water'],                     evolutionsIndex: [98, 99]},
/*0099*/  {name: {EN: 'kingler',      FR: 'krabboss'},      types: ['water']},

/*0100*/  {name: {EN: 'voltorb',      FR: 'voltorbe'},      types: ['electric'],                  evolutionsIndex: [100, 101],
          variants: [
                  {imgVariantIndex: 10231, regionName: 'hisui', types: ['electric', 'grass']}
                ]},

/*0101*/  {name: {EN: 'electrode',    FR: 'électrode'},     types: ['electric'],
          variants: [
                  {imgVariantIndex: 10232, regionName: 'hisui', types: ['electric', 'grass']}
                ]},

/*0102*/  {name: {EN: 'exeggcute',    FR: 'noeunoeuf'},     types: ['grass', 'psychic'],           evolutionsIndex: [102, 103]},

/*0103*/  {name: {EN: 'exeggutor',    FR: 'noadkoko'},      types: ['grass', 'psychic'],
          variants: [
                  {imgVariantIndex: 10114, regionName: 'alola', types: ['grass', 'dragon'],
                    followEvolution: false}
                ]},

/*0104*/  {name: {EN: 'cubone',       FR: 'osselet'},       types: ['ground'],                      evolutionsIndex: [104, 105]},

/*0105*/  {name: {EN: 'marowak',      FR: 'ossatueur'},     types: ['ground'],
          variants: [
                  {imgVariantIndex: 10115, regionName: 'alola', types: ['fire', 'ghost'],
                    followEvolution: false}
                ]},

/*0106*/  {name: {EN: 'hitmonlee',    FR: 'kicklee'},       types: ['fighting'],                    evolutionsIndex: [236, 106, 107, 237]},
/*0107*/  {name: {EN: 'hitmonchan',   FR: 'tygnon'},        types: ['fighting']},
/*0108*/  {name: {EN: 'lickitung',    FR: 'excelangue'},    types: ['normal'],                      evolutionsIndex: [108, 463]},
/*0109*/  {name: {EN: 'koffing',      FR: 'smogo'},         types: ['poison'],                      evolutionsIndex: [109, 110]},

/*0110*/  {name: {EN: 'weezing',      FR: 'smogogo'},       types: ['poison'],
          variants: [
                  {imgVariantIndex: 10167, regionName: 'galar', types: ['poison', 'fairy'],
                    followEvolution: false}
                ]},
/*0111*/  {name: {EN: 'rhyhorn',      FR: 'rhinocorne'},    types: ['ground', 'rock'],              evolutionsIndex: [111, 112, 464]},
/*0112*/  {name: {EN: 'rhydon',       FR: 'rhinoféros'},    types: ['ground', 'rock']},
/*0113*/  {name: {EN: 'chansey',      FR: 'leveinard'},     types: ['normal'],                      evolutionsIndex: [440, 113, 242]},
/*0114*/  {name: {EN: 'tangela',      FR: 'saquedeneu'},    types: ['grass'],                       evolutionsIndex: [114, 465]},
/*0115*/  {name: {EN: 'kangaskhan',   FR: 'kangourex'},     types: ['normal']},
/*0116*/  {name: {EN: 'horsea',       FR: 'hypotrempe'},    types: ['water'],                       evolutionsIndex: [116, 117, 230]},
/*0117*/  {name: {EN: 'seadra',       FR: 'hypocéan'},      types: ['water']},
/*0118*/  {name: {EN: 'goldeen',      FR: 'poissirène'},    types: ['water'],                       evolutionsIndex: [118, 119]},
/*0119*/  {name: {EN: 'seaking',      FR: 'poissoroy'},     types: ['water']},
/*0120*/  {name: {EN: 'staryu',       FR: 'stari'},         types: ['water'],                       evolutionsIndex: [120, 121]},
/*0121*/  {name: {EN: 'starmie',      FR: 'staross'},       types: ['water', 'psychic']},

/*0122*/  {name: {EN: 'mr. Mime',     FR: 'm. Mime'},       types: ['psychic', 'fairy'],            evolutionsIndex: [439, 122],
          variants: [
                {imgVariantIndex: 10168, regionName: 'galar', types: ['ice', 'psychic'],
                  evolutionsIndex: [439, 122, 866]}
              ]},

/*0123*/  {name: {EN: 'scyther',      FR: 'insécateur'},    types: ['bug', 'flying'],               evolutionsIndex: [123, 212, 900]},
/*0124*/  {name: {EN: 'jynx',         FR: 'lippoutou'},     types: ['ice', 'psychic'],              evolutionsIndex: [238, 124]},
/*0125*/  {name: {EN: 'electabuzz',   FR: 'électek'},       types: ['electric'],                    evolutionsIndex: [239, 125, 466]},
/*0126*/  {name: {EN: 'magmar',       FR: 'magmar'},        types: ['fire'],                        evolutionsIndex: [240, 126, 467]},
/*0127*/  {name: {EN: 'pinsir',       FR: 'scarabrute'},    types: ['bug']},

/*0128*/  {name: {EN: 'tauros',       FR: 'tauros'},        types: ['normal'],
            variants: [
                {imgVariantIndex: 10250, regionName: 'paldea', types: ['fighting']}
              ]},

/*0129*/  {name: {EN: 'magikarp',     FR: 'magicarpe'},     types: ['water'],                       evolutionsIndex: [129, 130]},
/*0130*/  {name: {EN: 'gyarados',     FR: 'léviator'},      types: ['water', 'flying']},
/*0131*/  {name: {EN: 'lapras',       FR: 'loklhass'},      types: ['water', 'ice']},
/*0132*/  {name: {EN: 'ditto',        FR: 'métamorph'},     types: ['normal']},
/*0133*/  {name: {EN: 'evee',         FR: 'évoli'},         types: ['normal'],                      evolutionsIndex: [133, 134, 135, 136, 196, 197, 470, 471, 700]},
/*0134*/  {name: {EN: 'vaporeon',     FR: 'aquali'},        types: ['water']},
/*0135*/  {name: {EN: 'jolteon',      FR: 'voltali'},       types: ['electric']},
/*0136*/  {name: {EN: 'flareon',      FR: 'pyroli'},        types: ['fire']},
/*0137*/  {name: {EN: 'porygon',      FR: 'porygon'},       types: ['normal'],                      evolutionsIndex: [137, 233, 474]},
/*0138*/  {name: {EN: 'ominyte',      FR: 'amonita'},       types: ['rock', 'water'],               evolutionsIndex: [138, 139]},
/*0139*/  {name: {EN: 'omastar',      FR: 'amonistar'},     types: ['rock', 'water'],               evolutionsIndex: [140, 141]},
/*0140*/  {name: {EN: 'kabuto',       FR: 'kabuto'},        types: ['rock', 'water']},
/*0141*/  {name: {EN: 'kabutops',     FR: 'kabutops'},      types: ['rock', 'water']},
/*0142*/  {name: {EN: 'aeriodactyl',  FR: 'ptéra'},         types: ['rock', 'flying']},
/*0143*/  {name: {EN: 'snorlax',      FR: 'ronflex'},       types: ['normal'],                      evolutionsIndex: [446, 143]},

/*0144*/  {name: {EN: 'articuno',     FR: 'artikodin'},     types: ['water', 'flying'],
            variants: [
                  {imgVariantIndex: 10169, regionName: 'galar', types: ['psychic', 'flying']}
                ]},

/*0145*/  {name: {EN: 'zapdos',       FR: 'électhor'},      types: ['electric', 'flying'],
            variants: [
                  {imgVariantIndex: 10170, regionName: 'galar', types: ['fighting', 'flying']}
                ]},

/*0146*/  {name: {EN: 'moltres',      FR: 'sulfura'},       types: ['fire', 'flying'],
            variants: [
                  {imgVariantIndex: 10171, regionName: 'galar', types: ['dark', 'flying']}
                ]},

/*0147*/  {name: {EN: 'dratini',      FR: 'minidraco'},     types: ['dragon'],                      evolutionsIndex: [147, 148, 149]},
/*0148*/  {name: {EN: 'dragonair',    FR: 'draco'},         types: ['dragon']},
/*0149*/  {name: {EN: 'dragonite',    FR: 'dracolosse'},    types: ['dragon', 'flying']},
/*0150*/  {name: {EN: 'mewtwo',       FR: 'mewtwo'},        types: ['psychic'],                     evolutionsIndex: [151, 150]},
/*0151*/  {name: {EN: 'mew',          FR: 'mew'},           types: ['psychic']},

//gen2
/*0152*/  {name: {EN: 'chikorita',    FR: 'germignon'},     types: ['grass'],                       evolutionsIndex: [152, 153, 154]},
/*0153*/  {name: {EN: 'bayleef',      FR: 'macronium'},     types: ['grass']},
/*0154*/  {name: {EN: 'meganium',     FR: 'méganium'},      types: ['grass']},
/*0155*/  {name: {EN: 'cyndaquil',    FR: 'héricendre'},    types: ['fire'],                        evolutionsIndex: [155, 156, 157]},
/*0156*/  {name: {EN: 'quilava',      FR: 'feurisson'},     types: ['fire']},

/*0157*/  {name: {EN: 'typhlosion',   FR: 'typhlosion'},    types: ['fire'],
            variants: [
                  {imgVariantIndex: 10233, regionName: 'hisui', types: ['fire', 'ghost'],
                  followEvolution: false}
                ]},

/*0158*/  {name: {EN: 'totodile',     FR: 'kaiminus'},      types: ['water'],                       evolutionsIndex: [158, 159, 160]},
/*0159*/  {name: {EN: 'croconaw',     FR: 'crocodil'},      types: ['water']},
/*0160*/  {name: {EN: 'feraligatr',   FR: 'aligatueur'},    types: ['water']},
/*0161*/  {name: {EN: 'sentret',      FR: 'fouinette'},     types: ['normal'],                      evolutionsIndex: [161, 162]},
/*0162*/  {name: {EN: 'furret',       FR: 'fouinar'},       types: ['normal']},
/*0163*/  {name: {EN: 'hoothoot',     FR: 'hoothoot'},      types: ['normal', 'flying'],            evolutionsIndex: [163, 164]},
/*0164*/  {name: {EN: 'noctowl',      FR: 'noarfang'},      types: ['normal', 'flying']},
/*0165*/  {name: {EN: 'ledyba',       FR: 'coxy'},          types: ['bug', 'flying'],               evolutionsIndex: [165, 166]},
/*0166*/  {name: {EN: 'ledian',       FR: 'coxyclaque'},    types: ['bug', 'flying']},
/*0167*/  {name: {EN: 'spinarak',     FR: 'mimigal'},       types: ['bug', 'poison'],               evolutionsIndex: [167, 168]},
/*0168*/  {name: {EN: 'ariados',      FR: 'migalos'},       types: ['bug', 'poison']},
/*0169*/  {name: {EN: 'crobat',       FR: 'nostenfer'},     types: ['poison', 'flying']},
/*0170*/  {name: {EN: 'chichou',      FR: 'loupio'},        types: ['water', 'electric'],           evolutionsIndex: [170, 171]},
/*0171*/  {name: {EN: 'lanturn',      FR: 'lanturn'},       types: ['water', 'electric']},
/*0172*/  {name: {EN: 'pichu',        FR: 'pichu'},         types: ['electric']},
/*0173*/  {name: {EN: 'cleffa',       FR: 'mélo'},          types: ['fairy']},
/*0174*/  {name: {EN: 'igglypuff',    FR: 'toudoudou'},     types: ['normal', 'fairy']},
/*0175*/  {name: {EN: 'togepi',       FR: 'togepi'},        types: ['fairy'],                       evolutionsIndex: [175, 176, 468]},
/*0176*/  {name: {EN: 'togetic',      FR: 'togetic'},       types: ['fairy', 'flying']},
/*0177*/  {name: {EN: 'natu',         FR: 'natu'},          types: ['psychic', 'flying'],           evolutionsIndex: [177, 178]},
/*0178*/  {name: {EN: 'xatu',         FR: 'xatu'},          types: ['psychic', 'flying']},
/*0179*/  {name: {EN: 'mareep',       FR: 'wattouat'},      types: ['electric'],                    evolutionsIndex: [179, 180, 181]},
/*0180*/  {name: {EN: 'flaaffy',      FR: 'lainergie'},     types: ['electric']},
/*0181*/  {name: {EN: 'ampharos',     FR: 'pharamp'},       types: ['electric']},
/*0182*/  {name: {EN: 'bellossom',    FR: 'joliflor'},      types: ['grass']},
/*0183*/  {name: {EN: 'marill',       FR: 'marill'},        types: ['water', 'fairy'],              evolutionsIndex: [298, 183, 184]},
/*0184*/  {name: {EN: 'azumarill',    FR: 'azumarill'},     types: ['water', 'fairy']},
/*0185*/  {name: {EN: 'sudowooko',    FR: 'simularbre'},    types: ['rock'],                        evolutionsIndex: [438, 185]},
/*0186*/  {name: {EN: 'politoed',     FR: 'tarpaud'},       types: ['water']},
/*0187*/  {name: {EN: 'hoppip',       FR: 'granivol'},      types: ['grass', 'flying'],             evolutionsIndex: [187, 188, 189]},
/*0188*/  {name: {EN: 'skiploom',     FR: 'floravol'},      types: ['grass', 'flying']},
/*0189*/  {name: {EN: 'jumluff',      FR: 'cotovol'},       types: ['grass', 'flying']},
/*0190*/  {name: {EN: 'aipom',        FR: 'capumain'},      types: ['normal'],                      evolutionsIndex: [190, 424]},
/*0191*/  {name: {EN: 'sunkern',      FR: 'tournegrin'},    types: ['grass'],                       evolutionsIndex: [191, 192]},
/*0192*/  {name: {EN: 'sunflora',     FR: 'héliatronc'},    types: ['grass']},
/*0193*/  {name: {EN: 'yamma',        FR: 'yamma'},         types: ['bug', 'flying'],               evolutionsIndex: [193, 469]},

/*0194*/  {name: {EN: 'wooper',       FR: 'axoloto'},       types: ['water', 'ground'],             evolutionsIndex: [194, 195],
          variants: [
                {imgVariantIndex: 10253, regionName: 'paldea', types: ['poison', 'ground'],
                evolutionsIndex: [194, 980]}
              ]},
/*0195*/  {name: {EN: 'quagsire',     FR: 'maraiste'},      types: ['water', 'ground']},
/*0196*/  {name: {EN: 'espeon',       FR: 'mentali'},       types: ['psychic']},
/*0197*/  {name: {EN: 'umbreon',      FR: 'noctali'},       types: ['dark']},
/*0198*/  {name: {EN: 'murkrow',      FR: 'cornèbre'},      types: ['dark', 'flying'],               evolutionsIndex: [198, 430]},

/*0199*/  {name: {EN: 'slowking',     FR: 'roigada'},       types: ['water', 'psychic'],
          variants: [
                {imgVariantIndex: 10172, regionName: 'galar', types: ['poison', 'psychic']}
              ]},
/*0200*/  {name: {EN: 'misdreavus',   FR: 'feuforêve'},      types: ['ghost'],                       evolutionsIndex: [200, 429]},
];

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

function BuildPokemonImages (pokemon) {
  const pokemonNumber = parseInt(pokemon.number);

  if (pokemon.name[0] === 'missingNo.'){
      pokemon.imgSrc = "https://wiki.p-insurgence.com/images/0/09/722.png";
      pokemon.imgShinySrc = "";
    } else {
      pokemon.imgSrc = mainImgURLTemplate + pokemonNumber + imgSuffixTemplate;
      pokemon.imgShinySrc = mainImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;
    }

    pokemon.spriteSrc = spriteImgURLTemplate + pokemonNumber + imgSuffixTemplate;
    pokemon.spriteShinySrc = spriteImgURLTemplate + 'shiny/' + pokemonNumber + imgSuffixTemplate;

    if (pokemonGenderVariants.includes(pokemonNumber)){
      pokemon.spriteFemaleSrc = spriteImgURLTemplate + 'female/' + pokemonNumber + imgSuffixTemplate;
      pokemon.spriteFemaleShinySrc = spriteImgURLTemplate + 'shiny/female/' + pokemonNumber + imgSuffixTemplate;
    }
}

function BuildPokemonTypes (pokemon) {
  pokemon.typesImgSrc = [];
  
  pokemon.types.forEach((type) => {
    pokemon.typesImgSrc.push(typeImgURLTemplate + pokemonTypes.indexOf(type) + imgSuffixTemplate);
  });
}

function BuildPokemonVariants (pokemon) {
  if (pokemon.variants){
    pokemon.variants.forEach((variant) => {
      variant.number = pokemon.number;
      variant.name['EN'] = regionalFormsNames[variant.regionName]['EN'] + ' ' + pokemon.name['EN'].charAt(0).toUpperCase() + pokemon.name['EN'].slice(1);
      variant.name['FR'] = pokemon.name['FR'] + ' ' + regionalFormsNames[variant.regionName]['FR'];
                      
      delete variant.regionName;

      variant.imgSrc = mainImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
      variant.spriteSrc = spriteImgURLTemplate + variant.imgVariantIndex + imgSuffixTemplate;
      delete variant.imgVariantIndex;

      if (pokemonGenderVariants.includes(variant.number)){
        variant.spriteFemaleSrc = spriteImgURLTemplate + 'female/' + variant.imgVariantIndex + imgSuffixTemplate;
      }

      BuildPokemonTypes(variant);
    });
  }
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
                                name: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].name,
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
            const evolutionName = index <= pokemonList.length -1 && pokemonList[index].variants ? //if the pokemon is in the main table and have regional variants
            pokemonList[index].variants[pokemonList[index].variants.length -1].name //name of the last variant of the pokemon;
            :
            index > pokemonList.length -1 ? errorsDefinitions['missingPokemon'] : pokemonList[index].name;

            const spriteNumber = index <= pokemonList.length -1 && pokemonList[index].variants ? //if the pokemon is in the main table and have regional variants
            pokemonList[index].variants[pokemonList[index].variants.length -1].imgVariantIndex //imgVariantIndex of the last variant of the pokemon
            :
            index;
            variantEvolutionsTree.push({
                                        evolutionIndex: index,
                                        name: evolutionName,
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
                                      name: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].name,
                                      spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : spriteImgURLTemplate + pokemonList[index].variants[0].imgVariantIndex + imgSuffixTemplate,
                                      isOutOfRange: index > pokemonList.length -1
                                      }
              );
            } else {
              variant.evolutions.push({
                                      evolutionIndex: index,
                                      name: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].name,
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
                                    name: (index > pokemonList.length -1) ? errorsDefinitions['missingRegionalPokemon'] : pokemonList[index].variants[0].name,
                                    spriteSrc: index > pokemonList.length -1 ? errorsDefinitions['missingRegionalPokemon'] : spriteImgURLTemplate + pokemonList[index].variants[0].imgVariantIndex + imgSuffixTemplate,
                                    isOutOfRange: index > pokemonList.length -1
                                    }
            );
          });
        }

      });
    }

  });
}

function BuildPokemonList (pokemonList) {

  pokemonList.forEach((pokemon) => {
    const pokemonNumber = pokemonList.indexOf(pokemon);

    if (pokemonNumber < 10){
      pokemon.number = '000' + pokemonNumber;
    } else if (pokemonNumber < 100){
      pokemon.number = '00' + pokemonNumber;
    } else if (pokemonNumber < 1000){
      pokemon.number = '0' + pokemonNumber;
    }

    if (pokemon.variants){
      pokemon.variants.forEach((v) => {
        v.name = {};
      });
    }
  });

  pokemonList.forEach((pokemon) => {

    BuildPokemonImages(pokemon);

    BuildPokemonTypes(pokemon);

    if (pokemon.evolutionsIndex){
      BuildPokemonEvolutions(pokemon.evolutionsIndex);
    }

    BuildPokemonVariants(pokemon);

  });
}

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

BuildPokemonList(pokemonList);
