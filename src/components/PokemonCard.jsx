import PropTypes from "prop-types";

function PokemonCard({pokemon}){

	return(
		<section className={'pokemonCard ' + pokemon.types[0] + 'Type'}>
			<figure className="pokemonSprite">
				{pokemon.spriteSrc ? <img src={pokemon.spriteSrc} alt={pokemon.name.toLowerCase() + 'Sprite'}/> : <p title="No sprite available for this pokemon">???</p>}
			</figure>
			<figure className="pokemonArtwork">
				{pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name.toLowerCase() + 'Artwork'}/> : <p title="No image available for this pokemon">???</p>}
			</figure>
			<div className="pokemonDetails">
				<p className="pokemonName">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
				<p className="pokemonNumber">#{pokemon.number}</p>
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
