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

    const isIncludedInCharacterList = characterList.hasOwnProperty(el);
    if(isIncludedInCharacterList){
      
      const arrayAlternativeCharacters = characterList[`${el}`];
      const lengthArrayAlternativeCharacters = Array(...characterList[`${el}`]).length;
      const randomIndex = getRandomIndex(0,lengthArrayAlternativeCharacters);
      const newCharacter = arrayAlternativeCharacters[randomIndex];
      return `*${newCharacter}`;
    }
    
    const oldCharacter = String(el);
    return oldCharacter;
  })

  const resultText = updateTextCodeSymbols.map((el) => {
    const isAlternativeSymbols = String(el).includes('*')
    if(isAlternativeSymbols) {
      const outputEl = el.replace('*','')
      const newWord = String.fromCodePoint(Number(outputEl));
      return `<span class="alternativeSimbol">${newWord}</span>`;
    }
    const oldWord = String.fromCodePoint(Number(el));
    return `<span class="normalSimbol">${oldWord}</span>`;
  })

  return resultText;
}
