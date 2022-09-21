const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelector('.hamburger__bar');
const list = document.querySelector('.list');
const listLinks = document.querySelectorAll('.list__links');
const header = document.getElementById('header-scroll');
const backgroundBlur = document.querySelector('.background-blur');
const logo = document.querySelector('.logo');
const body = document.querySelector('.body-overflow');

hamburger.addEventListener('click', () => {
  hamburgerBar.classList.toggle('active');
  menu.classList.toggle('active');
  list.classList.toggle('active');
  if (menu.classList.contains('active')) {
    backgroundBlur.classList.add('active');
    body.classList.add('active');
  } else {
    backgroundBlur.classList.remove('active');
    body.classList.remove('active');
  }
});

backgroundBlur.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburgerBar.classList.remove('active');
  list.classList.remove('active');
  backgroundBlur.classList.remove('active');
  body.classList.remove('active');
});

addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    backgroundBlur.classList.remove('active');
    hamburgerBar.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('active');
  }
});

logo.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburgerBar.classList.remove('active');
  list.classList.remove('active');
  body.classList.remove('active');
});

listLinks.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.remove('active');
    backgroundBlur.classList.remove('active');
    hamburgerBar.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('active');

    for (let i = 0; i < listLinks.length; i++) {
      const element = listLinks[i];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    }
    element.classList.add('active');
  });
});

let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (currentScrollPos === 0) {
    header.style.boxShadow = 'none';
    // header.style.backgroundColor = '#FFFFFF';
  } else {
    header.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
    // header.style.backgroundColor = 'hsla(0, 23%, 97%, 1)';
  }

  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-85px';
  }

  prevScrollPos = currentScrollPos;
};
