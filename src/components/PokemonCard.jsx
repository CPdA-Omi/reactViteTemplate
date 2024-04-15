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
						title={pokemon.names[language].charAt(0).toUpperCase() + pokemon.names[language].slice(1)}
						src={pokemon.imgSrc.sprites.regular} alt={pokemon.names['EN'].toLowerCase() + 'Sprite'}/>
					{pokemon.variants.map((variant) => (
						<img key={pokemon.names[language].toLowerCase() + 'RegionalVariant' + pokemon.variants.indexOf(variant)}
						onClick={() => handleClickVariant(pokemon.variants.indexOf(variant))}
						title={variant.names[language].charAt(0).toUpperCase() + variant.names[language].slice(1)}
						src={variant.imgSrc.sprites.regular} alt={variant.names['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
					))}
				</div>
				: pokemon.variants && pokemon.variants.length >= 3 ?
					<div className="tooMuchVariantsSelector">
						<select onChange={e => handleClickVariant(e.target.value)}
						name="tooMuchVariantsSelector" id="too-Much-Variants-Selector">
							<option value='-1'>{pokemon.names[language].charAt(0).toUpperCase() + pokemon.names[language].slice(1)}</option>
							{pokemon.variants.map((v, i) => (
								<option key={pokemon.names['EN'] + pokemon.variants.indexOf(v) + 'Form'}
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
							<img key={evolution.spriteSrc + 'Evolution'/*have to be replaced later by "names[language].toLowerCase()"*/}
							onClick={() => handleClickIndex(evolution.isOutOfRange ? parseInt(currentPokemon.number) : evolution.evolutionIndex)}
							title={evolution.names[language].charAt(0).toUpperCase() + evolution.names[language].slice(1)}
							className="clickableImage"
							src={evolution.spriteSrc} alt={evolution.names['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
						))}
					</>
					:
					<>
						<img title={currentPokemon.names[language].charAt(0).toUpperCase() + currentPokemon.names[language].slice(1)}
						src={currentPokemon.imgSrc.sprites.regular} alt={currentPokemon.names['EN'].toLowerCase() + 'Sprite'}/>
					</>
					}
				</div>
			</section>

			<figure className="pokemonArtwork">
				<img src={currentPokemon.imgSrc.artwork} alt={currentPokemon.names[language].toLowerCase() + 'Artwork'}/>
			</figure>

			<div className="pokemonDescription">
				{language === 'JA' ?
				<p className="pokemonRoomajiName">{currentPokemon.names['roomaji'].charAt(0).toUpperCase() + currentPokemon.names['roomaji'].slice(1)}</p>
				: ''}
				<p className="pokemonName">{currentPokemon.names[language].charAt(0).toUpperCase() + currentPokemon.names[language].slice(1)}</p>
				<p className="pokemonNumber">{(language === 'FR' ? 'n°' : language === 'DE' ? 'Nr. ' : '#') + pokemon.number}</p>
				<div className="pokemonDescriptionTypesList">
					{currentPokemon.imgSrc.types.map((typeURL) => (
					<img key={currentPokemon.types[currentPokemon.imgSrc.types.indexOf(typeURL)] + "Type"}
					src={typeURL} alt={currentPokemon.types[currentPokemon.imgSrc.types.indexOf(typeURL)] + "TypeIcon"}/>
					))}
				</div>
			</div>

			{parseInt(currentPokemon.number) !== 0 ?

			<details className="pokemonDetailedDescription">
				<summary accessKey="d">{(language === 'FR' ? 'Voir plus' :
										language === 'DE' ? 'Mehr sehen' :
										language === 'ES' ? 'Ver más' :
										language === 'CH' ? '更多資訊' :
										language === 'JA' ? 'もっと見る' :
										language === 'KO' ? '추가 정보' :
										'See more') + '...'}</summary>
				{currentPokemon.imgSrc.shinyArtwork ?
				<section className="pokemonShinySection">
					<strong className="sectionTitle">{language === 'FR' ? 'Chromatique' :
													language === 'DE' ? 'Schillernde' :
													language === 'JA' ? '色違い' :
													'Shiny'}</strong>
					<figure>
						<img src={currentPokemon.imgSrc.shinyArtwork} alt={currentPokemon.names['EN'].toLowerCase() + 'ShinyArtwork'}/>
						<figcaption>{(language === 'DE' ? 'Schillernde ' :
									language === 'JA' ? '色違い ' :
									language !== 'FR' ? 'Shiny ' :
									'') + currentPokemon.names[language].charAt(0).toUpperCase() + currentPokemon.names[language].slice(1) + (language === 'FR' ? ' chromatique ' : '')}</figcaption>
					</figure>
				</section>
				:
				<></>}

				<strong className="sectionTitle">Sprites</strong>
				<section className="pokemonSpritesSection">
					<div>
						<div>
							<img title={language === 'FR' ? 'Sprite normal' : 'Regular Sprite'}
							src={currentPokemon.imgSrc.sprites.regular}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'Sprite'}/>
							<img title={language === 'FR' ? 'Sprite normal de dos': 'Regular Back Sprite'}
							src={currentPokemon.imgSrc.sprites.regularBack} 
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'BackSprite'}/>

							{pokemonVariant === -1 || parseInt(pokemon.number) === 201 ?
							<>
							<img title={language === 'FR' ? 'Sprite chromatique' : 'Shiny Sprite'}
							src={currentPokemon.imgSrc.sprites.shiny}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'ShinySprite'}/>
							<img title={language === 'FR' ? 'Sprite chromatique de dos' : 'Shiny Back Sprite'}
							src={currentPokemon.imgSrc.sprites.shinyBack}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'ShinyBackSprite'}/>
							</>
							:
							<></>}
						</div>
						{currentPokemon.imgSrc.sprites.regularFemale ?
						<div>
							<img title={language === 'FR' ? 'Sprite femelle' : 'Female Sprite'}
							src={currentPokemon.imgSrc.sprites.regularFemale}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleSprite'}/>
							<img title={language === 'FR' ? 'Sprite femelle de dos' : 'Female Back Sprite'}
							src={currentPokemon.imgSrc.sprites.regularBackFemale}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleBackSprite'}/>

							<img title={language === 'FR' ? 'Sprite femelle chromatique' : 'Female Shiny Sprite'}
							src={currentPokemon.imgSrc.sprites.shinyFemale}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleShinySprite'}/>
							<img title={language === 'FR' ? 'Sprite femelle chromatique de dos' : 'Female Shiny Back Sprite'}
							src={currentPokemon.imgSrc.sprites.shinyBackFemale}
							alt={currentPokemon.names['EN'].toLowerCase().replace(/\s/g, '') + 'FemaleShinyBackSprite'}/>
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
