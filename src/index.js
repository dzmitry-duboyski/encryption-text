// import './js/app';
import './style/main.scss';

console.log('index.js')

const eventListener = (e) => {
  console.log(e)
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
  // const Top = document.querySelector('body').offsetTop

  if(pageYOffset > 200){
    document.querySelector('.scrollup').classList.remove('scrollup_hidden')
  } else {
    document.querySelector('.scrollup').classList.add('scrollup_hidden')
  }
});
