function NavBar({pokemonIndex, pokemonList, handleClickDecrement, handleClickIncrement}){

	return(
		<div>
			{pokemonIndex > 0 ?
			<button onClick={handleClickDecrement}>Previous</button>
			:
			<button disabled>Previous</button>}

			{pokemonIndex < pokemonList.length -1 ?
			<button onClick={handleClickIncrement}>Next</button>
			:
			<button disabled>Next</button>}
		</div>
	);
}

export default NavBar;
