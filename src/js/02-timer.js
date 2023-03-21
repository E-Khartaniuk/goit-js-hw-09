import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateEl = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dayLine = document.querySelector('[data-days]');
const hoursLine = document.querySelector('[data-hours]');
const minutesLine = document.querySelector('[data-minutes]');
const secondsLine = document.querySelector('[data-seconds]');

const date = new Date();
let selectedDatesDay = null;

startBtn.setAttribute('disabled', true);

flatpickr(dateEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      startBtn.setAttribute('disabled', true);
      selectedDatesDay = selectedDates[0];

      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      selectedDatesDay = selectedDates[0];
      startBtn.removeAttribute('disabled');

      Notiflix.Notify.info('Click start BTN');
    }
  },
});

function startCount() {
  const timeCounter = setInterval(function () {
    let currentTime = Date.now();
    let countDown = selectedDatesDay - currentTime;
    const { days, hours, minutes, seconds } = convertMs(countDown);

    dayLine.textContent = days;
    hoursLine.textContent = hours;
    minutesLine.textContent = minutes;
    secondsLine.textContent = seconds;
    const endOfTime = selectedDatesDay - currentTime;
    // console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
    if (endOfTime <= 1000) {
      Notiflix.Notify.success('End of time!');
      clearInterval(timeCounter);
      return;
    }
  }, 1000);
}

startBtn.addEventListener('click', startCount);

//
//
//
//
//
//
//

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const counterStyle = document.querySelectorAll('.value');
const ListStyle = document.querySelector('.timer');

ListStyle.style.cssText = 'display: flex; gap: 30px; font-family: monospace;';

counterStyle.forEach(
  el =>
    (el.style.cssText =
      'display: flex; gap: 10px; font-size: 30px; font-family: monospace; justify-content: center')
);
