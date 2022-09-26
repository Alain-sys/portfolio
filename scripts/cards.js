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
