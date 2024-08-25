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

// add styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// message.style.padding = '1rem 0';

// get inline styles
console.log(message.style.backgroundColor);

// get computed styles if needed
console.log(getComputedStyle(message).color);

// set height of banner programatically
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
