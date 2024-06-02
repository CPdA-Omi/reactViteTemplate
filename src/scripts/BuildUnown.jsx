const apiURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/"
const spriteImgURLTemplate = apiURL + "pokemon/"
const spriteBackImgURLTemplate = spriteImgURLTemplate + "back/"
const imgSuffixTemplate = ".png"

function BuildUnown () {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letters.push('exclamation');
  letters.push('question');

  const unownVariants = [];
  letters.forEach((c) => {
    const shape = letters.indexOf(c) === letters.length -2 ? '!' : letters.indexOf(c) === letters.length -1 ? '?' : c.toUpperCase();
    unownVariants.push(
                        {
                          selectorName: {EN: shape + ' shape',
                                          ES: 'forma ' + shape,
                                          IT: 'forma ' + shape,
                                          FR: 'forme ' + shape,
                                          DE: shape + '-form',
                                          JA: shape + '型',
                                      roomaji: shape + '-gata'},
                          names: {EN: 'unown - ' + shape,
                                  ES: 'unown - ' + shape,
                                  IT: 'unown - ' + shape,
                                  FR: 'zarbi - ' + shape,
                                  DE: 'icognito - ' + shape,
                                  JA: 'アンノーン ' + shape,
                              roomaji: 'Unknown ' + shape},
                          number: '0201',
                          imgSrc: {artwork: 'https://img.pokemondb.net/artwork/vector/large/unown-' + c + imgSuffixTemplate,
                                  sprites: {frontDefault: spriteImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                            backDefault:  spriteBackImgURLTemplate + '201-' + c + imgSuffixTemplate,
                                            frontShiny:   spriteImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate,
                                            backShiny:    spriteBackImgURLTemplate + 'shiny/201-' + c + imgSuffixTemplate
                                          },
                                  },
                        }
    );
  });
  return unownVariants;
}

export default BuildUnown;
