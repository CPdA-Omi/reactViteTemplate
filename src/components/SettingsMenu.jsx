function SettingsMenu ({language, handleClickLanguageSwitch}){
	return (
		<div className="settingsMenu">
			<button accessKey="l" onClick={handleClickLanguageSwitch}>{language}</button>
		</div>
	);
}

export default SettingsMenu;
