let headerList = document.querySelector('.main-nav__list');
let headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', function () {
  if (headerToggle.classList.contains('header__toggle--closed-menu')) {
    headerToggle.classList.add('header__toggle--open-menu')
    headerToggle.classList.remove('header__toggle--closed-menu');
    ;
  } else {
    headerToggle.classList.add('header__toggle--closed-menu');
    headerToggle.classList.remove('header__toggle--open-menu');
  }
});
