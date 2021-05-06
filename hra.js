'use strict';
console.log('funguju');

let activePlayer = 'circle';

const playerIconElm = document.querySelector('.icon-active-player');

const addIcon = (event) => {
  if (activePlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIconElm.src = 'images/cross.svg';
    activePlayer = 'cross';
  } else {
    event.target.classList.add('board__field--cross');
    playerIconElm.src = 'images/circle.svg';
    
    activePlayer = 'circle';
  }
  event.target.disabled = true;
  playerIconElm.alt = `Právě je na tahu ${activePlayer}`;

  if (isWinningMove(event.target)) {
    setTimeout(() => {
      if (activePlayer === 'circle') {
        confirm('Vyhrává hráč s křížkem. Spustit novou hru?');
        location.reload();
      } else {
        confirm('Vyhrává hráč s kolečkem. Spustit novou hru?');
        location.reload();
      }
    }, 300)
  }

};

const btnElm = document.querySelectorAll('button');
for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', addIcon);
}

// ukol 5
//get field
const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  };
};

// get field
const boardSize = 10;
const fields = document.querySelectorAll('button')
const getField = (row, column) => fields[row * boardSize + column];


// get position
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

// is winning
const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1 // vybraná je 1

  // podivej se doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--
  }

  //podivej se doprava
  i = origin.column;
  while (
    i < boardSize - 1 && 
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;

  //podivej se nahoru
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === (getSymbol(getField(i + 1, origin.column)))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  
  return false;
}


