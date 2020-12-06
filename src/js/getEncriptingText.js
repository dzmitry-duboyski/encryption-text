import {characterList} from './constants/constants.js';

/**
 * @param {max} - the maximum is equal to the length of the array (arrayAlternativeCharacters)
 * @returns  returns an integer, from min to max
 */
const getRandomIndex = (min = 0, max) => {
  max = max -1; 
  let rand = min + Math.random() * (max + 1 - min);
  console.log('getRandomIndex=' + Math.floor(rand));
  return Math.floor(rand);
}


export function getEncriptingText(inputText) {
  const arrCodeSymbol = inputText.split('').map((el) => el.charCodeAt())
  // console.log("arrCodeSymbol: "+arrCodeSymbol);
  // console.log(arrCodeSymbol);

  const updateText = arrCodeSymbol.map((el)=> {
    //el - это код символа
    // console.log(characterList.hasOwnProperty(el));
    const isIncludedInCharacterList = characterList.hasOwnProperty(el);
    if(isIncludedInCharacterList){
      
      //если символ есть в базе
      const arrayAlternativeCharacters = characterList[`${el}`];
      const lengthArrayAlternativeCharacters = Array(...characterList[`${el}`]).length;
      console.log(lengthArrayAlternativeCharacters);
      const randomIndex = getRandomIndex(0,lengthArrayAlternativeCharacters);
      const newCharacter = arrayAlternativeCharacters[randomIndex];
      console.log(newCharacter);
      return 'XXX';
    }
    return el;
  })



  // result = result.split(';')
  // console.log(result)
  // console.log(result[0])
  // console.log(typeof(result))
  // console.log(isSymolIncludedInTheLibrary(String(result[0])));

  console.log(updateText)
  return updateText;
}
