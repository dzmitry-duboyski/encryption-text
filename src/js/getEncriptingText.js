import {characterList} from './constants/constants.js';

/**
 * @param {max} - the maximum is equal to the length of the array (arrayAlternativeCharacters)
 * @returns  returns an integer, from min to max
 */
const getRandomIndex = (min = 0, max) => {
  max = max -1; 
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

/**
 * @returns  "*" an asterisk in the returned text means that 
 * the character has been replaced with an alternate
 */
export function getEncriptingText(inputText) {
  const arrCodeSymbol = inputText.split('').map((el) => el.charCodeAt())

  const updateTextCodeSymbols = arrCodeSymbol.map((el)=> {
    //el - это код символа
    const isIncludedInCharacterList = characterList.hasOwnProperty(el);
    if(isIncludedInCharacterList){
      
      const arrayAlternativeCharacters = characterList[`${el}`];
      const lengthArrayAlternativeCharacters = Array(...characterList[`${el}`]).length;
      // console.log(lengthArrayAlternativeCharacters);
      const randomIndex = getRandomIndex(0,lengthArrayAlternativeCharacters);
      const newCharacter = arrayAlternativeCharacters[randomIndex];
      // console.log(newCharacter);
      return `*${newCharacter}`;
    }
    const oldCharacter = String(el);
    return oldCharacter;
  })

  // result = result.split(';')
  // console.log(result)
  // console.log(result[0])
  // console.log(typeof(result))
  // console.log(isSymolIncludedInTheLibrary(String(result[0])));

  console.log(updateTextCodeSymbols)

  const resultText = updateTextCodeSymbols.map((el,idx) => {
    const isAlternativeSymbols = String(el).includes('*')
    if(isAlternativeSymbols) {
      const outputEl = el.replace('*','')
      console.log(outputEl)
      const newWord = String.fromCodePoint(Number(outputEl));
      console.log(newWord)
      return `<span class="alternativeSimbol">${newWord}</span>`;
    }
    console.log(isAlternativeSymbols)
    const oldWord = String.fromCodePoint(Number(el));
    return `<span class="normalSimbol">${oldWord}</span>`;
  })
 // console.log( resultText.join())
//  console.log(typeof(resultText))
//  const res = Array(...resultText).join("");
//  console.log(res)
  return resultText;
}
