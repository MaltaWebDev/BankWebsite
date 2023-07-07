'use strict';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// open modal and prevent scroll to top of page
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// loop over all instances of CTA btn and add event listeners
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// close modal on click outside modal or on close btn
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close modal on Esc key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////
// SMOOTH SCROLLING
//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// classic way
//
// get co-ordinates of screen when 'learn more' btn is clicked
// btnScrollTo.addEventListener('click', e => {
// // get xy rectangle of element
// const section1xy = section1.getBoundingClientRect();
// console.log(section1xy);
// console.log(e.target.getBoundingClientRect());
// console.log('Current scroll xy: ', window.scrollX, window.scrollY);
// console.log(
//   'Current height and width of viewport: ',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// // scrolling
// window.scrollTo({
//   // get absolute position of element relative to the document
//   left: section1xy.left + window.scrollX,
//   top: section1xy.top + window.scrollY,
//   behavior: 'smooth',
// });
// });

// modern way
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});
//
/////////////////////////////////////////

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading!! ');
});
