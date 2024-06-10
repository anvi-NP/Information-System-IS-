const discountContainer = document.querySelector(".discount-container");

const days = document.querySelector(".countdown-timer .days");
const hours = document.querySelector(".countdown-timer .hours");
const minutes = document.querySelector(".countdown-timer .minutes");
const seconds = document.querySelector(".countdown-timer .seconds");

// Time for expiring date can be edit from here [format year-month-date-Time-days-hrs-min-sec]
const countdownDate = new Date("2023-05-23T12:17:00").getTime();

const setCookie = (name, value, duration) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + duration * 60 * 60 * 1000);
  document.cookie = `${name} = ${value};expires=${expires.toUTCString()};path=/`;
};


let t = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  let hoursValue = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, "0");
  let minutesValue = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  let secondsValue = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  days.innerHTML = daysValue;
  hours.innerHTML = hoursValue;
  minutes.innerHTML = minutesValue;
  seconds.innerHTML = secondsValue;

  if (distance < 0) {
    clearInterval(t);
    discountContainer.style.display = "none";
  }
}, 1000);
