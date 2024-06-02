import BuildPokemonImages from './BuildPokemonImages.jsx'
import BuildPokemonVariants from './BuildPokemonVariants.jsx'
import BuildEvolutions from './BuildEvolutions.jsx'
import BuildPokemonDetails from './BuildPokemonDetails.jsx'

function BuildPokemonList (pokemonList) {
	let regionalFormsNumber = 0;

	pokemonList.forEach((pokemon) => {
		BuildPokemonImages(pokemon);

		if (pokemon.evolutionsIndex){
		  BuildEvolutions(pokemon.evolutionsIndex);
		}

		if (pokemon.variants){
		  BuildPokemonVariants(pokemon);
		  regionalFormsNumber += pokemon.variants.length;
		}

		BuildPokemonDetails(pokemon);

		});
	return regionalFormsNumber;
}

export default BuildPokemonList;
