const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleBtn = document.querySelector(".toggle");

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

toggleBtn.addEventListener("click", () => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggleBtn.textContent = "Dark mode";
  } else {
    html.classList.add("dark");
    toggleBtn.textContent = "Light mode";
  }
});

setTime();
setInterval(setTime, 1000);

function setTime() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const today = date.getDate();
  const hours = date.getHours();
  const hoursForClock = hours % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } <span>${ampm}</span>`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${today}</span>`;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return out_min + ((num - in_min) / (in_max - in_min)) * (out_max - out_min);
}
