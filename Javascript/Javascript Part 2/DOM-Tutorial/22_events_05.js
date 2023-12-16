// event object

const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", function (event) {
  console.log(event);
});

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine --- line by line execute karta hai
// browser ---- js Engine + extra features
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ----- 2
// 1.) callback function hai vo js Engine ko degi ......
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi

// Now we knew we could not use arrow function within a block scope because it shows us the reference of one level up so. But using this concept we can use arrow functions here

// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach(function (button) {
//   button.addEventListener("click", (event) => {
//     // console.log(event.currentTarget);
//     // else
//     console.log(event.target); // There is difference between target and current target but we will learn about that later. For the timing we will be using currentTarget 
//   });
// });
