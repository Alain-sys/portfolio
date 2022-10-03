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

const getAPI = async () => {
  const response = await fetch(`scripts/languages.json`);
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

  showMore.textContent = language.show_more;

  showMore.addEventListener('click', () => {
    showMore.classList.toggle('active');

    if (showMore.classList.contains('active')) {
      showMore.textContent = language.show_less;
      secondaryBlockCard.classList.add('active');
    } else {
      showMore.textContent = language.show_more;
      secondaryBlockCard.classList.remove('active');
    }
  });

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
  document.querySelector('.contact-text').textContent = language.contact_text;

  const cardTextGithub = document.querySelector('.card__text-github-user');
  const cardTextTipCalculator = document.querySelector('.card__text-tip-calculator');

  if (userLangFirstLetters === 'fr') {
    cardTextGithub.innerHTML = `Chercher un utilisateur github et l'app se chargera d'afficher ses informations de profil. Dans ce projet j'utilise la 
    <a class="card__text-link" href="https://docs.github.com/en/rest/users/users#get-a-user" target="_blank">Github users API</a> 
    pour accèder aux données et les afficher.`;

    cardTextTipCalculator.innerHTML = `Ce projet a été réalisé en pair programming avec 
    <a class="card__text-link" href="https://github.com/Vcna-0" target="_blank">Noëmie</a>. 
    Il aide à déterminer de combien sera le pourboire après un bon repas. Choissisez un pourcentage (5%, 10%...), renseignez combien étiez-vous à manger ainsi que la somme total du repas et ça vous donnera le montant total du pourboire divisé par le nombre de personne. Ainsi que la somme total du pourboire.`;
  } else {
    cardTextGithub.innerHTML = `Search a github user and the app will display his profile and his details. In this project I used the
   <a class="card__text-link" href="https://docs.github.com/en/rest/users/users#get-a-user" target="_blank">Github users API</a> 
   to access and to display profile datas.`;

    cardTextTipCalculator.innerHTML = `This project was realised in pair programming with
                <a class="card__text-link" href="https://github.com/Vcna-0" target="_blank">Noëmie</a>. 
                It helps you figure out how much you should
                tip the waitress after a good meal. Choose a percentage (5%, 10%...), write how many of you were eating and it gives you the amount to
                tip and the total amount per person.`;
  }
};
