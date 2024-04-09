function PokemonCard({
	pokemon, language,
	handleClickIndex,
	pokemonVariant, handleClickVariant	
}){

	let currentPokemon = '';
	if (parseInt(pokemonVariant) === -1){
		currentPokemon = pokemon;
	} else {
		currentPokemon = pokemon.variants[pokemonVariant];
	}

	return(
		<article className={'pokemonCard ' + currentPokemon.types[0] + 'Type'}>

			<section className="pokemonCardTopNavigation">
				{pokemon.variants && pokemon.variants.length < 3 ?
				<div className="pokemonRegionalVariantsSelector">
					<img onClick={() => handleClickVariant(-1)}
						title={pokemon.name[language].charAt(0).toUpperCase() + pokemon.name[language].slice(1)}
						src={pokemon.imgSrc.sprites.regular} alt={pokemon.name['EN'].toLowerCase() + 'Sprite'}/>
					{pokemon.variants.map((variant) => (
						<img key={pokemon.name[language].toLowerCase() + 'RegionalVariant' + pokemon.variants.indexOf(variant)}
						onClick={() => handleClickVariant(pokemon.variants.indexOf(variant))}
						title={variant.name[language].charAt(0).toUpperCase() + variant.name[language].slice(1)}
						src={variant.imgSrc.sprites.regular} alt={variant.name['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
					))}
				</div>
				: pokemon.variants && pokemon.variants.length >= 3 ?
					<div className="tooMuchVariantsSelector">
						<select onChange={e => handleClickVariant(e.target.value)}
						name="tooMuchVariantsSelector" id="too-Much-Variants-Selector">
							<option value='-1'>{pokemon.name[language].charAt(0).toUpperCase() + pokemon.name[language].slice(1)}</option>
							{pokemon.variants.map((v, i) => (
								<option key={pokemon.name['EN'] + pokemon.variants.indexOf(v) + 'Form'}
								value={pokemon.variants.indexOf(v)}>
								{v.selectorName[language].charAt(0).toUpperCase() + v.selectorName[language].slice(1)}
								</option>
							))}
						</select>
					</div>
				:
				<div className="placeHolderDivBecauseThereIsNoRegionalVariantsHere"></div>
				}
				<div className="pokemonEvolutionsSelector">
					{currentPokemon.evolutions ?
					<>
						{currentPokemon.evolutions.map((evolution) => (
							<img key={evolution.spriteSrc + 'Evolution'/*have to be replaced later by "name[language].toLowerCase()"*/}
							onClick={() => handleClickIndex(evolution.isOutOfRange ? parseInt(currentPokemon.number) : evolution.evolutionIndex)}
							title={evolution.name[language].charAt(0).toUpperCase() + evolution.name[language].slice(1)}
							className="clickableImage"
							src={evolution.spriteSrc} alt={evolution.name['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
						))}
					</>
					:
					<>
						<img title={currentPokemon.name[language].charAt(0).toUpperCase() + currentPokemon.name[language].slice(1)}
						src={currentPokemon.imgSrc.sprites.regular} alt={currentPokemon.name['EN'].toLowerCase() + 'Sprite'}/>
					</>
					}
				</div>
			</section>

			<figure className="pokemonArtwork">
				<img src={currentPokemon.imgSrc.artwork} alt={currentPokemon.name[language].toLowerCase().replace(/\s/g, '') + 'Artwork'}/>
			</figure>

			<div className="pokemonDescription">
				<p className="pokemonName">{currentPokemon.name[language].charAt(0).toUpperCase() + currentPokemon.name[language].slice(1)}</p>
				<p className="pokemonNumber">{(language === 'FR' ? 'n°' : '#') + pokemon.number}</p>
				<div className="pokemonDescriptionTypesList">
					{currentPokemon.imgSrc.types.map((typeURL) => (
					<img key={currentPokemon.types[currentPokemon.imgSrc.types.indexOf(typeURL)] + "Type"}
					src={typeURL} alt={currentPokemon.types[currentPokemon.imgSrc.types.indexOf(typeURL)] + "TypeIcon"}/>
					))}
				</div>
			</div>

			{parseInt(currentPokemon.number) !== 0 ?

			<details className="pokemonDetailedDescription">
				<summary accessKey="d">{(language === 'EN' ? 'View more' : 'Voir plus') + '...'}</summary>
				{currentPokemon.imgSrc.shinyArtwork ?
				<section className="pokemonShinySection">
					<strong className="sectionTitle">{language === 'EN' ? 'Shiny' : 'Chromatique'}</strong>
					<figure>
						<img src={currentPokemon.imgSrc.shinyArtwork} alt={currentPokemon.name['EN'].toLowerCase() + 'ShinyArtwork'}/>
						<figcaption>{(language === 'EN' ? 'Shiny ' : '') + currentPokemon.name[language].charAt(0).toUpperCase() + currentPokemon.name[language].slice(1) + (language === 'FR' ? ' chromatique ' : '')}</figcaption>
					</figure>
				</section>
				:
				<></>}

				<strong className="sectionTitle">Sprites</strong>
				<section className="pokemonSpritesSection">
					<div>
						<div>
							<img title={language === 'EN' ? 'Regular Sprite' : 'Sprite normal'}
							src={currentPokemon.imgSrc.sprites.regular}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
							<img title={language === 'EN' ? 'Regular Back Sprite' : 'Sprite normal de dos'}
							src={currentPokemon.imgSrc.sprites.regularBack} 
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'BackSprite'}/>

							{pokemonVariant === -1 || parseInt(pokemon.number) === 201 ?
							<>
							<img title={language === 'EN' ? 'Shiny Sprite' : 'Sprite chromatique'}
							src={currentPokemon.imgSrc.sprites.shiny}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'ShinySprite'}/>
							<img title={language === 'EN' ? 'Shiny Back Sprite' : 'Sprite chromatique de dos'}
							src={currentPokemon.imgSrc.sprites.shinyBack}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'ShinyBackSprite'}/>
							</>
							:
							<></>}
						</div>
						{currentPokemon.imgSrc.sprites.regularFemale ?
						<div>
							<img title={language === 'EN' ? 'Female Sprite' : 'Sprite femelle'}
							src={currentPokemon.imgSrc.sprites.regularFemale}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleSprite'}/>
							<img title={language === 'EN' ? 'Female Back Sprite' : 'Sprite femelle de dos'}
							src={currentPokemon.imgSrc.sprites.regularBackFemale}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleBackSprite'}/>

							<img title={language === 'EN' ? 'Female Shiny Sprite' : 'Sprite femelle chromatique'}
							src={currentPokemon.imgSrc.sprites.shinyFemale}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleShinySprite'}/>
							<img title={language === 'EN' ? 'Female Shiny Back Sprite' : 'Sprite femelle chromatique de dos'}
							src={currentPokemon.imgSrc.sprites.shinyBackFemale}
							alt={currentPokemon.name['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleShinyBackSprite'}/>
						</div>
						:
						<></>}
					</div>
				</section>
			</details>
			:
			<></>}

		</article>
	);
}

export default PokemonCard;
