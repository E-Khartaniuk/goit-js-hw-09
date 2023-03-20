const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);

let timerId = null;

function chengeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorChange() {
  timerId = setInterval(chengeColor, 1000);
  startBtn.setAttribute('disabled', true);
}

function stopColorChange() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
}
