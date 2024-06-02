import axios from 'axios';

import SetupPokemonList from './SetupPokemonList.jsx'
import BuildPokemonList from './BuildPokemonList.jsx'

import BuildUnown from './BuildUnown.jsx'

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
/*0139*/  {},
/*0140*/  {evolutionsIndex: [140, 141]},
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
/*0202*/  {evolutionsIndex: [360, 202]},
/*0203*/  {evolutionsIndex: [203, 981]},
/*0204*/  {evolutionsIndex: [204, 205]},
/*0205*/  {},
/*0206*/  {evolutionsIndex: [206, 982]},
/*0207*/  {evolutionsIndex: [207, 472]},
/*0208*/  {},
/*0209*/  {evolutionsIndex: [209, 210]},
/*0210*/  {},

/*0211*/  {evolutionsIndex: [211],
          variants: [
                  {imgVariantIndex: 10234, regionName: 'hisui', evolutionsIndex: [211, 904]}
              ]},

/*0212*/  {},
/*0213*/  {},
/*0214*/  {},

/*0215*/  {evolutionsIndex: [215, 461],
          variants: [
                  {imgVariantIndex: 10235, regionName: 'hisui', evolutionsIndex: [215, 903]}
              ]},

/*0216*/  {evolutionsIndex: [216, 217, 901]},
/*0217*/  {},
/*0218*/  {evolutionsIndex: [218, 219]},
/*0219*/  {},
/*0220*/  {evolutionsIndex: [220, 221, 473]},
/*0221*/  {},

/*0222*/  {evolutionsIndex: [222],
          variants: [
                  {imgVariantIndex: 10173, regionName: 'galar', evolutionsIndex: [222, 864]}
                ]},

/*0223*/  {evolutionsIndex: [223, 224]},
/*0224*/  {},
/*0225*/  {},
/*0226*/  {evolutionsIndex: [458, 226]},
/*0227*/  {},
/*0228*/  {evolutionsIndex: [228, 229]},
/*0229*/  {},
/*0230*/  {},
/*0231*/  {evolutionsIndex: [231, 232]},
/*0232*/  {},
/*0233*/  {},
/*0234*/  {evolutionsIndex: [234, 899]},
/*0235*/  {},
/*0236*/  {},
/*0237*/  {},
/*0238*/  {},
/*0239*/  {},
/*0240*/  {},
/*0241*/  {},
/*0242*/  {},
/*0243*/  {},
/*0244*/  {},
/*0245*/  {},
/*0246*/  {evolutionsIndex: [246, 247, 248]},
/*0247*/  {},
/*0248*/  {},
/*0249*/  {},
/*0250*/  {},
/*0251*/  {},
];

/*===================================================================================================*/
/*===================================================================================================*/
/*===================================================================================================*/

SetupPokemonList(pokemonList);

export let regionalFormsNumber = BuildPokemonList(pokemonList);

pokemonList[201].variants = BuildUnown();
