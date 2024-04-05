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

			<div className="pokemonDescription">
				<p className="pokemonName">{(language === 'EN' ?
											pokemon.name[0].charAt(0).toUpperCase() + pokemon.name[0].slice(1)
											:
											pokemon.name[1].charAt(0).toUpperCase() + pokemon.name[1].slice(1))}</p>
				<p className="pokemonNumber">{(language === 'FR' ? 'n°' : '#') + pokemon.number}</p>
				<div className="pokemonDescriptionTypes">
					<strong className="sectionTitle">Types:</strong>
					<div className="pokemonDescriptionTypesList">
						{pokemon.typesImgSrc.map((typeURL) => (
						<img key={pokemon.types[pokemon.typesImgSrc.indexOf(typeURL)] + "Type"}
						src={typeURL} alt={pokemon.types[pokemon.typesImgSrc.indexOf(typeURL)] + "TypeIcon"}/>
						))}
					</div>
				</div>
			</div>

			<details className="pokemonDetailedDescription">
				<summary accessKey="d">{(language === 'EN' ? 'View more' : 'Voir plus') + '...'}</summary>
				{pokemon.imgShinySrc ?
				<section className="pokemonShinySection">
					<strong className="sectionTitle">{language === 'EN' ? 'Shiny variant' : 'Version Shiny'}</strong>
					<div>
						<img src={pokemon.imgShinySrc} alt={(language === 'EN' ?
															pokemon.name[0].toLowerCase()
															:
															pokemon.name[1].toLowerCase()) + 'ShinyArtwork'}/>
						<img src={pokemon.spriteShinySrc} alt={(language === 'EN' ?
																pokemon.name[0].toLowerCase()
																:
																pokemon.name[1].toLowerCase()) + 'ShinySprite'}/>
					</div>
				</section>
				:
				<p></p>}
				{pokemon.spriteFemaleSrc ?
				<section className="pokemonFemaleSection">
					<strong className="sectionTitle">{language === 'EN' ? 'Female variant' : 'Version femelle'}</strong>
					<div>
						<img src={pokemon.spriteFemaleSrc} title='Female Sprite' alt={(language === 'EN' ?
																						pokemon.name[0].toLowerCase()
																						:
																						pokemon.name[1].toLowerCase()) + 'FemaleSprite'}/>

						<img src={pokemon.spriteFemaleShinySrc} title='Female Shiny Sprite' alt={(language === 'EN' ?
																									pokemon.name[0].toLowerCase()
																									:
																									pokemon.name[1].toLowerCase()) + 'FemaleShinySprite'}/>
					</div>
				</section>
				:
				<p></p>}
			</details>

		</section>
	);
}

export default PokemonCard;
