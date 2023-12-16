// intro to events ---> There are many ways to link an event but we will learn the best method.

const btn = document.querySelector(".btn-headline");
console.dir(btn);

// btn.onclick = () => {
//   console.log("You clicked me");
// }; ----> Also not a good way

// Best Way. Only use this you can forget others
// method---> addEventListener

function clickMe() {
  console.log("You clicked me");
}

// btn.addEventListener("click", clickMe);

// Always better to use arrow function or function definition here
// btn.addEventListener("click", function () {
//   console.log("You clicked me!!!");
// });
btn.addEventListener("click", () => {
  console.log("You clicked me!!!");
});
