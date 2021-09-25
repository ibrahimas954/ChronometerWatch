const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const hoursText = document.querySelector(".hours");
const startBtn = document.querySelector(".start-btn ");

let hours = 00;
let minutes = 59;
let seconds = 55;

function incrementSeconds() {
  seconds++;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (seconds > 59) {
    seconds = 00;
    minutes++;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  }

  if (minutes > 59) {
    minutes = 00;
    hours++;
  }

  minutesText.innerText = minutes;
  hoursText.innerText = hours;
  secondsText.innerText = seconds;
}

var cancel = setInterval(incrementSeconds, 1000);
console.log(seconds);
