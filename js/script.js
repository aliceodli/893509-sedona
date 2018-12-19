var link = document.querySelector(".button-find");
var searchform = document.querySelector(".search-form");
var arrival = document.getElementById("arrival-date");
var departure = document.getElementById("departure");
var adults = document.getElementById("adults");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchform.classList.toggle("form-show");
  arrival.focus();
});

searchform.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value) {
    evt.preventDefault();
    arrival.classList.add("form-error")
    departure.classList.add("form-error")
    adults.classList.add("form-error")
  }
});