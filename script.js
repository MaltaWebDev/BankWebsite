'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// MODAL WINDOW
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

// loop over all CTA btns and add event listeners
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
///////////////////////////////////////

////////////////////////////////////////
// SMOOTH SCROLLING

// Learn More btn
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// add event listeners to all elements with .nav__link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function (e) {
    // prevent the href from overriding the event handler
    e.preventDefault();
    // get the ID of the target section from the href attribute
    const sectionId = this.getAttribute('href');
    // get the target section using its ID
    const section = document.querySelector(sectionId);
    // if the target exists, scroll to it smoothly
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

////////////////////////////////////////
