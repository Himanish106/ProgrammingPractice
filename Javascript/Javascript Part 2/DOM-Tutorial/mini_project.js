// Whenever you click the button the background colour should change

const mainButton = document.querySelector("button");
const body = document.body;
const currentColour = document.querySelector("span");
// red-255, green-255, blue-255
// We need to generate a random value for each color
// To generate a random number we can use Math.random function. And in order to not get in decimal we can use either ceil or floor. Better to use floor

function randomColourGenerator() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const randomColour = `rgb(${red},${green},${blue})`;
  return randomColour;
}

mainButton.addEventListener("click", () => {
  const randomColour = randomColourGenerator();
  body.style.backgroundColor = randomColour;
  currentColour.textContent = randomColour;
});
