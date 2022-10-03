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

// const homeListLink = document.querySelector('.list__link-home');
// const aboutListLink = document.querySelector('.list__link-about');
// const workListLink = document.querySelector('.list__link-work');
// const homeSubtitle = document.querySelector('.home-section__subtitle');
// const homeContactLink = document.querySelector('.home-section__link');
// const aboutTitle = document.querySelector('.about-section__title');
// const aboutTextLocation = document.querySelector('.about-section__text-location');
// const aboutTextSoftSkills = document.querySelector('.about-section__text-soft-skills');
// const aboutTextTechnologies = document.querySelector('.about-section__text-technologies');
// const workTitle = document.querySelector('.work-section__title');
// const cardTextPlanets = document.querySelector('.card__text-planets');
// const cardTextEcommerce = document.querySelector('.card__text-e-commerce');
// const cardTextTodo = document.querySelector('.card__text-todo');
// const cardTextCaclculator = document.querySelector('.card__text-calculator');

// const contactText = document.querySelector('.contact-text');
// const userLang = navigator.language;

// if (userLang.substring(0, 2) === 'fr') {
//   homeListLink.textContent = 'Accueil';
//   aboutListLink.textContent = 'À propos';
//   workListLink.textContent = 'Projets';
//   homeSubtitle.textContent = 'Développeur Front-End';
//   homeContactLink.textContent = 'Contactez-moi';
//   aboutTitle.textContent = 'À propos de moi';
//   aboutTextLocation.textContent =
//     "Développeur Front-End junior autodidacte, recherche un emploi à distance dans une entreprise excitante. Je vie proche de Paris, et j'ai de l'expérience dans les équipes à distance";
//   aboutTextSoftSkills.textContent =
//     "Je suis déterminé, organisé et curieux. J'aime aussi me challenger et j'ai toujours envie d'apprendre de nouvelles technologies pour m'améliorer. Quand je ne code pas, je fais des activités à l'extérieur ou je profite d'un bon livre";
//   aboutTextTechnologies.textContent = "Voici les technologies que j'utilise :";
//   workTitle.textContent = 'Mes projets';
//   cardTextPlanets.textContent =
//     "Un site pour découvrir les planètes de notre système solaire. Découvrez la structure interne, la géologie et bien plus encore de chaque planètes. J'ai utilisé un data.json fourni pour afficher chaque planète avec les données correspondantes.";

//   cardTextEcommerce.textContent =
//     'Un site e-commerce pour vendre des sneakers. Les différentes photos des sneakers montrent le produit. Choisissez la quantité du produit souhaitez et ajoutais le au panier. Le panier peut être vidé.';

//   cardTextTodo.textContent =
//     "La 'to do list' inclus un thème sombre ou clair. Une tâche peut être ajoutée à la liste et cochée ou supprimées. Selon leurs états les tâches peuvent être filtrées en 'all', 'active' et 'completed'.";

//   cardTextCaclculator.textContent =
//     'La calculatrice inclus trois thèmes de couleur. Le clavier est aussi compatible pour taper les nombres ou vous pouvez directement cliquez sur les chiffres.';

//   contactText.textContent = 'Intéressé pour travailler ensemble ?';
// } else {
//   homeListLink.textContent = 'Home';
//   aboutListLink.textContent = 'About';
//   workListLink.textContent = 'Work';
//   homeSubtitle.textContent = 'Front-End Developer';
//   homeContactLink.textContent = 'Contact me';
//   aboutTitle.textContent = 'about me';
//   aboutTextLocation.textContent =
//     'Self-taught junior Front-End Developer, looking for a new remote role in an exciting company. I’m based near Paris, FR, and have experience in remote teams. ';
//   aboutTextSoftSkills.textContent =
//     "I am determined, organized and curious. I also like to challenge myself and I'm always keen to learn new technologies to improve. When I am not coding, I am practicing outdoors activities or I am enjoying a nice book.";
//   aboutTextTechnologies.textContent = 'Here are the technologies I used :';
//   workTitle.textContent = 'My Work';
//   cardTextPlanets.textContent =
//     'A website to discover planets in our solar system planets. Discover the internal structure, the geology and much more about each planets. I used a data.json that was provided to display each planets with the corresponding data. ';

//   cardTextEcommerce.textContent =
//     'An e-commerce page to sell sneakers. The different pictures of the sneakers show the product. Choose your quantity and add it to the shopping online cart. The shopping cart can be emptied.';

//   cardTextTodo.textContent =
//     "The 'to do' list app includes a dark or light theme. A task can be added to the list and checked or deleted. Depending on their status, tasks can be filtered into 'all', 'active' and 'completed'";

//   cardTextCaclculator.textContent =
//     'The calculator includes three color themes. The keyboard is compatible with it so you can either use it to type the numbers or you can click on the calculator ones directly.';

//   contactText.textContent = 'Interested in working together?';
// }
