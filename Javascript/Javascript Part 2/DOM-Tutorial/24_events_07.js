// Pratice with click events.
// Whenever you'll click the buttons its background must turn yellow and text must turn white

const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "#333";
  });
});
