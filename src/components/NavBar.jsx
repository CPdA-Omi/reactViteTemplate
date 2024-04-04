function NavBar({pokemonIndex, pokemonList, handleClickDecrement, handleClickIncrement, handleClickIndex}){

	return(
		<section className="pokemonCardNavigation">
			{pokemonIndex > 1 ?
			<button accessKey="p" onClick={handleClickDecrement}>Previous</button>
			:
			<button disabled>Previous</button>}

			{pokemonIndex < pokemonList.length -1 ?
			<button accessKey="n" onClick={handleClickIncrement}>Next</button>
			:
			<button disabled>Next</button>}
		</section>
	);
}

export default NavBar;
