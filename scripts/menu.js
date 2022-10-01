const body = document.querySelector('.body-overflow');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelector('.hamburger__bar');
const menu = document.querySelector('.menu');
const backgroundBlur = document.querySelector('.background-blur');
const list = document.querySelector('.list');
const listLinks = document.querySelectorAll('.list__links');

const removeActiveClass = () => {
  body.classList.remove('active');
  hamburgerBar.classList.remove('active');
  menu.classList.remove('active');
  backgroundBlur.classList.remove('active');
  list.classList.remove('active');
};

hamburger.addEventListener('click', () => {
  hamburgerBar.classList.toggle('active');

  if (hamburgerBar.classList.contains('active')) {
    body.classList.add('active');
    menu.classList.add('active');
    backgroundBlur.classList.add('active');
    list.classList.add('active');
    hamburger.setAttribute('aria-label', 'close menu');
  } else {
    body.classList.remove('active');
    menu.classList.remove('active');
    backgroundBlur.classList.remove('active');
    list.classList.remove('active');
    hamburger.setAttribute('aria-label', 'open menu');
  }
});

listLinks.forEach((element) => {
  element.addEventListener('click', () => {
    removeActiveClass();

    for (let i = 0; i < listLinks.length; i++) {
      const element = listLinks[i];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    }
    element.classList.add('active');
  });
});

backgroundBlur.addEventListener('click', () => {
  removeActiveClass();
});

logo.addEventListener('click', () => {
  removeActiveClass();
});

addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    removeActiveClass();
  }
});
