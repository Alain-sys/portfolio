const header = document.getElementById('header-scroll');
const showMore = document.querySelector('.show-more');
const secondaryBlockCard = document.querySelector('.secondary-block-card');

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

const getAPI = async () => {
  const response = await fetch(`../scripts/languages.json`);
  let data = await response.json();
  return data;
};

getAPI()
  .then((data) => {
    dataUser(data);
  })

  .catch((err) => {
    console.log('rejected', err.message);
  });

const dataUser = (data) => {
  const userLang = navigator.language;
  const userLangFirstLetters = userLang.substring(0, 2);
  let index = 0;
  if (userLangFirstLetters === 'fr') {
    index = 1;
  }
  console.log(index);

  const language = data[index];

  document.querySelector('.list__link-home').textContent = language.nav.home;
  document.querySelector('.list__link-about').textContent = language.nav.about;
  document.querySelector('.list__link-work').textContent = language.nav.work;
  document.querySelector('.list__link-contact').textContent = language.nav.contact;

  document.querySelector('.home-section__subtitle').textContent = language.home_subtitle;
  document.querySelector('.home-section__link').textContent = language.home_link;

  document.querySelector('.about-section__title').textContent = language.about_title;
  document.querySelector('.about-section__text-location').textContent = language.about_location;
  document.querySelector('.about-section__text-soft-skills').textContent = language.about_soft_skills;
  document.querySelector('.about-section__text-technologies').textContent = language.about_technologies;

  document.querySelector('.work-section__title').textContent = language.work_title;
  document.querySelector('.card__text-planets').textContent = language.projects.planets;
  document.querySelector('.card__text-e-commerce').textContent = language.projects.e_commerce;
  document.querySelector('.card__text-todo').textContent = language.projects.todo;
  document.querySelector('.card__text-calculator').textContent = language.projects.calculator;
  document.querySelector('.card__text-github-user').textContent = language.projects.github_user;
  document.querySelector('.card__text-officelite').textContent = language.projects.officelite;
  document.querySelector('.card__text-tip-calculator').textContent = language.projects.tip_calculator;
  document.querySelector('.card__text-maker').textContent = language.projects.maker;
};
