let headerList = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.header__toggle');
let mainHeader = document.querySelector('.main-header');



mainHeader.classList.remove('main-header--no-js');
headerToggle.classList.remove('header__toggle--no-js');
headerList.classList.remove('main-nav--no-js');



headerToggle.addEventListener('click', function () {
  headerToggle.classList.toggle('header__toggle--open-menu');
  headerToggle.classList.toggle('header__toggle--closed-menu');
  headerList.classList.toggle('main-nav--no-js');
  mainHeader.classList.toggle('main-header--open-menu');
});
