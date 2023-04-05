const startButton = document.querySelector('#start-button');
const rightButton = document.querySelector('#right-button');
const endButton = document.querySelector('#end-button');

const buttonOne = document.querySelector('#button-one');
const buttonTwo = document.querySelector('#button-two');
const buttonThree = document.querySelector('#button-three');
const buttonFour = document.querySelector('#button-four');
const buttonFive = document.querySelector('#button-five');
const buttonSix = document.querySelector('#button-six');
const buttonSeven = document.querySelector('#button-seven');

document.addEventListener('DOMContentLoaded', function() {
  const initialPosition = 250;
  carousel.scrollLeft = initialPosition;
});

const carousel = document.querySelector('.wrapper');
let clicked = false;
let initialMouseX = 0;
let initialScrollLeft = 0;

function handleMouseDown(event) {
  clicked = true;
  initialMouseX = event.pageX;
  initialScrollLeft = carousel.scrollLeft;
}

function handleMouseMove(event) {
  if (clicked) {
    const distance = event.pageX - initialMouseX;
    let scrollLeft = initialScrollLeft - distance;

    const positions = [250, 1165, 1790];
    const minScrollLeft = Math.min(...positions);
    const maxScrollLeft = Math.max(...positions);

    if (scrollLeft < minScrollLeft) {
      scrollLeft = minScrollLeft;
    } else if (scrollLeft > maxScrollLeft) {
      scrollLeft = maxScrollLeft;
    }

    if(scrollLeft >= 250){
      startButton.classList.add('active');
      rightButton.classList.remove('active');
      endButton.classList.remove('active');
    } 
    
    if (scrollLeft >= 1165) {
      startButton.classList.remove('active');
      rightButton.classList.add('active');
      endButton.classList.remove('active');
    }

    if (scrollLeft >= 1680) {
      startButton.classList.remove('active');
      rightButton.classList.remove('active');
      endButton.classList.add('active');
    }
    console.log(scrollLeft)
    carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    // Para fazer o carrossel ser arrastado livremente comentar a linha 54 e descomentar a 58

    // carousel.scrollLeft = scrollLeft;
  }
}

function handleMouseUp() {
  clicked = false;
}

function goToStart() {
  carousel.scrollTo({ left: 250, behavior: 'smooth' });
  startButton.classList.add('active');
  rightButton.classList.remove('active');
  endButton.classList.remove('active');
}

function scrollRight() {
  carousel.scrollTo({ left: 1165, behavior: 'smooth' });
  startButton.classList.remove('active');
  rightButton.classList.add('active');
  endButton.classList.remove('active');
}

function goToEnd() {
  carousel.scrollTo({ left: 1790, behavior: 'smooth' });
  startButton.classList.remove('active');
  rightButton.classList.remove('active');
  endButton.classList.add('active');
}

startButton.addEventListener('click', goToStart);
rightButton.addEventListener('click', scrollRight);
endButton.addEventListener('click', goToEnd);

carousel.addEventListener('mousedown', handleMouseDown);
carousel.addEventListener('mousemove', handleMouseMove);
carousel.addEventListener('mouseup', handleMouseUp);


// Mobile

buttonOne.addEventListener('click', goToOne);
buttonTwo.addEventListener('click', goToTwo);
buttonThree.addEventListener('click', goToThree);
buttonFour.addEventListener('click', goToFour);
buttonFive.addEventListener('click', goToFive);
buttonSix.addEventListener('click', goToSix);
buttonSeven.addEventListener('click', goToSeven);

function goToOne() {
  buttonOne.classList.add('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.remove('active');
}

function goToTwo() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.add('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.remove('active');
}

function goToThree() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.add('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.remove('active');
}

function goToFour() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.add('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.remove('active');
}

function goToFive() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.add('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.remove('active');
}

function goToSix() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.add('active');
  buttonSeven.classList.remove('active');
}

function goToSeven() {
  buttonOne.classList.remove('active');
  buttonTwo.classList.remove('active');
  buttonThree.classList.remove('active');
  buttonFour.classList.remove('active');
  buttonFive.classList.remove('active');
  buttonSix.classList.remove('active');
  buttonSeven.classList.add('active');
}

