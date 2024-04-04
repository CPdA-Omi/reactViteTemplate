function PokemonCard({pokemon, language}){

	return(
		<section className={'pokemonCard ' + pokemon.types[0] + 'Type'}>
			<figure className="pokemonSprite">
				{pokemon.spriteSrc ?
				<img src={pokemon.spriteSrc} alt={(language === 'EN' ?
													pokemon.name[0].toLowerCase()
													:
													pokemon.name[1].toLowerCase()) + 'Sprite'}/>
				:
				<p title="No sprite available for this pokemon">???</p>}
			</figure>
			<figure className="pokemonArtwork">
				{pokemon.imgSrc ?
				<img src={pokemon.imgSrc} alt={(language === 'EN' ?
												pokemon.name[0].toLowerCase()
												:
												pokemon.name[1].toLowerCase()) + 'Artwork'}/>
				:
				<p title="No image available for this pokemon">???</p>}
			</figure>
			<div className="pokemonDetails">
				<p className="pokemonName">{(language === 'EN' ?
											pokemon.name[0].charAt(0).toUpperCase() + pokemon.name[0].slice(1)
											:
											pokemon.name[1].charAt(0).toUpperCase() + pokemon.name[1].slice(1))}</p>
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

export default PokemonCard;
