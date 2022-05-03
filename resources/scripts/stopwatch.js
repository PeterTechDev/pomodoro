console.log('stopwatching');
const clockDisplay = document.getElementById('js-clock');
const startBtn = document.querySelector('.js-startBtn');
const stopBtn = document.querySelector('.js-stopBtn');

stopBtn.addEventListener('click', stopTimer)

startBtn.addEventListener('click', () => {
  if (startBtn.classList.contains('js-pauseBtn')) {
    console.log('pausei');
    pauseTimer();
  } else {
    startTimer();
  }
});

let pomodoro = 20 - 1;
const shortBreak = 15 - 1;

let minutes = pomodoro;
let pseudoSeconds = 60;
let seconds = 0

function timer() {
  if (seconds < 60) {
    pseudoSeconds -= 1;
    seconds = pseudoSeconds < 10 ? '0' + pseudoSeconds : pseudoSeconds //ajustar segunda casa decimal
    clockDisplay.innerHTML = `${minutes}:${seconds}`;

    if (pseudoSeconds === 0) {
      minutes -= 1;
      pseudoSeconds = 60;
    }
  }
}

let secondCounter = '';

//
function startTimer(targetBtn){
  // if (targetBtn.className)
  secondCounter = setInterval(timer, 1000);
  startBtn.classList.remove( 'js-startBtn');
  startBtn.classList.add('c-button--pause', 'js-pauseBtn');
  // startBtn.classList.remove('js-startBtn');

  console.log('começou');
}

function pauseTimer(){
  clearInterval(secondCounter);
  startBtn.classList.remove('c-button--pause', 'js-pauseBtn');
  startBtn.classList.add('js-startBtn');
}

function stopTimer(){
  clearInterval(secondCounter);
  pomodoro = 20;
  pseudoSeconds = 60;

  clockDisplay.innerHTML = '20:00';
  console.log('PAREI');
}

