import PropTypes from "prop-types";

function PokemonCard({pokemon}){

	return(
		<section className={'pokemonCard ' + pokemon.types[0] + 'Type'}>
			<figure>
				{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name.toLowerCase()}/> : <p title="No image available for this pokemon">???</p>}
				<figcaption><h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1></figcaption>
			</figure>
			<div className="pokemonDetails">
				<h2>n°{pokemon.number}</h2>
				<div className="pokemonDetailsTypes">
					<strong>Types:</strong>
					<div className="pokemonDetailsTypesList">
						{pokemon.typesImgSrc.map((typeURL) => (
						<img key={pokemon.types[pokemon.typesImgSrc.indexOf(typeURL)] + "Type"}
						src={typeURL} alt={pokemon.types[pokemon.typesImgSrc.indexOf(typeURL)] + "TypeIcon"}/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string
	}).isRequired
}

export default PokemonCard;
