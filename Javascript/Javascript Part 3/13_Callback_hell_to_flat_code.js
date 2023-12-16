// We will transform the callback hell to flat code
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

// changeText(heading1, "one", "red", 1000)
//   .then(() => {
//     changeText(heading2, "two", "pink", 1000);
//   })
//   .then(() => {
//     changeText(heading3, "three", "blue", 1000);
//   });

// The issue with your code is that you are not returning the promise from the nested changeText calls inside the then blocks. Since the nested changeText calls are not returning a promise, the subsequent then blocks are not waiting for them to complete, and the delay for heading 3 is not occurring as expected.To fix this, you need to add a return statement before the changeText calls in the then blocks. This will ensure that the nested changeText calls return a promise, and the subsequent then blocks wait for them to complete before executing.

// changeText(heading1, "one", "red", 1000)
//   .then(() => {
//     return changeText(heading2, "two", "pink", 1000);
//   })
//   .then(() => {
//     return changeText(heading3, "three", "blue", 1000);
//   });

// In arrow functions if you have a single line you don't need to write return statement and curly braces
changeText(heading1, "one", "red", 1000)
  .then(() => changeText(heading2, "two", "purple", 1000))
  .then(() => changeText(heading3, "three", "green", 1000))
  .then(() => changeText(heading4, "four", "orange", 1000))
  .then(() => changeText(heading5, "four", "orange", 1000))
  .then(() => changeText(heading6, "four", "orange", 1000))
  .then(() => changeText(heading7, "four", "orange", 1000))
  .then(() => changeText(heading8, "four", "orange", 1000))
  .then(() => changeText(heading9, "four", "orange", 1000))
  .then(() => changeText(heading10, "four", "orange", 1000))
  .catch((error) => {
    alert(error);
  });
