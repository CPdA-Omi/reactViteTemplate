function NavBar({
	pokemonIndex, pokemonList,
	handleClickDecrement, handleClickIncrement, handleClickIndex,
	language, handleClickLanguageSwitch
}){

	return(
		<nav>
			<div className="pokemonCardNavigation">
				{pokemonIndex > 2 ?
				<button onClick={() => handleClickIndex(1)}>{'<<'}</button>
				:
				<button disabled>{'<<'}</button>}

				{pokemonIndex > 1 ?
				<button accessKey="p" onClick={handleClickDecrement}>{'<'}</button>
				:
				<button disabled>{'<'}</button>}

				<p>{pokemonIndex + '/' + (pokemonList.length-1).toString()}</p>

				{pokemonIndex < pokemonList.length -1 ?
				<button accessKey="n" onClick={handleClickIncrement}>{'>'}</button>
				:
				<button disabled>{'>'}</button>}

				{pokemonIndex < pokemonList.length -2 ?
				<button onClick={() => handleClickIndex(pokemonList.length -1)}>{'>>'}</button>
				:
				<button disabled>{'>>'}</button>}
			</div>
		</nav>
	);
}

export default NavBar;
