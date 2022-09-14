const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerBar = document.querySelector('.hamburger__bar');
const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list__items');

hamburger.addEventListener('click', () => {
  hamburgerBar.classList.toggle('active');
  menu.classList.toggle('active');
  list.classList.toggle('active');
});

listItems.forEach((element) => {
  element.addEventListener('click', () => {
    for (let i = 0; i < listItems.length; i++) {
      const element = listItems[i];
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      }
    }
    element.classList.add('active');
  });
});
