const contact = document.querySelector('.contact-list');
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.header-list');
const project = document.querySelector('.project');
const log = document.querySelector('.log');

const modalEl = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');
const overFlow = document.querySelector('*');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
  log.classList.toggle('active');
});
const mainData = [
  {
    name: 'Tonic',
    description: 'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryf bhhhhhnbfryf fhrhyfbhbfy',
    imageUrl: 'img/desktop/SnapshootPortfolio1.png',
    technologies: ['html', 'css', 'javscript'],
    company: 'CANOPY',
    role: 'Back end dev',
    year: '2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Multi-post stories',
    description: 'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl: 'img/desktop/SnapshootPortfolio2.png',
    technologies: ['html', 'css', 'javscript'],
    company: 'FACEBOOK',
    role: 'Full stack dev',
    year: '2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Facebook 360',
    description: 'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl: 'img/desktop/SnapshootPortfolio.png',
    technologies: ['html', 'css', 'javscript'],
    company: 'FACEBOOK',
    role: 'Full stack dev',
    year: '2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Uber Navigation',
    description: 'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl: 'img/desktop/SnapshootPortfolio4.png',
    technologies: ['html', 'css', 'javscript'],
    company: 'Uber',
    role: 'Lead developer',
    year: '2018',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
];
for (let i = 0; i < mainData.length; i += 1) {
  const card = `<div class="card">
      <img class="pic" src="${mainData[i].imageUrl}" alt="First-img" />
      <div class="Desktop-common">
      <h2 class="card-name">${mainData[i].name}</h2>
      <ul class="can-bak">
        <li class="cann">${mainData[i].company}</li>
        <li class="bak">${mainData[i].role}</li>
        <li class="bak">${mainData[i].year}</li>
      </ul>
      <p class="tex-sec">${mainData[i].description}</p>
      <ul class="work-list">
      <li class="work-name">${mainData[i].technologies[0]}</li>
        <li class="work-name">${mainData[i].technologies[1]}</li>
        <li class="work-name">${mainData[i].technologies[2]}</li>
      </ul>
      <button class="sec-button">see project</button>
    </div>
    </div>`;
  project.insertAdjacentHTML('beforeend', card);
}

const modalButton = document.querySelectorAll('.sec-button');
for (let i = 0; i < modalButton.length; i += 1) {
  modalButton[i].addEventListener('click', () => {
    modalEl.classList.toggle('hidden');
    wrapper.classList.toggle('blur');
    overFlow.classList.toggle('scroll-off');

    let loopInner = '';
    mainData[i].technologies.forEach((tech) => {
      loopInner += `<li class="work-name">${tech}</li>`;
      return loopInner;
    });

    modalEl.innerHTML = `<div class="card1">
      <div class="Desktop-common1">
          <div class="head-just1"><h2 class="card-name1">${mainData[i].name}</h2><img src="img/Icon-Cancel.svg" alt="Cancel" class="cancel icon-img"/></div><ul class="can-bak1">
          <li class="cann1">${mainData[i].company}</li><li class="bak1">${mainData[i].role}</li><li class="bak1">${mainData[i].year} </li>
        </ul>
        <img
          class="pic1"  id="pic-modal"
          src=${mainData[i].imageUrl}
          alt="First-img"
        />
        <div class="One1">
          <p class="tex-sec1">${mainData[i].description}</p>
          <div class="two1">
            <ul class="work-list1">
               ${loopInner}
            </ul>
            <ul class="live1">
              <a href=${mainData[i].linkLive} class="sec-button1">
                see live
                <img src="./img/Vector-git.png" class="vector1" />
              </a>
              <a href=${mainData[i].linkSource} class="sec-button1">
                see source<img src="img/Icon-s.png" class="vector1" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>`;

    const cancel = document.querySelector('.cancel');
    cancel.addEventListener('click', () => {
      modalEl.classList.toggle('hidden');
      wrapper.classList.toggle('blur');
      overFlow.classList.toggle('scroll-off');
    });
  });
}

contact.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const error = document.querySelector('.error');
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = 'Email should be in lowercase!';
    setTimeout(() => {
      error.innerHTML = '';
    }, 10000);
  }
});
