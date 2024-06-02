import axios from 'axios';

import { pokemonList } from './PokedexData.jsx'

import errorsDefinitions from '../data/errorsDefinitions.json'

function BuildEvolutions (evolutionsTree) {
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
    evolutionsTree.forEach((i) => {
      pokemon.evolutions.push({});
    });
      
      evolutionsTree.forEach((index) => {
        axios
        .get('https://pokeapi.co/api/v2/pokemon/' + index)
        .then((response) => {
        pokemon.evolutions[evolutionsTree.indexOf(index)] = {
                                                              evolutionIndex: index,
                                                              names: (index > pokemonList.length -1) ? errorsDefinitions['missingPokemon'] : pokemonList[index].names,
                                                              spriteSrc: response.data.sprites['front_default'],
                                                              isOutOfRange: index > pokemonList.length -1
                                                              };
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
}//BuildEvolutions

export default BuildEvolutions;
