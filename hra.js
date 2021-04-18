'use strict'
console.log('funguju');

const jeNaTahu = 'circle';

const policko = document.querySelector('button');

if (jeNaTahu === 'circle') {
  policko.addEventListener('click', policko.classList.add('board__field--circle'));
}
