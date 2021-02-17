// import './js/app';
import './style/style.scss';
import 'normalize.css';

console.log('index.js')

const eventListener = (e) => {
  console.log(e)
  e.preventDefault();

  if(e.target.className == 'scrollup__image'){
    console.log('scroll')
    document.querySelector('body').scrollIntoView({behavior: "smooth"})

  }
  if(e.target.dataset.menuitem == 'docs'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }
  if(e.target.dataset.menuitem == 'api'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }
  if(e.target.dataset.menuitem == 'donate'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }
  if(e.target.dataset.menuitem == 'gitHub'){
    alert(`section "${e.target.dataset.menuitem}" in development`)
  }
  if(e.target.dataset.language == 'En'){
    alert(`section "${e.target.dataset.language}" in development`)
  }
  if(e.target.dataset.language == 'Ru'){
    alert(`section "${e.target.dataset.language}" in development`)
  }

  if(e.target.className == 'encoder-block-start__header'){
    console.log('ctrl+v')
  }

  if(e.target.className == 'encoder-block-end__header' | e.target.className == 'encoder-block-end__textarea'){
    console.log('ctrl+c')
  }  

}

 document.addEventListener('click', eventListener)

 window.addEventListener('scroll', function() {
  // console.log(pageYOffset + 'px');
const Top = document.querySelector('body').offsetTop
console.log(Top)

  if(pageYOffset > 200){
    console.log('показать')
    document.querySelector('.scrollup').classList.remove('scrollup_hidden')
  } else {
    console.log('скрыть')
    document.querySelector('.scrollup').classList.add('scrollup_hidden')
  }
});
