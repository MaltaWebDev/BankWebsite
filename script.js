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

// "Learn more" btn
btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Nav links
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

////////////////////////////////////////
// TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// adding event listeners to all elements by looping over them all is avoidable
// this would result in many unnecessary copies of this code
// tabs.forEach(tab => tab.addEventListener('click', () => console.log('Tab clicked')))

// let's use event delegation instead
// apply the event handler to the parent element
tabsContainer.addEventListener('click', function (e) {
  // use closest method to avoid accidentally selection the span element
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  clicked.classList.add('operations__tab--active');
});

////////////////////////////////////////
