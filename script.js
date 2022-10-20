const contact = document.querySelector('.contact-list');
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.header-list');
const log = document.querySelector('.log');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navUl.classList.toggle('active');
  log.classList.toggle('active');
});
document.querySelectorAll('.header-list').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navUl.classList.remove('active');
  log.classList.remove('active');
}));

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
