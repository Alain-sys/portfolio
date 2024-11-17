const generateMainProjects = (mainProjects) => {
  const primaryCardContainer = document.querySelector('.primary-block-card');
  mainProjects.forEach((project) => {
    const primaryCard = document.createElement('div');
    primaryCard.classList.add('card');
    primaryCard.innerHTML = `
    ${
      project.liveUrl && project.liveUrl.length > 0
        ? `
      <a class="card__link-project" href="${project.liveUrl}" aria-label="live url" target="_blank">
        <img class="card__img" src="${project.image}" alt="${project.imageAlternativeText}" />
      </a>
      `
        : `
      <div class="card__link-project">
        <img class="card__img" src="${project.image}" alt="${project.imageAlternativeText}" />
      </div>
      `
    }
      <div class="card__content">
        <h3 class="card__title">${project.title}</h3>
        <p class="card__description">
          ${project.description}
        </p>
        <div class="card__footer">
          <p class="card__languages">${project.technology}</p>
          <div class="card__block-links">
            <a class="card__links" href="${project.github}" aria-label="github project repository" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C5.37 0 0 5.50948 0 12.3045C0 17.742 3.438 22.3531 8.205 23.9788C8.805 24.0946 9.025 23.7137 9.025 23.3871C9.025 23.095 9.015 22.3207 9.01 21.295C5.672 22.0369 4.968 19.6442 4.968 19.6442C4.422 18.2241 3.633 17.8443 3.633 17.8443C2.546 17.0815 3.717 17.0971 3.717 17.0971C4.922 17.1827 5.555 18.3649 5.555 18.3649C6.625 20.2463 8.364 19.7027 9.05 19.3886C9.158 18.5924 9.467 18.0509 9.81 17.743C7.145 17.4352 4.344 16.3771 4.344 11.6628C4.344 10.3198 4.809 9.22212 5.579 8.36127C5.444 8.05031 5.039 6.7992 5.684 5.10462C5.684 5.10462 6.689 4.77489 8.984 6.36617C9.944 6.09278 10.964 5.95713 11.984 5.95087C13.004 5.95713 14.024 6.09278 14.984 6.36617C17.264 4.77489 18.269 5.10462 18.269 5.10462C18.914 6.7992 18.509 8.05031 18.389 8.36127C19.154 9.22212 19.619 10.3198 19.619 11.6628C19.619 16.3897 16.814 17.43 14.144 17.7326C14.564 18.102 14.954 18.8564 14.954 20.0094C14.954 21.656 14.939 22.9791 14.939 23.3788C14.939 23.7012 15.149 24.0862 15.764 23.9631C20.565 22.3478 24 17.7336 24 12.3045C24 5.50948 18.627 0 12 0V0Z"
                  fill="black"
                />
              </svg>
            </a>
          ${
            project.liveUrl && project.liveUrl.length > 0
              ? `
            <a class="card__links" href="${project.liveUrl}" aria-label="live url" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.4103 4.94872H3C1.89543 4.94872 1 5.84415 1 6.94872V21C1 22.1046 1.89543 23 3 23H17.0513C18.1559 23 19.0513 22.1046 19.0513 21V10.5897M11.7179 12.2821L23 1M23 1V8.33333M23 1H15.6667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            `
              : ''
          }
          </div>
        </div>
      </div>
    `;
    primaryCardContainer.appendChild(primaryCard);
  });
};

const generateSecondaryProjects = (secondaryProjects) => {
  const secondaryCardContainer = document.querySelector('.secondary-block-card');
  secondaryProjects.forEach((project) => {
    const secondaryCard = document.createElement('div');
    secondaryCard.classList.add('secondary-card');
    secondaryCard.innerHTML = `
      <h3 class="card__title">
        ${project.title}
      </h3>
      <p class="card__description">
        ${project.description}
      </p>
      <div class="card__footer">
        <p class="card__languages">${project.technology}</p>
        <div class="card__block-links">
          <a class="card__links" href="${project.github}" aria-label="github project repository" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 0 5.50948 0 12.3045C0 17.742 3.438 22.3531 8.205 23.9788C8.805 24.0946 9.025 23.7137 9.025 23.3871C9.025 23.095 9.015 22.3207 9.01 21.295C5.672 22.0369 4.968 19.6442 4.968 19.6442C4.422 18.2241 3.633 17.8443 3.633 17.8443C2.546 17.0815 3.717 17.0971 3.717 17.0971C4.922 17.1827 5.555 18.3649 5.555 18.3649C6.625 20.2463 8.364 19.7027 9.05 19.3886C9.158 18.5924 9.467 18.0509 9.81 17.743C7.145 17.4352 4.344 16.3771 4.344 11.6628C4.344 10.3198 4.809 9.22212 5.579 8.36127C5.444 8.05031 5.039 6.7992 5.684 5.10462C5.684 5.10462 6.689 4.77489 8.984 6.36617C9.944 6.09278 10.964 5.95713 11.984 5.95087C13.004 5.95713 14.024 6.09278 14.984 6.36617C17.264 4.77489 18.269 5.10462 18.269 5.10462C18.914 6.7992 18.509 8.05031 18.389 8.36127C19.154 9.22212 19.619 10.3198 19.619 11.6628C19.619 16.3897 16.814 17.43 14.144 17.7326C14.564 18.102 14.954 18.8564 14.954 20.0094C14.954 21.656 14.939 22.9791 14.939 23.3788C14.939 23.7012 15.149 24.0862 15.764 23.9631C20.565 22.3478 24 17.7336 24 12.3045C24 5.50948 18.627 0 12 0V0Z"
                fill="black" />
            </svg>
          </a>
          ${project.liveUrl && project.liveUrl.length > 0 ? `
            <a class="card__links" href="${project.liveUrl}" aria-label="live url" target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.4103 4.94872H3C1.89543 4.94872 1 5.84415 1 6.94872V21C1 22.1046 1.89543 23 3 23H17.0513C18.1559 23 19.0513 22.1046 19.0513 21V10.5897M11.7179 12.2821L23 1M23 1V8.33333M23 1H15.6667"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
            `: ''
          }
        </div>
      </div>
    `;
    secondaryCardContainer.appendChild(secondaryCard);
 });
};

const generateSchoolProjects = (schoolProjects) => {
  const tertiaryCardContainer = document.querySelector('.tertiary-block-card');
  schoolProjects.forEach((project) => {
    const tertiaryCard = document.createElement('div');
    tertiaryCard.classList.add('tertiary-card');
    tertiaryCard.innerHTML = `
      <h3 class="card__title">
        ${project.title}
      </h3>
      <p class="card__description">
        ${project.description}
      </p>
      <div class="card__footer">
        <p class="card__languages">${project.technology}</p>
        <div class="card__block-links">
          <a class="card__links" href="${project.github}" aria-label="github project repository" target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.37 0 0 5.50948 0 12.3045C0 17.742 3.438 22.3531 8.205 23.9788C8.805 24.0946 9.025 23.7137 9.025 23.3871C9.025 23.095 9.015 22.3207 9.01 21.295C5.672 22.0369 4.968 19.6442 4.968 19.6442C4.422 18.2241 3.633 17.8443 3.633 17.8443C2.546 17.0815 3.717 17.0971 3.717 17.0971C4.922 17.1827 5.555 18.3649 5.555 18.3649C6.625 20.2463 8.364 19.7027 9.05 19.3886C9.158 18.5924 9.467 18.0509 9.81 17.743C7.145 17.4352 4.344 16.3771 4.344 11.6628C4.344 10.3198 4.809 9.22212 5.579 8.36127C5.444 8.05031 5.039 6.7992 5.684 5.10462C5.684 5.10462 6.689 4.77489 8.984 6.36617C9.944 6.09278 10.964 5.95713 11.984 5.95087C13.004 5.95713 14.024 6.09278 14.984 6.36617C17.264 4.77489 18.269 5.10462 18.269 5.10462C18.914 6.7992 18.509 8.05031 18.389 8.36127C19.154 9.22212 19.619 10.3198 19.619 11.6628C19.619 16.3897 16.814 17.43 14.144 17.7326C14.564 18.102 14.954 18.8564 14.954 20.0094C14.954 21.656 14.939 22.9791 14.939 23.3788C14.939 23.7012 15.149 24.0862 15.764 23.9631C20.565 22.3478 24 17.7336 24 12.3045C24 5.50948 18.627 0 12 0V0Z"
                fill="black" />
            </svg>
          </a>
         ${
           project.liveUrl && project.liveUrl.length > 0 ? ` 
              <a class="card__links" href="${project.liveUrl}" aria-label="live url" target="_blank">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.4103 4.94872H3C1.89543 4.94872 1 5.84415 1 6.94872V21C1 22.1046 1.89543 23 3 23H17.0513C18.1559 23 19.0513 22.1046 19.0513 21V10.5897M11.7179 12.2821L23 1M23 1V8.33333M23 1H15.6667"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            ` : ''
         } 
        </div>
      </div>
    `; 
    tertiaryCardContainer.appendChild(tertiaryCard);
  });
};

fetch('./data/project.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de chargement du fichier JSON');
    }
    return response.json(); 
  })
  .then(data => {
    generateMainProjects(data.mainProjects);
    generateSecondaryProjects(data.secondaryProjects);
    generateSchoolProjects(data.schoolProjects);
  })
  .catch(error => console.error('Erreur:', error));

