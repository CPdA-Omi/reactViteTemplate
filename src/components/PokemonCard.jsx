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

export default PokemonCard;
