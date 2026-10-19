
import { home } from './homepage.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

home();

function clearDom() {
  const dom = document.querySelector('#content');
  dom.textContent = ''
}

const menuBtn = document.querySelector('#menuBtn');
const homeBtn = document.querySelector('#homeBtn');
const contactBtn = document.querySelector('#contactBtn');


menuBtn.addEventListener('click', () => {
  clearDom()
  menu();
})

homeBtn.addEventListener('click', () => {
  clearDom()
  home();
})

contactBtn.addEventListener('click', () => {
  clearDom()
  contact();
})


 