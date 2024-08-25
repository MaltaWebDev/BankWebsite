'use strict';

// Modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('section');
const allBtns = document.getElementsByTagName('button');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
// Cookie message

// create element and add content
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. By using this website you agree to our cookie policy <button class="btn btn--close-cookie">Got it!</button>';
const header = document.querySelector('.header');

// add new element to DOM
header.append(message);

// remove element on btn click
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// Query and atttribute selectors
//
// // add styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
// // message.style.padding = '1rem 0';

// // get inline styles
// // console.log(message.style.backgroundColor);

// // get computed styles if needed
// //console.log(getComputedStyle(message).color);

// // set height of banner programatically
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // set custom properties
// // console.log(
// //   document.documentElement.style.setProperty('--color-primary', 'blue')
// // );

// // get attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // get non-standard attributes
// console.log(logo.designer); // undefined - cannot read non-standard attributes
// console.log(logo.getAttribute('designer')); // returns Angus

// // set attributes
// logo.alt = 'Minimalist logo';
// logo.setAttribute('designer', 'Jonas');

// // get absolute src path
// console.log(logo.src); // http://127.0.0.1:5500/img/logo.png
// // get relative src path
// console.log(logo.getAttribute('src')); // img/logo.png

// // get absolute href path
// const navLink = document.querySelector('.nav__link');
// console.log(navLink.href);
// // get relative path
// console.log(navLink.getAttribute('href'));

// // get hrefs from all nav links by looping over them
// const navLinksAll = document.querySelectorAll('.nav__link'); // returns node list
// // console.log(navLinksAll);
// navLinksAll.forEach(navLink => {
//   console.log(`href attribute: ${navLink.getAttribute('href')}`);
// });

// // Data attributes
// console.log(logo.getAttribute('data-version')); // 3.0
// console.log(logo.dataset.version); // 3.0

// // Classes
// logo.classList.add('nav');
// logo.classList.remove('nav');
// logo.classList.toggle('nav');
// logo.classList.contains('nav');

// // Do not use this as it overrides any existing classes
// // Use logo.classList.add() instead
// logo.className = 'Jonas';
