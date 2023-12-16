// Show the number of times the button has been clicked

var clicks = 0;
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("You clicked me!!!");
  clicks++;
  console.log("Number of clicks:", clicks);
});
