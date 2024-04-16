function StatsDisplay ({
	pokemonListLength,
	regionalFormsNumber,
	languagesSet
}) {
	return (
		<section className="statsDisplay">
			<details>
				<summary>Details</summary>
				<strong className="sectionTitle">Omicro's Pokedex:</strong>
				<ul>
					<li>Pokémons implemented: {pokemonListLength -1}</li>
					<li>Regional forms implemented: {regionalFormsNumber}</li>
					<li>Languages implemented: {languagesSet}</li>
				</ul>
			</details>
		</section>
	);
}

export default StatsDisplay
