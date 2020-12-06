import {getEncriptingText} from "./getEncriptingText.js";

const view = {
  showEndcriptionText: function (endcriptionText = '') {
    const elEndcriptionText = document.getElementById('endcriptionText');
    elEndcriptionText.innerHTML = endcriptionText;
  },
};

const model = {
  text: '',
  encripting: function(inputText) {
    const isEmptyInputText = !inputText;
     if(isEmptyInputText) {
       return alert("введите текст");
     }
     this.text = getEncriptingText(inputText).join('');
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
      this.event();
     },
     event: function () {
       const el = document.getElementById('buttonStartEncryptyon');
       el.onclick = controller.handleClick;
     },
   };
   app.init();
 }());
