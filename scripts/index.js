const header = document.getElementById('header-scroll');
const showMore = document.querySelector('.show-more');
const secondaryBlockCard = document.querySelector('.secondary-block-card');

showMore.addEventListener('click', () => {
  showMore.classList.toggle('active');

  if (showMore.classList.contains('active')) {
    showMore.textContent = 'Show less';
    secondaryBlockCard.classList.add('active');
  } else {
    showMore.textContent = 'Show more';
    secondaryBlockCard.classList.remove('active');
  }
});

let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (currentScrollPos === 0) {
    header.style.boxShadow = 'none';
  } else {
    header.style.boxShadow = 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px';
  }

  if (prevScrollPos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-85px';
  }

  prevScrollPos = currentScrollPos;
};
