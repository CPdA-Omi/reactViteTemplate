function NavBar({pokemonIndex, pokemonList, handleClickDecrement, handleClickIncrement, handleClickIndex}){

	return(
		<div>
			{pokemonList.map((i) => (
				<button key={i.name} onClick={() => handleClickIndex(pokemonList.indexOf(i))}>
				{i.name.charAt(0).toUpperCase() + i.name.slice(1)}
				</button>
			))}
		</div>
	);
}

export default NavBar;
