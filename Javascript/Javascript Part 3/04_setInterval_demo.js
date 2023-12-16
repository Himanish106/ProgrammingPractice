const body = document.body;
const button = document.querySelector("button");
const myId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  body.style.background = `rgb(${red},${green},${blue})`;
}, 1000); // Now this function is continuously changing the background colour. Our job is to stop changing the background colour as we click the button. Now as setTimeout function setInterval also returns an id. We can use it to stop these.

button.addEventListener("click", () => {
  clearInterval(myId);
  button.textContent = body.style.background;
});
