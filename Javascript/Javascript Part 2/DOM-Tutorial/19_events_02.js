// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function () {
//   console.log("You clicked me!!!");
//   console.log("Value of this is ", this);
// });
// In case of anonymous function and normal functions the value of this is the button itself.

const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("You clicked me!!!");
  console.log("Value of this is ", this);
});

// In arrow functions as we know we always look one level up the current reference that is this. So in this case obviously it will be a window object
