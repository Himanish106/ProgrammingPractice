// Change text
// textContent and innerText

const mainHeading = document.getElementById("Main-heading");
// console.log(mainHeading.textContent);
// // Now if I want to change the text
// mainHeading.textContent = "Area of Task Management";
// console.log(mainHeading.textContent);

console.log(mainHeading.textContent); // I have set a span content in the html tag within the "Main-heading" class. Even I have set the display as none then also in the console I am getting the full output that means also the output in the span tag even also I have set the element as none.
console.log(mainHeading.innerText); // It only shows that content in the console what is being displayed on the screen
