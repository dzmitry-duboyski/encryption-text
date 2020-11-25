import {getEncriptingText} from "./getEncriptingText.js";
import {characterList} from "./constants/constants.js";

const BTNstartEnctypyonText = document.querySelector('#buttonStartEncryptyon');
const tempCode = document.querySelector('#tempCode');

const startEncriptingText = () => {
  const inputText = document.querySelector("#textareaNotEncriptionText").value;
  const isEmptyInputText = !inputText;
  if(isEmptyInputText) {
    return alert("введите текст");
  }
  console.log(inputText[0].charCodeAt());
  //console.log(getEncriptingText(inputText));
  tempCode.textContent = getEncriptingText(inputText).join('; ');
  console.log(isSymolIncludedInTheLibrary(inputText[0]));
}

BTNstartEnctypyonText.addEventListener('click',startEncriptingText);

const isSymolIncludedInTheLibrary = (checkSymbol) => {
  const checkSymbolCode = checkSymbol.charCodeAt();
  //console.log('checkSymbol= ' + checkSymbol);
  //console.log(characterList.hasOwnProperty(checkSymbolCode));
  const isIncluded = characterList.hasOwnProperty(checkSymbolCode);
  return isIncluded;
}