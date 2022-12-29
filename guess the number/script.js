'use strict';

let mysteryNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');
const message = document.querySelector('.message');
let highScore = document.querySelector('.highscore').textContent;
let score = 20;
const body = document.querySelector('body');

const funcCheck = function () {
  const guess = Number(document.querySelector('.guess').value);
  score--;
  // no input
  if (guess == false) {
    message.textContent = ':( Nothing entered. Plz guess again ';
  }
  // correct guess
  else if (guess === mysteryNumber) {
    message.textContent = ':) Correct';
    score++;
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;
    body.style.backgroundColor = '#60b347';
    number.textContent = mysteryNumber;
    number.style.width = '50rem';
  } // guess is too big
  else if (guess > mysteryNumber) {
    message.textContent = 'Too high';
  }
  // guess is too low
  else if (guess < mysteryNumber) {
    message.textContent = 'Too low';
  }
  document.querySelector('.score').textContent = score;
  if (score <= 0) {
    message.textContent = 'You Loose';
  }
};

const check = document.querySelector('.check');
check.addEventListener('click', funcCheck);

const funcRestart = function () {
  body.style.backgroundColor = '#222';
  number.textContent = '?';
  number.width = '15rem';
  mysteryNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = '20';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
};

const again = document.querySelector('.again');
again.addEventListener('click', funcRestart);
