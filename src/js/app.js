import {getEncriptingText} from "./getEncriptingText.js";

const view = {
  showEndcriptionText: function (endcriptionText = '') {
    const elEndcriptionText = document.getElementById('endcriptionText');
    elEndcriptionText.innerHTML = endcriptionText;
  },
  showMyModal: function () {
    $('#myModal').modal('show');
    this.hiheMyModal();
  },
  hiheMyModal: function () {
    const hiheMyModal = () => $('#myModal').modal('hide'); 
    setTimeout(hiheMyModal, 1000);
  }
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
  handleClickEncryption: function () {
    const inputText = document.querySelector("#textareaNotEncriptionText").value;
    let result = model.encripting(inputText);
    view.showEndcriptionText(result);
  },
  handleClickCopyText: function() {
    const outputText = document.querySelector("#endcriptionText").innerText;
    const outputTextArea = document.querySelector("#outputTextArea");
    outputTextArea.value = outputText;
    console.log(outputText)
    outputTextArea.select();
    document.execCommand("copy");
    
    view.showMyModal();
  }
};

 (function(){
   const app = {
     init: function () {
      this.event();
     },
     event: function () {
       const elementStart = document.getElementById('buttonStartEncryptyon');
       elementStart.onclick = controller.handleClickEncryption;
       
       const elementCopy = document.getElementById('endcriptionText');
       elementCopy.onclick = controller.handleClickCopyText;
     },
   };
   app.init();
 }());
