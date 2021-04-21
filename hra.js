'use strict';
console.log('funguju');


let activePlayer = 'circle';

const btnElm = document.querySelectorAll('button');
const playerIconElm = document.querySelector('.icon-active-player');

const addIcon = (event) => {
    if (activePlayer === 'circle') {
      event.target.classList.add('board__field--circle');
      playerIconElm.src = 'images/cross.svg'
      event.target.disabled = true;
      activePlayer = 'cross';
    } else {
      event.target.classList.add('board__field--cross');
      playerIconElm.src = 'images/circle.svg'
      event.target.disabled = true;
      activePlayer = 'circle';
    }
    playerIconElm.alt = `Právě je na tahu ${activePlayer}`
  };

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', addIcon);
}; 