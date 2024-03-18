let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.querySelector("#stopBtn");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#resetBtn");

let msec = Number("00");
let secs = Number("00");
let mins = Number("00");

let timerId = null;

startBtn.addEventListener("click", function () {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = Number("00");
});

function startTimer() {
  msec++;
  if (msec == 100) {
    secs++;
    msec = 0;
  }
  if (secs == 60) {
    mins++;
    secs = 0;
  }
  let msecStr = msec < 10 ? "0" + msec : msec;
  let secsStr = secs < 10 ? "0" + secs : secs;
  let minsStr = mins < 10 ? "0" + mins : mins;
  timerDisplay.innerHTML = `${minsStr} : ${secsStr} : ${msecStr}`;
}
