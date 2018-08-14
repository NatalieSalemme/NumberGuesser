let submitButton = document.getElementById('submit');
let resultsBox = document.getElementById('results-box');
let helperBox = document.getElementById('help-box');

let helpBox = [];

let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);

submit.addEventListener('click', function () {
  // console.log(inputBox.value);
    if (helpBox.length > 9 && helpBox.length < 11) {
    // helpBox.classList.add('red-text');
    helpBox.push('YOU LOST!!!!' + '<br>');
  } else if(inputBox.value == randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'That is correct!';
  } else if(inputBox.value > 100 || inputBox.value < 1 && helpBox.length < 11) {
    resultsBox.innerHTML = 'Please guess between 1 and 100';
  } else if(inputBox.value > randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'Too high, guess lower';
    helpBox.push('x ' + '< ' + inputBox.value + '<br>');
  } else if (inputBox.value < randomNumber && helpBox.length < 11) {
    resultsBox.innerHTML = 'Too low, guess higher';
    helpBox.push('x ' + '> ' + inputBox.value + '<br>');
  }

  helperBox.innerHTML = helpBox.join('');
});
