let inputBox = document.getElementById('input');
let submitButton = document.getElementById('submit');
let resultsBox = document.getElementById('results-box');
let helperBox = document.getElementById('help-box');
let playButton = document.getElementById('playAgain');

let helpBox = [];

let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);


function gameOver() {
  let btn = document.createElement("button");
  let playBtn = document.createTextNode('Play Again?');
  btn.appendChild(playBtn);
  playButton.appendChild(btn);
}
function guesser() {
  // console.log(inputBox.value);
  if(inputBox.value == randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'That is correct!';
    helpBox.push('YOU WON!!!!!!' + '<br>' + 'The winning number was ' + inputBox.value + '<br>');
    inputBox.value = '';
    gameOver();
  } else if (helpBox.length == 10) {
    // helpBox.classList.add('red-text');
    resultsBox.innerHTML = 'That is incorrect!';
    helpBox.push('YOU LOST!!!!' + '<br>');
    inputBox.value = '';
    gameOver();
  }  else if(inputBox.value > 100 || inputBox.value < 1) {
    resultsBox.innerHTML = 'Please guess between 1 and 100';
    inputBox.value = '';
  } else if(inputBox.value > randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'Too high, guess lower';
    helpBox.push('x ' + '< ' + inputBox.value + '<br>');
    inputBox.value = '';
  } else if (inputBox.value < randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'Too low, guess higher';
    helpBox.push('x ' + '> ' + inputBox.value + '<br>');
    inputBox.value = '';
  }

  helperBox.innerHTML = helpBox.join('');
}

submit.addEventListener('click', guesser);

inputBox.addEventListener('keydown', (e) => {
  if(e.keyCode === 13) {
    guesser();
  }
});
