/**
 * To add elements for switching the language,
 * the page must contain a block with the class name "language-swithing".
 * 
 * example: <div class="language-swithing"></div>
 * 
 * 
 * описать про атрибут data-i18n
 */

const activeClassName = 'language-list__item-link_active';

export class Language {
  constructor() {
    this.defaultLanguage = 'en';
    this.currentLanguage = this.getCurrentLanguage();
  }

  init() {
    const languageSwithingElement = `
    <ul class="language-list">
      <li class="language-list__item">
        <a class="language-list__item-link" href="#" data-language="en">En</a>
      </li>
      <li class="language-list__item">
        <a class="language-list__item-link" href="#" data-language="ru">Ru</a>
      </li>
    </ul>`;
    document.querySelector('.language-swithing').insertAdjacentHTML('afterbegin',languageSwithingElement)

    // document.querySelector('.language-list').addEventListener('click', this.clickHandler);
    this.displayCheckedLanguage();
    Language.displayChangeLanguage();
  }

  getCurrentLanguage(){
    const currentLanguage = localStorage.getItem('currentLanguage');
    const supportedLanguageList = ['en','ru'];
    const isNotSupportedLanguage = !supportedLanguageList.includes(currentLanguage);
    if (isNotSupportedLanguage){
      localStorage.setItem('currentLanguage', this.defaultLanguage);
      return this.defaultLanguage;
    } else {
      return currentLanguage;
    }
  }

  clickHandler(e) {
    const currentElement = e.target;
    const isClickOnBtn = e.target.className.includes('language-list__item-link');

    if(isClickOnBtn) {
      const allElements = document.querySelectorAll('.language-list__item-link');
      allElements.forEach((el)=>el.classList.remove(activeClassName));
      currentElement.classList.add(activeClassName);
      this.currentLanguage = currentElement.dataset.language;
      const oldLanguage = localStorage.getItem("currentLanguage");
      localStorage.setItem("currentLanguage", this.currentLanguage);
      const newLanguage = localStorage.getItem("currentLanguage");
      const isOldLanguage = oldLanguage === newLanguage;

      if (isOldLanguage) {
        console.warn('!!! Why do you click on old langeage!!! \n Please select other language');
        return;
      }
      Language.displayChangeLanguage();
    }

  }

  static displayChangeLanguage(){
    const elementToTranslate = document.querySelectorAll('[data-i18n]');
    const currentLanguage = localStorage.getItem("currentLanguage");

    fetch(`./translations/${currentLanguage}.json`)
      .then(res => res.json())
      .then(translations => {
        elementToTranslate.forEach(element => {
          if(element.dataset.i18n === 'inputTextAria') {
            element.placeholder = `${translations[element.dataset.i18n]}`;
            return;
          }
          element.textContent = translations[element.dataset.i18n];
        })
      })
  }

  displayCheckedLanguage(){
    const element = document.querySelector(`[data-language="${this.currentLanguage}"]`);
    try {
      element.classList.add(activeClassName);
     }
      catch (e) {
        console.warn(`element with attribute:[data-language="${this.currentLanguage}"] not found`)
     }
  }
}
