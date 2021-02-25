import { getEncriptingText } from "./getEncriptingText.js";
/**
 * copying to the clipboard (implemented using the library Clipboard.JS)
 */


export class App {
  constructor() {
    this.text = '';
    this.endcriptionText = '';
  }

  init() {
    this.autoCheckNewText()
  }

  static showEndcriptionText(endcriptionText = '') {
    const elEndcriptionText = document.querySelector('#endcriptionText');
    elEndcriptionText.innerHTML = endcriptionText;
  }


  startEncripting() {
    const inputText = document.querySelector("#textareaNotEncryptedText").value;

    if(!inputText){
     return console.error('введите текст');
    }
    this.endcriptionText = getEncriptingText(inputText).join('');
    App.endcriptionText = this.endcriptionText;
    App.showEndcriptionText(this.endcriptionText);
  }

  /**
   * paste from clipboard to textarea
   */
  readFromClipboard(){
    navigator.clipboard.readText()
    .then(text => {
      // `text` - contains text read from the clipboard
      document.querySelector('.encoder-block-start__textarea').value = text;
    })
    .catch(err => {
      // the user may not have given permission to read data from the clipboard
      console.log('Something went wrong', err);
    });
  }


  /**
   * recursively checking for text changes in textarea
   */
  autoCheckNewText(){

    const oldText = String(this.text);
    const newText = String(document.querySelector('#textareaNotEncryptedText').value);

    if(oldText === newText){
      return setTimeout(() => {
        this.autoCheckNewText();
      }, 200);
    } else {
      this.text = newText

      this.startEncripting(this.text);
      console.log()
      setTimeout(() => {
      this.autoCheckNewText();
    }, 200);
    }
  }

  showMessageCopied(){
    const elem = document.querySelector('.copy-status')
    elem.classList.remove('copy-status_hidden');
    setTimeout(()=>{
      elem.classList.add('copy-status_hidden')
    },100)
  }

  showMessageInserted(){
    const elem = document.querySelector('.insert-status')
    elem.classList.remove('insert-status_hidden');
    setTimeout(()=>{
      elem.classList.add('insert-status_hidden')
    },100)
  }
}
