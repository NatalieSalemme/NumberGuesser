let inputBox = document.getElementById('input');
let submitButton = document.getElementById('submit');
let resultsBox = document.getElementById('results-box');


// function evaluateNum() {
//
// }
let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);
submit.addEventListener('click', function () {
  // console.log(inputBox.value);
  if(inputBox.value == randomNumber) {
    resultsBox.innerHTML = 'That is correct!';
  } else if(inputBox.value > 100 || inputBox.value < 1) {
    resultsBox.innerHTML = 'Please guess between 1 and 100';
  } else if(inputBox.value > randomNumber) {
    resultsBox.innerHTML = 'Too high, guess lower';
  } else if(inputBox.value < randomNumber) {
    resultsBox.innerHTMl = 'Too low, guess higher';
  }
});
