function PokemonCard({
	pokemon, language,
	handleClickIndex,
	pokemonVariant, handleClickVariant	
}){

	let currentPokemon = '';
	if (pokemonVariant === -1){
		currentPokemon = pokemon;
	} else {
		currentPokemon = pokemon.variants[pokemonVariant];
	}

	return(
		<section className={'pokemonCard ' + currentPokemon.types[0] + 'Type'}>

			<div className="pokemonCardTopNavigation">
				{pokemon.variants ?
				<div className="pokemonRegionalVariantsSelector">
					<img onClick={() => handleClickVariant(-1)}
						title={pokemon.name[language].charAt(0).toUpperCase() + pokemon.name[language].slice(1)}
						src={pokemon.spriteSrc} alt={pokemon.name[language].toLowerCase() + 'Sprite'}/>
					{pokemon.variants.map((variant) => (
						<img key={pokemon.name[language].toLowerCase() + 'RegionalVariant' + pokemon.variants.indexOf(variant)}
						onClick={() => handleClickVariant(pokemon.variants.indexOf(variant))}
						title={variant.name[language].charAt(0).toUpperCase() + variant.name[language].slice(1)}
						src={variant.spriteSrc} alt={variant.name[language].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
					))}
				</div>
				:
				<div className="placeHolderDivBecauseThereIsNoRegionalVariantsHere"></div>
				}
				<div className="pokemonEvolutionsSelector">
					{currentPokemon.evolutions ?
						<>
						{currentPokemon.evolutions.map((evolution) => (
							<img key={evolution.spriteSrc + 'Evolution'/*have to be replaced later by name[language]*/}
							onClick={() => handleClickIndex(evolution.isOutOfRange ? parseInt(currentPokemon.number) : evolution.evolutionIndex)}
							title={evolution.name[language].charAt(0).toUpperCase() + evolution.name[language].slice(1)}
							src={evolution.spriteSrc} alt={evolution.name[language].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
						))}
						</>
					:
						<>
						<img src={currentPokemon.spriteSrc} alt={currentPokemon.name[language].toLowerCase() + 'Sprite'}/>
						</>
					}
				</div>
			</div>

			<figure className="pokemonArtwork">
				<img src={currentPokemon.imgSrc} alt={currentPokemon.name[language].toLowerCase() + 'Artwork'}/>
			</figure>

			<div className="pokemonDescription">
				<p className="pokemonName">{currentPokemon.name[language].charAt(0).toUpperCase() + currentPokemon.name[language].slice(1)}</p>
				<p className="pokemonNumber">{(language === 'FR' ? 'n°' : '#') + pokemon.number}</p>
				<div className="pokemonDescriptionTypesList">
					{currentPokemon.typesImgSrc.map((typeURL) => (
					<img key={currentPokemon.types[currentPokemon.typesImgSrc.indexOf(typeURL)] + "Type"}
					src={typeURL} alt={currentPokemon.types[currentPokemon.typesImgSrc.indexOf(typeURL)] + "TypeIcon"}/>
					))}
				</div>
			</div>

			<details className="pokemonDetailedDescription">
				<summary accessKey="d">{(language === 'EN' ? 'View more' : 'Voir plus') + '...'}</summary>
				{currentPokemon.imgShinySrc ?
				<section className="pokemonShinySection">
					<strong className="sectionTitle">{language === 'EN' ? 'Shiny' : 'Chromatique'}</strong>
					<div>
						<img src={currentPokemon.imgShinySrc} alt={currentPokemon.name[language].toLowerCase() + 'ShinyArtwork'}/>
						<img src={currentPokemon.spriteShinySrc} alt={currentPokemon.name[language].toLowerCase() + 'ShinySprite'}/>
					</div>
				</section>
				:
				<p></p>}
				{currentPokemon.spriteFemaleSrc ?
				<section className="pokemonFemaleSection">
					<strong className="sectionTitle">{language === 'EN' ? 'Female' : 'Femelle'}</strong>
					<div>
						<img src={currentPokemon.spriteFemaleSrc} title='Female Sprite' alt={currentPokemon.name[language].toLowerCase().replace(/\s/g, '') + 'FemaleSprite'}/>

						<img src={currentPokemon.spriteFemaleShinySrc} title='Female Shiny Sprite' alt={currentPokemon.name[language].toLowerCase().replace(/\s/g, '') + 'FemaleShinySprite'}/>
					</div>
				</section>
				:
				<p></p>}
			</details>

		</section>
	);
}

export default PokemonCard;
