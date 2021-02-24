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

  if(e.target.className == 'scrollup__image'){
    document.querySelector('body').scrollIntoView({behavior: "smooth", block: 'start'})
  }

  if(e.target.dataset.menuitem == 'docs'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(e.target.dataset.menuitem == 'api'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(e.target.dataset.menuitem == 'donate') {
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }

  if(e.target.dataset.menuitem == 'gitHub') {
    document.location.href = "https://github.com/dzmitry-duboyski/encryption-text";
  }

  if(e.target.dataset.language == 'en'){
    languageSwither.clickHandler(e)
  }
  
  if(e.target.dataset.language == 'ru'){
    languageSwither.clickHandler(e)
  }

  if(e.target.className == 'encoder-block-start__header'){
    app.readFromClipboard();
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
