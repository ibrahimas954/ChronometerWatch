const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const hoursText = document.querySelector(".hours");
const startBtn = document.querySelector(".start-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");

let hours = "00";
let minutes = "00";
let seconds = "00";

startBtn.addEventListener("click", () => {
  let startTimer = setInterval(incrementTime, 1000);
});

function incrementTime() {
  seconds++;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (seconds > 59) {
    seconds = "00";
    minutes++;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  }

  if (minutes > 59) {
    minutes = "00";
    hours++;
    if (hours < 10) {
      hours = "0" + hours;
    }
  }

  minutesText.innerText = minutes;
  hoursText.innerText = hours;
  secondsText.innerText = seconds;
}


