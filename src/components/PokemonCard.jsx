import PropTypes from "prop-types";

function PokemonCard({pokemon}){

	return(
		<>
			<figure>
				{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p title="No image available for this pokemon">???</p>}
				<figcaption>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</figcaption>
			</figure>
		</>
	);
}

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string
	}).isRequired
}

export default PokemonCard;
