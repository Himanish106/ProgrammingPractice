// get and set attributes
const link = document.querySelector("a"); // Now link is an object
// console.log(link);

// Attribute of anchor tag is href. So if we want to see what value is stored in the href attribute we can use getAttribute.

console.log(link.getAttribute("href"));

const inputField = document.querySelector(".form-todo input");
console.log(inputField.getAttribute("type"));

//setAttribute
link.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=Llsq1y-HWs4&t=14939s"
);
console.log(link.getAttribute("href"));
