'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = 30;
// document.querySelector('.number').textContent = 23;
// document.querySelector('.guess').value = 10;
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'Nice Try!';
    }
  } else if (randomNumber === guess) {
    document.querySelector('.message').textContent = 'That is correct Number! ';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (randomNumber < guess) {
    document.querySelector('.message').textContent = 'It is lower';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'Nice Try!';
    }
  } else if (randomNumber > guess) {
    document.querySelector('.message').textContent = 'It is higher';
    score--;
    if (score > 0) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'Nice Try!';
    }
  }
});

console.log(randomNumber);
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  if (1 > 0) {
    score = 20;
    document.querySelector('.score').textContent = score;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
  }
});
