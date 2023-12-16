// Select element using query selector

// Just as we select element in CSS here also using query selector we can select element by that

const mainHeading = document.querySelector("#Main-heading");
console.log(mainHeading); // So it returns an object
const listClass = document.querySelector(".list-item"); // But here we have multiple list-item class. But querySelector returns only the first occurence of the class.
console.log(listClass); // Here we get only the first list object that is "Home".

// To get all the objects that have a list-item class we have a method know as querySelectorAll

const allListClass = document.querySelectorAll(".list-item");
console.log(allListClass);
// Output:
// NodeList(3) [li.list-item, li.list-item, li.list-item] ---> This is basically an array like object but not an array. We can traverse on it
// 0:li.list-item
// 1:li.list-item
// 2:li.list-item
// length:3
