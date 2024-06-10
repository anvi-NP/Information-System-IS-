// Selecting the element with class "discount-container"
const discountContainer = document.querySelector(".discount-container");
// Selecting the elements with class "days", "hours", "minutes", and "seconds"
const days = document.querySelector(".countdown-timer .days");
const hours = document.querySelector(".countdown-timer .hours");
const minutes = document.querySelector(".countdown-timer .minutes");
const seconds = document.querySelector(".countdown-timer .seconds");
// Selecting the body element
const body = document.querySelector('body');

// Time for expiring date can be edit from here [format year-month-date-Time-days-hrs-min-sec]
const countdownDate = new Date("2024-08-30T12:17:00").getTime();

// Function to set a cookie
const setCookie = (name, value, duration) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + duration * 60 * 60 * 1000);
  document.cookie = `${name} = ${value};expires=${expires.toUTCString()};path=/`;
};

// Code for Displaying the timer
let t = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

 // Calculating the values for days, hours, minutes, and seconds
  let daysValue = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    //.padStart(2, "0"): This method is used to pad the string with leading zeros if it has less than 2 characters. The first argument specifies the desired length of the string (in this case, 2), and the second argument specifies the character to use for padding (in this case, "0"). If the string already has a length equal to or greater than the desired length, no padding is applied.
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

// Updating the HTML content of the elements with the calculated values
  days.innerHTML = daysValue;
  hours.innerHTML = hoursValue;
  minutes.innerHTML = minutesValue;
  seconds.innerHTML = secondsValue;

  
  // Checking if the countdown has expired
  if (distance < 0) {
    clearInterval(t);
    // Hiding the discount container
    discountContainer.style.display = "none";
    // Resetting the body margin top
    body.style.marginTop = '0px';
  } 
  // Code for updating the timer every 1 second (1000 milliseconds)

}, 1000);

