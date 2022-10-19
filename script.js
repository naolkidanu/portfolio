
const submit = document.querySelector('.submit');
const contact=document.querySelector('.contact-list');
const hamburger=document.querySelector('.hamburger');
const navUl=document.querySelector('.header-list');
const project=document.querySelector('.project');

hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
})


const mainData = [
  {
    name: 'Tonic',
    description:
    'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryf bnbfryf fhrhyfbhbfy',
    imageUrl:"img/desktop/Snapshoot Portfolio1.png" ,
    technologies: ['html','css','javscript','github', 'ruby', 'Bootstraps',],
    company:'CANOPY',
    role:'Back end dev',
    year:'2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Multi-post stories',
    description:
    'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl:'img/desktop/Snapshoot Portfolio2.png' ,
    technologies: ['html','css','javscript','github', 'ruby', 'Bootstraps',],
    company:'FACEBOOK',
    role:'Full stack dev',
    year:'2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Facebook 360',
    description:
    'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl:'img/desktop/Snapshoot Portfolio.png' ,
    technologies: ['html','css','javscript','github', 'ruby', 'Bootstraps',],
    company:'FACEBOOK',
    role:'Full stack dev',
    year:'2015',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
  {
    name: 'Uber Navigation',
    description:
    'lorem ipsum reakkhfhrhfhryrhfyrfhkjdjyrh erfhryfbnbfryf fhrhyfbhbfy',
    imageUrl:'img/desktop/Snapshoot Portfolio4.png' ,
    technologies: ['html','css','javscript','github', 'ruby', 'Bootstraps',],
    company:'Uber',
    role:'Lead developer',
    year:'2018',
    linkLive: 'https://naolkidanu.github.io/portfolio/',
    linkSource: 'https://github.com/naolkidanu/portfolio',
  },
]
   for(let i=0; i<mainData.length;i++){
     const card=
   `<div class="card">
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
    </div>`
    project.insertAdjacentHTML('beforeend',card);
  }






// const project=document.querySelector('.project');
// const open=document.querySelector('.sec-button');
// open.addEventListener ('click',()=>{
//   const main=document.createElement('div');
//   main.className='mainnn';
//   const popup=document.createElement('div');
//   popup.className='popupp';
//   popup.innerHTML = mainData.forEach(element => {
//   let loopInner=mainData[0].technologies.forEach(tech=>{
// `<li class="work-name">${tech}</li>`
//   });
//   return (
// //< class="mainnn">
// // <div class="popup">
// `<img class="pic" src=${mainData[0].imageUrl} alt="First-img" />
// <div class="Desktop-common">
// <h2 class="card-name">${mainData[0].name}</h2>
// <ul class="can-bak">
//   <li class="cann">${mainData[0].company}</li>
//   <li class="bak">${mainData[0].role}</li>
//   <li class="bak">${mainData[0].year} </li>
// </ul>
// <p class="tex-sec">${mainData[0].description}</p>
// <ul class="work-list">
// ${loopInner}
// </ul>
// <button class="close">Close</button>`);
// main.appendChild(popup);
// project.appendChild(main);
// });
// // const close=document.querySelector('.close');
// // close.addEventListener('click',()=>{
// //   project.removeChild(main);
// // })

// // })
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