import {App} from './js/app.js';
import './style/main.scss';
import {Language} from './js/LanguageSwitcher/Language.js';

const languageSwither = new Language();
languageSwither.init();

const app = new App();
app.init();

/**
 * copying to the clipboard (implemented using the library Clipboard.JS)
 */

const clickHandler = (e) => {
  e.preventDefault();
  const element = e.target;
  
  const elementsHeaderEncoderEnd = ['encoder-block-end__header', 'encoder-block-end__header-text', 'copy-status'];
  const isClickOnEncoderBlockEnd = element.className.split(' ').filter((el) => {
      return elementsHeaderEncoderEnd.includes(el)
  }).length;

  const elementsHeaderEncoderStart = ['encoder-block-start__header', 'encoder-block-start__header-text', 'insert-status'];
  const isClickOnEncoderBlockStart = element.className.split(' ').filter((el) => {
      return elementsHeaderEncoderStart.includes(el)
  }).length;

  const elenentsBTNCleanStart = ['btn-clear-start', 'btn-clear-start__img'];
  const isClickOnBTNCleanStart = element.className.split(' ').filter((el) => {
      return elenentsBTNCleanStart.includes(el)
  }).length;

  const elenentsBTNCopyEnd = ['btn-copy-end', 'btn-copy__img'];
  const isClickOnBTNCopyEnd = element.className.split(' ').filter((el) => {
      return elenentsBTNCopyEnd.includes(el)
  }).length;



  if(element.className == 'scrollup__image'){
    document.querySelector('body').scrollIntoView({behavior: "smooth", block: 'start'})
  }

  if(element.dataset.menuitem == 'docs'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(element.dataset.menuitem == 'api'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(element.dataset.menuitem == 'donate') {
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(element.dataset.menuitem == 'gitHub') {
    document.location.href = "https://github.com/dzmitry-duboyski/encryption-text";
  }

  if(element.dataset.language == 'en'){
    languageSwither.clickHandler(e)
  }
  
  if(element.dataset.language == 'ru'){
    languageSwither.clickHandler(e)
  }

  if(isClickOnEncoderBlockStart) {
    app.readFromClipboard();
    app.showMessageInserted();
  }

  if(isClickOnEncoderBlockEnd) {
    app.showMessageCopied();
  }

  if(isClickOnBTNCleanStart) {
    document.querySelector('.encoder-block-start__textarea').value = '';
    document.querySelector('.encoder-block-end__outputText').textContent = '...';
  }

  if(isClickOnBTNCopyEnd) {
    app.showMessageCopied();
  }
}

document.addEventListener('click', clickHandler)

window.addEventListener('scroll', function() {
  if(pageYOffset > 200){
    document.querySelector('.scrollup').classList.remove('scrollup_hidden')
  } else {
    document.querySelector('.scrollup').classList.add('scrollup_hidden')
  }
});
