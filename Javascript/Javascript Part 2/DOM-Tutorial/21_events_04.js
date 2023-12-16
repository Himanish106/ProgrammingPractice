const allButtons = document.querySelectorAll(".my-buttons button");

// Process to add click in all buttons
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     // console.log("You clicked me!!!"); ---> Though the same text is coming but still we have added different event listeners for each button. The event listeners are not same. We can understand using this keyword.
//     // console.log(this);
//     // Suppose we want to display the text node in the console as we click the buttons
//     // console.dir(button); //---> You can use this process in case you have forgot a property
//     // console.log(button.innerHTML)
//     // else
//     // console.log(button.textContent)
//     console.log(this.innerText); // You can use this keyword also if you are using function definition but obviously you cannot use this keyword if you are using arrow functions
//   });
// }

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this);
  });
});
