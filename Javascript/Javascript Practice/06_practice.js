const form = document.getElementById("form");
const result = document.getElementById("result");
const input = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = input.value.toString().length;
});
