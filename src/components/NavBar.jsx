function NavBar({pokemonIndex, pokemonList, handleClickDecrement, handleClickIncrement, handleClickIndex}){

	return(
		<div>
			{pokemonIndex > 0 ?
			<button accessKey="p" onClick={handleClickDecrement}>Previous</button>
			:
			<button disabled>Previous</button>}

			{pokemonIndex < pokemonList.length -1 ?
			<button accessKey="n" onClick={handleClickIncrement}>Next</button>
			:
			<button disabled>Next</button>}

			<div>
				{pokemonList.map((i) => (
					<button key={i.name} onClick={() => handleClickIndex(pokemonList.indexOf(i))}>
					{i.name.charAt(0).toUpperCase() + i.name.slice(1)}
					</button>
				))}
			</div>
		</div>
	);
}

export default NavBar;
