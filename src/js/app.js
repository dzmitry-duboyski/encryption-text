import {getEncriptingText} from "./getEncriptingText.js";
 import {characterList} from "./constants/constants.js";

const view = {
  showEndcriptionText: function (endcriptionText = '') {
    const elEndcriptionText = document.getElementById('endcriptionText');
    elEndcriptionText.innerHTML = endcriptionText;
  },
};

const model = {
  text: '',
  encripting: function(inputText) {
   // const inputText = document.querySelector("#textareaNotEncriptionText").value;
    const isEmptyInputText = !inputText;
     if(isEmptyInputText) {
       return alert("введите текст");
     }
     this.text = getEncriptingText(inputText).join('; ');
     return this.text;
  },
}

const controller = {
  handleClick: function () {
    const inputText = document.querySelector("#textareaNotEncriptionText").value;
    let result = model.encripting(inputText);
    view.showEndcriptionText(result);


  }
};

 (function(){
   const app = {
     init: function () {
      this.main();
      this.event();
     },
     main: function () {
       //someCode
     },
     event: function () {
       const el = document.getElementById('buttonStartEncryptyon');
       el.onclick = controller.handleClick;
     },
   };
   app.init();
 }());


// const BTNstartEnctypyonText = document.querySelector('#buttonStartEncryptyon');
// const tempCode = document.querySelector('#endcriptionText');

// const startEncriptingText = () => {
//   const inputText = document.querySelector("#textareaNotEncriptionText").value;
//   const isEmptyInputText = !inputText;
//   if(isEmptyInputText) {
//     return alert("введите текст");
//   }
//   console.log(inputText[0].charCodeAt());
//   //console.log(getEncriptingText(inputText));
//   tempCode.textContent = getEncriptingText(inputText).join('; ');
//   console.log(isSymolIncludedInTheLibrary(inputText[0]));
// }

//BTNstartEnctypyonText.addEventListener('click',startEncriptingText);

const isSymolIncludedInTheLibrary = (checkSymbol) => {
  const checkSymbolCode = checkSymbol.charCodeAt();
  //console.log('checkSymbol= ' + checkSymbol);
  //console.log(characterList.hasOwnProperty(checkSymbolCode));
  const isIncluded = characterList.hasOwnProperty(checkSymbolCode);
  return isIncluded;
}