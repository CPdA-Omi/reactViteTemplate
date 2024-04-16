function NavBar({
	pokemonIndex, pokemonListLength,
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

				<p>
				<input type="number"
				onChange={e => handleClickIndex(e.target.value)}
				value={pokemonIndex}
				min="1" max={pokemonListLength -1}/>
				{'/ ' + (pokemonListLength-1).toString()}</p>

				{pokemonIndex < pokemonListLength -1 ?
				<button accessKey="n" onClick={handleClickIncrement}>{'>'}</button>
				:
				<button disabled>{'>'}</button>}

				{pokemonIndex < pokemonListLength -2 ?
				<button onClick={() => handleClickIndex(pokemonListLength -1)}>{'>>'}</button>
				:
				<button disabled>{'>>'}</button>}
			</div>
		</nav>
	);
}

export default NavBar;
